<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSecretRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'message' => 'required|string|min:1',
            'expires_in' => 'required|numeric|in:' . implode(',', array_map(fn($item) => $item['value'], config('secrets.expiry_options'))),
        ];
    }

    public function attributes()
    {
        return [
            'expires_in' => 'expiry',
        ];
    }
}
