import clsx from 'clsx';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Sidebar(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [menus, setMenus] = useState(props.menus ? JSON.parse(props.menus) : null);

    console.log(
        menus
    );

    return (
        <div className={
            clsx(
                `fixed top-0 bottom-0 z-40 shadow-[0_0_100rem_100rem_rgba(0,0,0,.4)] | md:static md:shadow-none md:z-0 h-full w-96 bg-neutral-700 border-r border-neutral-500 text-neutral-200 px-8 pt-4`, {
                    "block": isOpen,
                    "hidden": !isOpen
                }
            )
        }>
            <div className="mb-10 md:hidden">
                <span className="text-xl font-bold">Dashboard</span>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col justify-start items-start gap-3">
                    <button className="flex justify-start items-center gap-2 w-full">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-bus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" /><path d="M16 5l1.5 7l4.5 0" /><path d="M2 10l15 0" /><path d="M7 5l0 5" /><path d="M12 5l0 5" /></svg>
                        Vehicle Reports
                    </button>
                    <div className="flex flex-col justify-start items-start gap-3 w-full">
                        <div className="flex justify-start items-center gap-3 w-full">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-corner-down-right text-neutral-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" /></svg>
                            <a
                                href={ menus?.activity.route }
                                className={
                                    clsx(
                                        `flex justify-start items-center gap-2 w-full`, {
                                            "text-emerald-400": menus?.activity.is_active
                                        }
                                    )
                                }
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-strava"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" /></svg>
                                Activity
                            </a>
                        </div>
                        <div className="flex justify-start items-center gap-3 w-full">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-corner-down-right text-neutral-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" /></svg>
                            <a
                                href={ menus?.fuel.route }
                                className={
                                    clsx(
                                        `flex justify-start items-center gap-2 w-full`, {
                                            "text-emerald-400": menus?.fuel.is_active
                                        }
                                    )
                                }
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-gas-station"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" /><path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" /><path d="M3 20l12 0" /><path d="M18 7v1a1 1 0 0 0 1 1h1" /><path d="M4 11l10 0" /></svg>
                                Fuel
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-neutral-500" />
                {/* <div>
                    <a href="" className="flex justify-start items-center gap-2 w-full">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-box-padding"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 16v.01" /><path d="M8 12v.01" /><path d="M8 8v.01" /><path d="M16 16v.01" /><path d="M16 12v.01" /><path d="M16 8v.01" /><path d="M12 8v.01" /><path d="M12 16v.01" /></svg>
                        Dummy Reports
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Sidebar;

const bladeElement = document.getElementById("sidebar");

if (bladeElement) {
    const Index = ReactDOM.createRoot(bladeElement);
    const props = Object.assign({}, bladeElement.dataset);

    Index.render(
        <React.StrictMode>
            <Sidebar {...props}/>
        </React.StrictMode>
    )
}
