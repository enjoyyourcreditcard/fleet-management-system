<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transportation;

class MapController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request) {
        $transportations = Transportation::all();

        $transportationDetail = $request->driver ? $transportations->where('driver', $request->driver)->first() : null;

        return view('map.index', compact(['transportations', 'transportationDetail']));
    }

    public function History(Request $request) {
        $transportations = Transportation::all();

        $transportationDetail = $request->driver ? $transportations->where('driver', $request->driver)->first() : null;

        return view('map.history', compact(['transportations', 'transportationDetail']));
    }
}
