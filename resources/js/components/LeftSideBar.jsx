import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function LeftSideBar() {
    const [isOpen, setIsOpen] = useState(true);

    const slide = {
        translate: isOpen ? 0 : `-100%`
    };

    const rotate = {
        rotate: isOpen ? `180deg` : `0deg`
    };

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="absolute z-20 bg-neutral-700 border-t border-r border-neutral-500 text-neutral-100 rounded-tr-lg bottom-0" style={ slide }>
            <div className="grid grid-cols-3 divide-x divide-neutral-500 border-b border-neutral-500">
                <button className="px-10 py-2">Objek</button>
                <button className="px-10 py-2 bg-neutral-800 text-neutral-300">Acara</button>
                <button className="px-10 py-2 bg-neutral-800 text-neutral-300 rounded-tr-lg">Historikal</button>
            </div>
            <div className="relative">
                <div className="p-4 border-b border-neutral-500">
                    <input type="text" placeholder="Search.." className="w-full px-2 py-1 bg-neutral-700 border border-neutral-500 rounded-lg" />
                </div>
                <div className="grid grid-cols-1 divide-y divide-neutral-500">
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Toyota Sprinter Trueno 3door GT-APEX</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Mazda ɛ̃fini RX-7 Type R</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Subaru Impreza WRX STi Coupe Type R Version V</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Mazda SAVANNA RX-7 ∞ III</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Nissan Skyline GT-R V-Spec II</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Nissan SilEighty</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Honda Civic SiR-II</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="py-2 pl-4">
                            <div className='font-bold'>Nissan Silvia K's</div>
                            <div>20:36:54</div>
                        </div>
                        <div className="flex items-center pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <button className="absolute border border-neutral-500 bg-neutral-700 py-8 right-0 top-1/2 -translate-y-1/2 translate-x-full rounded-r-lg" onClick={ toggle }>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right" style={ rotate }><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
            </button>
        </div>
    );
}

export default LeftSideBar;

if (document.getElementById('left-side-bar')) {
    const Index = ReactDOM.createRoot(document.getElementById("left-side-bar"));

    Index.render(
        <React.StrictMode>
            <LeftSideBar/>
        </React.StrictMode>
    )
}


