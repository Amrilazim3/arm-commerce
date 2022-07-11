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
use App\Http\Controllers\User\Account\PaymentController;
use App\Http\Controllers\User\Account\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index'])->name('products.index');

Route::middleware('guest')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home.index');

    Route::resource('register', RegisterController::class)->only(['index', 'store']);
    
    Route::resource('login', LoginController::class)->only(['index', 'store']);
    
    Route::get('/oauth/{service}', [OAuthServiceController::class, 'redirect']);
    Route::get('/oauth/{service}/callback', [OAuthServiceController::class, 'handleCallback']);
    Route::post('/oauth/login', [OAuthServiceController::class, 'login']);
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout.destroy');

    Route::prefix('/user/account')->name('user.account.')->group(function () {
        Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        // use resource method
        Route::get('/payments', [PaymentController::class, 'index'])->name('payment.index');
        
        Route::resource('addresses', AddressController::class)->only(['index', 'store', 'update', 'destroy']);
        
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
    Route::post('/send', [EmailVerificationController::class, 'send'])
        ->middleware(['auth', 'throttle:6,1'])
        ->name('send');
});

Route::prefix('/password')->name('password.')->group(function () {
    Route::get('/forgot', [PasswordController::class, 'forgot'])->name('forgot');
    Route::post('/forgot', [PasswordController::class, 'email'])->name('email');
    Route::get('/reset/{token}', [PasswordController::class, 'reset'])->name('reset');
    Route::patch('/reset', [PasswordController::class, 'update'])->name('update');
});