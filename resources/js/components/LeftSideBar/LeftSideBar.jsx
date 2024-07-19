import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Transportation from './Object';
import Event from './Event';
import History from './History';

function LeftSideBar(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [tabCategory, setTabCategory] = useState(`object`);
    const [transportations, setTransportations] = useState(JSON.parse(props.transportations));

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
        <>
            {/* <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
                <div className='w-[80vw] absolute bg-neutral-700 border-t border-r border-neutral-500 text-neutral-100 rounded-tr-lg rounded-lg p-4 z-50 shadow-xl'>
                    <div className='font-bold'>Dashboard Camera</div>
                    <hr className='my-2' />
                    <div className="grid grid-cols-4 gap-2">
                        <div className="col-span-1">
                            <img src="https://cbs2iowa.com/resources/media2/16x9/full/1015/center/80/dcdc301b-edfc-4f6e-8b95-dba45a96c19e-large16x9_crpdcrash.JPG" alt="" className='rounded w-full'/>
                            <span>Toyota Sprinter Trueno</span>
                        </div>
                        <div className="col-span-1">
                            <img src="https://external-preview.redd.it/NQmGzp-4le7zY4dqjvsT4BJ0YO0sY5jyX797Fbkl0kI.png?width=640&crop=smart&format=pjpg&auto=webp&s=098658b6e58a4f24b89429b561bd09f0d8fdcc2d" alt="" className='rounded w-full'/>
                            <span>Mazda ɛ̃fini RX-7 Type R</span>
                        </div>
                        <div className="col-span-1">
                            <img src="https://m.media-amazon.com/images/I/51vXMxsJDOL._UX250_.jpg" alt="" className='rounded w-full'/>
                            <span>Subaru Impreza WRX STi Coupe Type R Version V</span>
                        </div>
                        <div className="col-span-1">
                            <img src="https://i.ytimg.com/vi/LKdjyU9Psgs/maxresdefault.jpg" alt="" className='rounded w-full'/>
                            <span>Nissan Skyline GT-R V-Spec II</span>
                        </div>
                        <div className="col-span-1">
                            <img src="https://i.ytimg.com/vi/ij-kbGyfgjg/maxresdefault.jpg" alt="" className='rounded w-full'/>
                            <span>Nissan SilEighty</span>
                        </div>
                        <div className="col-span-1">
                            <img src="https://cdn.osxdaily.com/wp-content/uploads/2013/12/there-is-no-connected-camera-mac.jpg" alt="" className='rounded w-full'/>
                            <span>-</span>
                        </div>
                        <div className="col-span-1">
                            <img src="https://cdn.osxdaily.com/wp-content/uploads/2013/12/there-is-no-connected-camera-mac.jpg" alt="" className='rounded w-full'/>
                            <span>-</span>
                        </div>
                        <div className="col-span-1">
                            <img src="https://cdn.osxdaily.com/wp-content/uploads/2013/12/there-is-no-connected-camera-mac.jpg" alt="" className='rounded w-full'/>
                            <span>-</span>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="absolute z-20 bg-neutral-700 border-t border-r border-neutral-500 text-neutral-100 rounded-tr-lg bottom-0" style={ slide }>
                <div className="grid grid-cols-3 divide-x divide-neutral-500 border-b border-neutral-500">
                    <button className={ `px-10 py-2` + (tabCategory === `object` ?  `` : ` bg-neutral-800 text-neutral-300 hover:brightness-125`) } onClick={ () => setTabCategory(`object`) }>Transportasi</button>
                    <button className={ `px-10 py-2` + (tabCategory === `event` ?  `` : ` bg-neutral-800 text-neutral-300 hover:brightness-125`) } onClick={ () => setTabCategory(`event`) }>Acara</button>
                    <button className={ `px-10 py-2 rounded-tr-lg` + (tabCategory === `history` ?  `` : ` bg-neutral-800 text-neutral-300 hover:brightness-125`) } onClick={ () => setTabCategory(`history`) }>Historikal</button>
                </div>
                <div className="relative">
                    {
                        tabCategory === `object` &&
                        <Transportation transportations={ transportations } />
                    } {
                        tabCategory === `event` &&
                        <Event />
                    } {
                        tabCategory === `history` &&
                        <History />
                    }
                </div>
                <button className="absolute border border-neutral-500 bg-neutral-700 py-8 right-0 top-1/2 -translate-y-1/2 translate-x-full rounded-r-lg hover:brightness-125" onClick={ toggle }>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right" style={ rotate }><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                </button>
            </div>
        </>
    );
}

export default LeftSideBar;

const bladeElement = document.getElementById("left-side-bar");

if (bladeElement) {
    const Index = ReactDOM.createRoot(bladeElement);
    const props = Object.assign({}, bladeElement.dataset);

    Index.render(
        <React.StrictMode>
            <LeftSideBar {...props}/>
        </React.StrictMode>
    )
}

