<?php

use App\Http\Controllers\Admin\Account\ProfileController as AdminProfileController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\Account\ChangePasswordController as AdminChangePasswordController;
use App\Http\Controllers\Admin\Account\ChangeEmailController as AdminChangeEmailController;
use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\OAuthServiceController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\User\Account\AddressController;
use App\Http\Controllers\User\Account\ChangeEmailController;
use App\Http\Controllers\User\Account\ChangePasswordController;
use App\Http\Controllers\User\Account\ProfileController;
use Illuminate\Support\Facades\Route;

// can be visit by guest, user, admin but with different permission.
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

    // route for admin role
    Route::prefix('/admin')->middleware('role:admin')->name('admin.')->group(function () {
        Route::prefix('/account')->name('account.')->group(function () {
            Route::get('/profile', [AdminProfileController::class, 'index'])->name('index');
            Route::patch('/profile', [AdminProfileController::class, 'update'])->name('update');

            Route::get('/email/change', [AdminChangeEmailController::class, 'index'])->name('email.change.index');
            Route::patch('/email/change', [AdminChangeEmailController::class, 'update'])->name('email.change.update');

            Route::get('/password/change', [AdminChangePasswordController::class, 'index'])->name('password.change.index');
            Route::patch('/password/change', [AdminChangePasswordController::class, 'update'])->name('password.change.update');
        });

        Route::resource('/products', AdminProductController::class);
    });

    // route for user role
    Route::prefix('/user')->middleware('role:user')->name('user.')->group(function () {
        // account routes.
        Route::prefix('/account')->name('account.')->group(function () {
            Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            
            Route::resource('addresses', AddressController::class)->only(['index', 'store', 'update', 'destroy']);
            
            Route::get('/email/change', [ChangeEmailController::class, 'index'])->name('email.change.index');
            Route::patch('/email/change', [ChangeEmailController::class, 'update'])->name('email.change.update');
            
            Route::get('/password/change', [ChangePasswordController::class, 'index'])->name('password.change.index');
            Route::patch('/password/change', [ChangePasswordController::class, 'update'])->name('password.change.update');
        });

        // purchase routes.
        Route::prefix('/purchase')->name('purchase.')->group(function () {
            // 
        });
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