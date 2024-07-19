import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function BottomMenu(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [transportationDetail, setTransportationDetail] = useState(null);

    const imageNumber = Math.floor(Math.random() * 6);

    let imageSource = "https://cbs2iowa.com/resources/media2/16x9/full/1015/center/80/dcdc301b-edfc-4f6e-8b95-dba45a96c19e-large16x9_crpdcrash.JPG";

    switch (imageNumber) {
        case 1:
            imageSource = "https://external-preview.redd.it/NQmGzp-4le7zY4dqjvsT4BJ0YO0sY5jyX797Fbkl0kI.png?width=640&crop=smart&format=pjpg&auto=webp&s=098658b6e58a4f24b89429b561bd09f0d8fdcc2d";
            break;

        case 2:
            imageSource = "https://m.media-amazon.com/images/I/51vXMxsJDOL._UX250_.jpg";
            break;

        case 3:
            imageSource = "https://i.ytimg.com/vi/LKdjyU9Psgs/maxresdefault.jpg";
            break;

        case 4:
            imageSource = "https://i.ytimg.com/vi/ij-kbGyfgjg/maxresdefault.jpg";
            break;

        case 5:
            imageSource = "https://cdn.osxdaily.com/wp-content/uploads/2013/12/there-is-no-connected-camera-mac.jpg";
            break;

        default:
            break;
    }

    useEffect(() => {
        if (props.transportationDetail) {
            setTransportationDetail(JSON.parse(props.transportationDetail));
        }
    }, []);

    const slide = {
        translate: isOpen ? `0 0` : `0 100%`
    };

    const rotate = {
        rotate: isOpen ? `180deg` : `0deg`
    };

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="absolute z-20 bg-neutral-700 border-t border-l border-neutral-500 text-neutral-100 rounded-tl-lg bottom-0 right-0" style={ slide }>
            <div className="relative grid grid-flow-col auto-cols-max divide-x divide-neutral-500">
                <div className='w-96'>
                    <div className='py-2 px-4 border-b border-neutral-500 font-bold'>
                        { transportationDetail ? transportationDetail.name : `Pilih objek` }
                    </div>
                    <div className='px-4 py-2'>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500">Driver:</div>
                            <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500 font-extralight">{ transportationDetail ? transportationDetail.driver : `No data` }</div>
                            <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500">Address:</div>
                            <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500 font-extralight">{ transportationDetail ? transportationDetail.address : `No data` }</div>
                        </div>
                    </div>
                </div>
                {
                    transportationDetail &&
                    <>
                        <div className='w-96'>
                            <div className='py-2 px-4 border-b border-neutral-500 font-bold'>
                                Informasi Perjalanan
                            </div>
                            <div className='px-4 py-2'>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500">Kecepatan:</div>
                                    <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500 font-extralight">40 km/jam</div>
                                    <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500">Bahan Bakar:</div>
                                    <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500 font-extralight">8 liter</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-96'>
                            <div className='py-2 px-4 border-b border-neutral-500 font-bold'>
                                <div className='flex items-center gap-2'>
                                    Passenger
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg>
                                </div>
                            </div>
                            <div className='px-4 py-2'>
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500">Jumlah penumpang:</div>
                                    <div className="col-span-1 pb-2 mb-2 border-b border-neutral-500 font-extralight">32 Orang</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-96'>
                            <div className='py-2 px-4 border-b border-neutral-500 font-bold'>
                                <div className='flex items-center gap-2'>
                                    Cam
                                </div>
                            </div>
                            <div className='px-4 py-2'>
                                <img src={ imageSource } alt="" className='rounded w-full'/>
                            </div>
                        </div>
                    </>
                }
            </div>
            <button className="absolute border border-neutral-500 bg-neutral-700 px-8 right-1/2 top-0 translate-x-1/2 -translate-y-full rounded-t-lg hover:brightness-125" onClick={ toggle }>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up" style={ rotate }><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M16 9l-4 -4" /><path d="M8 9l4 -4" /></svg>
            </button>
        </div>
    );
}

export default BottomMenu;

const bladeElement = document.getElementById("bottom-menu");

if (bladeElement) {
    const Index = ReactDOM.createRoot(bladeElement);
    const props = Object.assign({}, bladeElement.dataset);

    Index.render(
        <React.StrictMode>
            <BottomMenu {...props}/>
        </React.StrictMode>
    )
}
