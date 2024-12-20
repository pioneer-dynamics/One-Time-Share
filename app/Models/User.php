<?php

namespace App\Models;

use Laravel\Cashier\Billable;
use Laravel\Sanctum\HasApiTokens;
use App\Http\Resources\PlanResource;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use function Illuminate\Events\queueable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use PioneerDynamics\LaravelPasskey\Traits\HasPasskeys;
use Illuminate\Foundation\Auth\User as Authenticatable;
use PioneerDynamics\LaravelPasskey\Contracts\PasskeyUser;

class User extends Authenticatable implements PasskeyUser, MustVerifyEmail
{
    use HasApiTokens;

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use HasPasskeys;
    use Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
        'subscription',
        'plan',
        'frequency',
    ];

    public function getSubscriptionAttribute()
    {
        return $this->subscriptions()->active()->first();
    }

    public function getPlanAttribute()
    {
        $stripe_price_id = optional($this->subscription)->stripe_price;

        return new PlanResource(Plan::where('stripe_monthly_price_id', $stripe_price_id)->orWhere('stripe_yearly_price_id', $stripe_price_id)->first());
    }
    
    public function getFrequencyAttribute()
    {
        $stripe_price_id = optional($this->subscription)->stripe_price;

        $plan = Plan::where('stripe_monthly_price_id', $stripe_price_id)->orWhere('stripe_yearly_price_id', $stripe_price_id)->first();

        if($plan)
            return $plan->stripe_monthly_price_id == $stripe_price_id ? 'monthly' : 'yearly';
        else
            return 'monthly';
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function secrets()
    {
        return $this->hasMany(Secret::class);
    }

    protected static function booted(): void
    {
        static::updated(queueable(function (User $customer) {
            if ($customer->hasStripeId()) {
                $customer->syncStripeCustomerDetails();
            }
        }));

        static::deleting(queueable(function (User $customer) {
            $customer->subscriptions()->active()->each(function ($subscription) {
                $subscription->cancelNow();
            });
        }));
    }
}
