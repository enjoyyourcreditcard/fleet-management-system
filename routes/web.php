<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MapController;
use App\Http\Controllers\DashboardController;

Auth::routes();

Route::get('/', fn() => redirect()->route('index.map'))->name('index');

Route::get('/map', [MapController::class, 'index'])->name('index.map');

Route::get('/map/history', [MapController::class, 'history'])->name('index.history');

Route::get('/dashboard', fn() => redirect()->route('index.dashboard.activity'))->name('index.dashboard');

// Route::get('/dashboard', [DashboardController::class, 'index'])->name('index.dashboard');

Route::get('/dashboard/activity', fn() => view('dashboard.activity.index'))->name('index.dashboard.activity');

Route::get('/dashboard/fuel', fn() => view('dashboard.fuel.index'))->name('index.dashboard.fuel');

