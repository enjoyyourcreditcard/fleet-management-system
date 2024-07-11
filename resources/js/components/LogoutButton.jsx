import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function LogoutButton(props) {
    const [isOpen, setIsOpen] = useState(false);

    const grayOverlay = {
        boxShadow: `0px 0px 100vh 100vh rgba(0, 0, 0, 0.5)`
    };

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <button title='log out' onClick={ toggleModal }>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-logout text-red-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
            </button>

            {
                isOpen &&
                <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50'>
                    <div className='rounded-lg bg-neutral-700 border border-neutral-500 p-6' style={ grayOverlay }>
                        <div className='text-slate-200'>Are you sure want to log out?</div>

                        <div className='flex flex-col gap-2 mt-9'>
                            <button className='w-full py-1 rounded-lg border border-neutral-500 bg-neutral-700 hover:brightness-125 active:brightness-75 text-red-400' form="confimation-form">Log out</button>
                            <button className='w-full py-1 rounded-lg border border-neutral-500 bg-neutral-700 hover:brightness-125 active:brightness-75' onClick={ closeModal }>Cancel</button>
                        </div>

                        <form id="confimation-form" action={ props.logoutRoute } method="post">
                            <input type="hidden" name="_token" value={ props.token } />
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

export default LogoutButton;

const bladeElement = document.getElementById("logout-button");

if (bladeElement) {
    const Index = ReactDOM.createRoot(bladeElement);
    const props = Object.assign({}, bladeElement.dataset);

    Index.render(
        <React.StrictMode>
            <LogoutButton {...props}/>
        </React.StrictMode>
    )
}
