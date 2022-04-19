<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home');
    });
    
    Route::get('/login', function (Request $request) {
        return Inertia::render('Auth/Login');
    });
    Route::get('/register', function (Request $request) {
        return Inertia::render('Auth/Register');
    });
});

