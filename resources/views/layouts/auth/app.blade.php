<!doctype html>
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

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/css/auth/app.css', 'resources/js/app.js'])
</head>

<body class="h-screen overflow-hidden flex flex-col justify-center items-center">
    @yield('content')
</body>
</html>
