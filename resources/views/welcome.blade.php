<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="{{ Asset('leaflet/leaflet.css') }}" />
        <script src="{{ Asset('leaflet/leaflet.js') }}"></script>

        <!-- Styles -->
        @vite('resources/css/app.css')
    </head>
    <body class="h-screen flex flex-col">

        <div id="map" class="flex-grow"></div>

        <script>
            var map = L.map('map', {
                center: [-6.175742761104458, 106.82497008779268],
                zoom: 13
            });

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19
            }).addTo(map);
        </script>
    </body>
</html>
