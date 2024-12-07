<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSecretRequest;
use App\Http\Requests\UpdateSecretRequest;
use App\Models\Secret;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class SecretController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('signed', only: ['show', 'decrypt']),
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSecretRequest $request)
    {
        $secret = Secret::create([
            'message' => $request->message,
            'expires_at' => $expires_at = now()->addMinutes((int)$request->expires_in),
            'user_id' => optional($request->user())->id
        ]);

        $url = URL::temporarySignedRoute('secret.show', $expires_at, ['secret' => $secret->hash_id]);

        return back()->with('flash', [
            'secret' => [
                'url' => $url
            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($secret)
    {
        return Inertia::render('Welcome', ['secret' => $secret, 'decryptUrl' => URL::temporarySignedRoute('secret.decrypt', now()->addMinutes(5), ['secret' => $secret])]);
    }

    public function decrypt(Secret $secret)
    {
        return back()->with('flash', [
            'secret' => [
                'message' => $secret->message,
            ]
        ]);
    }
}
