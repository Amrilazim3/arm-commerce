<?php

namespace App\Http\Middleware;

use App\Http\Controllers\User\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $user = Auth::user();
        return array_merge(parent::share($request), [
            'auth' => [
                'isLoggedIn' => Auth::check() ? true : false,
                'user' => Auth::check() ? [
                    'name' => $user->name,
                    'email' => $user->email,
                    'profileImageUrl' => $user->profile_image_url,
                    'phoneNumber' => $user->phone_number,
                    'gender' => $user->gender,
                    'dateOfBirth' => $user->date_of_birth,
                    'emailIsVerfied' => $user->email_verified_at || $user->service_id ? true : false,
                    'isAdmin' => $user->hasRole('admin') ? true : false
                ] : null
            ],
            'flash' => [
                'success' => function () use ($request) {
                    return $request->session()->get('success');
                },
                'error' => function () use ($request) {
                    return $request->session()->get('error');
                },
            ]
        ]);
    }
}
