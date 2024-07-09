import React from 'react';
import ReactDOM from 'react-dom/client';

function Event() {
    return (
        <>
            <div className="p-4 border-b border-neutral-500">
                <input type="text" placeholder="Search.." className="w-full px-2 py-1 bg-neutral-700 border border-neutral-500 rounded-lg" />
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-neutral-200">
                    <thead className="border-b dark:bg-neutral-700 border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Waktu
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Objek
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acara
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-neutral-700 border-neutral-500">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                05:11:59 2024-07-09
                            </th>
                            <td className="px-6 py-4">
                                Mazda ɛ̃fini RX-7 Type R
                            </td>
                            <td className="px-6 py-4">
                                Sampai di tujuan
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            </td>
                        </tr>
                        <tr className="border-b bg-neutral-700 border-neutral-500">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                05:11:59 2024-07-09
                            </th>
                            <td className="px-6 py-4">
                                Toyota Sprinter Trueno 3door GT-APEX
                            </td>
                            <td className="px-6 py-4">
                                Terlalu cepat
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            </td>
                        </tr>
                        <tr className="border-b bg-neutral-700 border-neutral-500">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                05:11:59 2024-07-09
                            </th>
                            <td className="px-6 py-4">
                                Mazda ɛ̃fini RX-7 Type R
                            </td>
                            <td className="px-6 py-4">
                                Terlalu cepat
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            </td>
                        </tr>
                        <tr className="border-b bg-neutral-700 border-neutral-500">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                05:11:59 2024-07-09
                            </th>
                            <td className="px-6 py-4">
                                Nissan Silvia K's
                            </td>
                            <td className="px-6 py-4">
                                Sampai di tujuan
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            </td>
                        </tr>
                        <tr className="border-b bg-neutral-700 border-neutral-500">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                05:11:59 2024-07-09
                            </th>
                            <td className="px-6 py-4">
                                Nissan SilEighty
                            </td>
                            <td className="px-6 py-4">
                                Sampai di tujuan
                            </td>
                            <td className="px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Event;

if (document.getElementById('event')) {
    const Index = ReactDOM.createRoot(document.getElementById("event"));

    Index.render(
        <React.StrictMode>
            <Event/>
        </React.StrictMode>
    )
}
