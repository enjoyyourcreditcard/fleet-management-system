@extends('layouts.dashboard.app')

@section('content')
<container class="flex flex-col gap-8 text-neutral-200 p-8 w-full">
    <header class="text-2xl font-bold flex justify-start items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-gas-station"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" /><path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" /><path d="M3 20l12 0" /><path d="M18 7v1a1 1 0 0 0 1 1h1" /><path d="M4 11l10 0" /></svg>
        Fuel
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
                    <th scope="col" class="px-6 py-3 text-right">
                        Konsumsi BBM Harian (liter)
                    </th>
                    <th scope="col" class="px-6 py-3 text-right">
                        Harga BBM per Liter (Rp)
                    </th>
                    <th scope="col" class="px-6 py-3 text-right">
                        Biaya BBM Harian (Rp)
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
                        120
                    </td>
                    <td class="px-6 py-4 text-right">
                        10
                    </td>
                    <td class="px-6 py-4 text-right">
                        10,000
                    </td>
                    <td class="px-6 py-4 text-right">
                        100,000
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
                        150
                    </td>
                    <td class="px-6 py-4 text-right">
                        15
                    </td>
                    <td class="px-6 py-4 text-right">
                        10,000
                    </td>
                    <td class="px-6 py-4 text-right">
                        150,000
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
                        130
                    </td>
                    <td class="px-6 py-4 text-right">
                        11.82
                    </td>
                    <td class="px-6 py-4 text-right">
                        10,000
                    </td>
                    <td class="px-6 py-4 text-right">
                        118,200
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
                        100
                    </td>
                    <td class="px-6 py-4 text-right">
                        12.5
                    </td>
                    <td class="px-6 py-4 text-right">
                        8,000
                    </td>
                    <td class="px-6 py-4 text-right">
                        100,200
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
                        200
                    </td>
                    <td class="px-6 py-4 text-right">
                        40
                    </td>
                    <td class="px-6 py-4 text-right">
                        8,000
                    </td>
                    <td class="px-6 py-4 text-right">
                        320,000
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
                        90
                    </td>
                    <td class="px-6 py-4 text-right">
                        9
                    </td>
                    <td class="px-6 py-4 text-right">
                        10,000
                    </td>
                    <td class="px-6 py-4 text-right">
                        90,000
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
