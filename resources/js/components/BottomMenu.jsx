import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function BottomMenu(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [transportationDetail, setTransportationDetail] = useState(null);

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
