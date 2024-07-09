import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Object from './Object';

function LeftSideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const [tabCategory, setTabCategory] = useState(`object`);

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
                <button className={ `px-10 py-2` + (tabCategory === `object` ?  `` : ` bg-neutral-800 text-neutral-300`) } onClick={ () => setTabCategory(`object`) }>Objek</button>
                <button className={ `px-10 py-2` + (tabCategory === `event` ?  `` : ` bg-neutral-800 text-neutral-300`) } onClick={ () => setTabCategory(`event`) }>Acara</button>
                <button className={ `px-10 py-2 rounded-tr-lg` + (tabCategory === `history` ?  `` : ` bg-neutral-800 text-neutral-300`) } onClick={ () => setTabCategory(`history`) }>Historikal</button>
            </div>
            <div className="relative">
                {
                    tabCategory === `object` &&
                    <Object />
                }
                {
                    tabCategory === `event` &&
                    <Object />
                }
                {
                    tabCategory === `history` &&
                    <Object />
                }
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


