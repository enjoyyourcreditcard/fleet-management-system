@extends('layouts.map.app')

@section('content')
<container class="flex-grow">
    <div id="left-side-bar" data-transportations="{{ $transportations }}"></div>

    <div id="bottom-menu" data-transportation-detail="{{ $transportationDetail }}"></div>

    <div id="map" class="h-full z-10"></div>
</container>
@endsection
