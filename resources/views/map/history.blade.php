@extends('layouts.map.app')

@section('content')
<container class="flex-grow">
    <div id="left-side-bar" data-transportations="{{ $transportations }}"></div>

    <div id="bottom-menu" data-transportation-detail="{{ $transportationDetail }}"></div>

    <div id="map" class="h-full z-10"></div>
</container>

@endsection

@push('java.script')
<script>
    var url = "{{ Asset('gpx/dummy.GPX') }}"; // URL to your GPX file or the GPX itself

    new L.GPX(url, {async: true}).on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
    }).addTo(map);
</script>
@endpush
