import React from 'react';
import ReactDOM from 'react-dom/client';

function History() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    Objek :
                </div>
                <div className="col-span-2">
                    <select className='w-full border border-neutral-500 bg-neutral-700 rounded-lg px-2 py-1' name="" id="">
                        <option value="">Toyota Sprinter Trueno 3door GT-APEX</option>
                    </select>
                </div>
                <div className="col-span-1">
                    Mulai :
                </div>
                <div className="col-span-1">
                    <input className='w-full border border-neutral-500 bg-neutral-700 rounded-lg px-2 py-1' type="date" name="" id="" />
                </div>
                <div className="col-span-1">
                    <input className='w-full border border-neutral-500 bg-neutral-700 rounded-lg px-2 py-1' type="time" name="" id="" />
                </div>
                <div className="col-span-1">
                    Sampai :
                </div>
                <div className="col-span-1">
                    <input className='w-full border border-neutral-500 bg-neutral-700 rounded-lg px-2 py-1' type="date" name="" id="" />
                </div>
                <div className="col-span-1">
                    <input className='w-full border border-neutral-500 bg-neutral-700 rounded-lg px-2 py-1' type="time" name="" id="" />
                </div>
            </div>
            <hr className='my-4 border-neutral-500' />
            <a href='/map/history?driver=Nur%20Wahid%20Septian' className='w-full block text-center rounded-lg border border-neutral-500 bg-blue-400 hover:brightness-125 text-neutral-200 py-2 font-bold'>
                Show
            </a>
            {/* <button className='w-full rounded-lg border border-neutral-500 bg-blue-400 hover:brightness-125 text-neutral-200 py-2 font-bold'>
                Show
            </button> */}
        </div>
    );
}

export default History;

if (document.getElementById('history')) {
    const Index = ReactDOM.createRoot(document.getElementById("history"));

    Index.render(
        <React.StrictMode>
            <History/>
        </React.StrictMode>
    )
}
