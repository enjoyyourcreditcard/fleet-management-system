<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transportation;

class DashboardController extends Controller
{
    public function index(Request $request) {
        $transportations = Transportation::all();

        $transportationDetail = $request->driver ? $transportations->where('driver', $request->driver)->first() : null;

        return view('welcome', compact(['transportations', 'transportationDetail']));
    }
}
