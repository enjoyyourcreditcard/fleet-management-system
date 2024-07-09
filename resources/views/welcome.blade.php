<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>GPS Track</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ Asset('leaflet/leaflet.css') }}" />
        <script src="{{ Asset('leaflet/leaflet.js') }}"></script>

        <!-- Styles -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="h-screen flex flex-col overflow-hidden">
        <nav class="bg-neutral-700 text-neutral-200 border-b border-neutral-500 py-2 px-8 flex justify-between items-center">
            <div class="flex gap-2 items-center justify-start">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                <span>Admin</span>
            </div>

            <img width="36" height="36" src="{{ Asset('images/spero.png') }}" alt="logo">

            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout text-red-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
        </nav>

        <container class="flex-grow">
            <div id="left-side-bar"></div>

            <div id="bottom-menu"></div>

            <div id="map" class="h-full z-10"></div>
        </container>

        <script>
            var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            });

            var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                maxZoom: 19,
            });

            var map = L.map('map', {
                center: [-6.175742761104458, 106.82497008779268],
                zoom: 10,
                layers: [osm, osmHOT]
            });

            var baseMaps = {
                "OpenStreetMap.HOT": osmHOT,
                "OpenStreetMap": osm
            };

            L.control.layers(baseMaps).addTo(map);

            L.marker([-6.360601472373637, 106.8272343507726]).addTo(map)
                .bindPopup('Muhammad Fattan Habrizi')
                .openPopup();

            L.marker([-6.411549356883173, 106.86401276812185]).addTo(map)
                .bindPopup('Nur Hamada')
                .openPopup();

            L.marker([-6.175365671306495, 106.82714822082814]).addTo(map)
                .bindPopup('Sammy')
                .openPopup();

            L.marker([-6.298243879660964, 106.63744560007916]).addTo(map)
                .bindPopup('Helly')
                .openPopup();

            L.marker([-6.126561655240927, 106.65506652884146]).addTo(map)
                .bindPopup('Ishtar')
                .openPopup();

            L.marker([-6.597660860238665, 106.7995590712114]).addTo(map)
                .bindPopup('Mela')
                .openPopup();

            L.marker([-6.37182345687522, 106.8809869969397]).addTo(map)
                .bindPopup('Jonathan Joestar')
                .openPopup();

            L.marker([-6.3728443678617985, 106.83443422711113]).addTo(map)
                .bindPopup('Nur Wahid Septian')
                .openPopup();
        </script>
    </body>
</html>
