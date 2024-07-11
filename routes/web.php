<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

Auth::routes();

Route::get('/', [DashboardController::class, 'index'])->name('index');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
