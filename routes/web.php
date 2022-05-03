<?php

use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\OAuthServiceController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\User\Account\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index'])->name('products.index');

Route::middleware('guest')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home.index');

    Route::get('/register', [RegisterController::class, 'index'])->name('register.index');
    Route::post('/register', [RegisterController::class, 'store'])->name('register.store');

    Route::get('/login', [LoginController::class, 'index'])->name('login.index');
    Route::post('/login', [LoginController::class, 'store'])->name('login.store');
    
    Route::get('/oauth/{service}', [OAuthServiceController::class, 'redirect']);
    Route::get('/oauth/{service}/callback', [OAuthServiceController::class, 'handleCallback']);
    Route::post('/oauth/login', [OAuthServiceController::class, 'login']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('login.destroy');

    Route::name('user.account.')->group(function () {
        Route::get('/user/account/profile', [ProfileController::class, 'index'])->name('profile.index');
    });
});

Route::prefix('/email/verify')->name('verification.')->group(function () {
    Route::get('/{id}/{hash}', [EmailVerificationController::class, 'verify'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verify');
    Route::post('/resend', [EmailVerificationController::class, 'resend'])
        ->middleware(['auth', 'throttle:6,1'])
        ->name('send');
});
