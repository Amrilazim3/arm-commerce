<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\OAuthServiceController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\User\Account\AddressController;
use App\Http\Controllers\User\Account\ChangeEmailController;
use App\Http\Controllers\User\Account\ChangePasswordController;
use App\Http\Controllers\User\Account\EmailVerificationController;
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
    Route::post('/logout', [LoginController::class, 'destroy'])->name('login.destroy'); // logout.destroy

    Route::prefix('/user/account')->name('user.account.')->group(function () {
        Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::get('/addresses', [AddressController::class, 'index'])->name('address.index'); // addresses.index
        Route::post('/addresses', [AddressController::class, 'store'])->name('address.store'); // addresses.store
        Route::patch('/addresses/{address}', [AddressController::class, 'update'])->name('address.update'); // addresses.update
        Route::delete('/addresses/{address}', [AddressController::class, 'destroy'])->name('address.destroy'); // addresses.destroy
        Route::get('/email/change', [ChangeEmailController::class, 'index'])->name('email.change.index');
        Route::patch('/email/change', [ChangeEmailController::class, 'update'])->name('email.change.update');
        Route::get('/password/change', [ChangePasswordController::class, 'index'])->name('password.change.index');
        Route::patch('/password/change', [ChangePasswordController::class, 'update'])->name('password.change.update');
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

Route::prefix('/password')->name('password.')->group(function () {
    Route::get('/forgot', [PasswordController::class, 'forgot'])->name('forgot');
    Route::post('/forgot', [PasswordController::class, 'email'])->name('email');
    Route::get('/reset/{token}', [PasswordController::class, 'reset'])->name('reset');
    Route::patch('/reset', [PasswordController::class, 'update'])->name('update');
});