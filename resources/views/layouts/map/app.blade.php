<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="{{ ('images/favicon_io/apple-touch-icon.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ ('images/favicon_io/apple-touch-icon.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ ('images/favicon_io/apple-touch-icon.png') }}">

        <!-- Title -->
        <title>{{ config('app.name', 'Laravel') }}</title>

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

            <a href="{{ Route('index') }}">
                <img width="36" height="36" src="{{ Asset('images/spero.png') }}" alt="logo">
            </a>

            <div class="flex justify-center items-center gap-8">
                <a title="Dashboard" class="flex flex-col justify-center items-center hover:brightness-125" href="{{ Route('index.dashboard') }}">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-app-window text-neutral-200"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M6 8h.01" /><path d="M9 8h.01" /></svg>
                    <span class="text-neutral-200 text-xs hidden md:inline-block">Dashboard</span>
                </a>

                <div id="logout-button" data-logout-route="{{ route('logout') }}" data-token="{{ csrf_token() }}"></div>
            </div>
        </nav>

        @yield('content')

        <script>
            const transportations = {{ Js::from($transportations) }};
            const transportationDetail = {{ Js::from($transportationDetail) }};
        </script>

        <script src="{{ Asset('js/map.js') }}"></script>
    </body>
</html>
