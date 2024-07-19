@extends('layouts.dashboard.app')

@section('content')
<container class="flex flex-col gap-8 text-neutral-200 p-8 w-full">
    <header class="text-2xl font-bold flex justify-start items-center gap-2">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-strava"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" /></svg>
        Activity
    </header>

    <hr class="border-neutral-500">

    <div class="overflow-x-auto w-full">
        <table class="w-full text-sm text-left rtl:text-right text-neutral-200 border border-neutral-500 rounded-lg">
            <thead class="border-b dark:bg-neutral-700 border-neutral-500">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Tanggal
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Kendaraan
                    </th>
                    <th scope="col" class="px-6 py-3 text-right">
                        Jarak Tempuh Harian (km)
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Waktu Mulai
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Waktu Tiba
                    </th>
                    <th scope="col" class="px-6 py-3 ">
                        Tujuan Perjalanan
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Aksi
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b bg-neutral-700 border-neutral-500">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        09 July 2024
                    </th>
                    <td class="px-6 py-4">
                        Toyota Sprinter Trueno 3door GT-APEX
                    </td>
                    <td class="px-6 py-4 text-right">
                        40
                    </td>
                    <td class="px-6 py-4">
                        08:00
                    </td>
                    <td class="px-6 py-4">
                        10:00
                    </td>
                    <td class="px-6 py-4">
                        Halte Harmoni Central Busway
                    </td>
                    <td class="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </td>
                </tr>
                <tr class="border-b bg-neutral-700 border-neutral-500">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        09 July 2024
                    </th>
                    <td class="px-6 py-4">
                        Mazda ɛ̃fini RX-7 Type R
                    </td>
                    <td class="px-6 py-4 text-right">
                        30
                    </td>
                    <td class="px-6 py-4">
                        11:00
                    </td>
                    <td class="px-6 py-4">
                        13:00
                    </td>
                    <td class="px-6 py-4">
                        Halte Monas (Monumen Nasional)
                    </td>
                    <td class="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </td>
                </tr>
                <tr class="border-b bg-neutral-700 border-neutral-500">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        09 July 2024
                    </th>
                    <td class="px-6 py-4">
                        Subaru Impreza WRX STi Coupe Type R Version V
                    </td>
                    <td class="px-6 py-4 text-right">
                        60
                    </td>
                    <td class="px-6 py-4">
                        09:00
                    </td>
                    <td class="px-6 py-4">
                        12:00
                    </td>
                    <td class="px-6 py-4">
                        Halte Sarinah
                    </td>
                    <td class="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </td>
                </tr>
                <tr class="border-b bg-neutral-700 border-neutral-500">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        09 July 2024
                    </th>
                    <td class="px-6 py-4">
                        Mazda SAVANNA RX-7 ∞ III
                    </td>
                    <td class="px-6 py-4 text-right">
                        20
                    </td>
                    <td class="px-6 py-4">
                        07:30
                    </td>
                    <td class="px-6 py-4">
                        09:30
                    </td>
                    <td class="px-6 py-4">
                        Halte Dukuh Atas 2
                    </td>
                    <td class="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </td>
                </tr>
                <tr class="border-b bg-neutral-700 border-neutral-500">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        09 July 2024
                    </th>
                    <td class="px-6 py-4">
                        Nissan Skyline GT-R V-Spec II
                    </td>
                    <td class="px-6 py-4 text-right">
                        50
                    </td>
                    <td class="px-6 py-4">
                        13:00
                    </td>
                    <td class="px-6 py-4">
                        15:00
                    </td>
                    <td class="px-6 py-4">
                        Halte Bundaran HI
                    </td>
                    <td class="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </td>
                </tr>
                <tr class="border-b bg-neutral-700 border-neutral-500">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        09 July 2024
                    </th>
                    <td class="px-6 py-4">
                        Nissan SilEighty
                    </td>
                    <td class="px-6 py-4 text-right">
                        10
                    </td>
                    <td class="px-6 py-4">
                        17:30
                    </td>
                    <td class="px-6 py-4">
                        18:00
                    </td>
                    <td class="px-6 py-4">
                        Halte Tosari ICBC
                    </td>
                    <td class="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</container>
@endsection
