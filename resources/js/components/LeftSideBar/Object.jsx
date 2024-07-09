import React from 'react';
// import ReactDOM from 'react-dom/client';

function Object(props) {
    return (
        <>
            <div className="p-4 border-b border-neutral-500">
                <input type="text" placeholder="Search.." className="w-full px-2 py-1 bg-neutral-700 border border-neutral-500 rounded-lg" />
            </div>
            <div className="grid grid-cols-1 divide-y divide-neutral-500">
                {
                    props.transportations ?
                    props.transportations.map((transportation) =>
                        <div className="flex justify-between hover:brightness-125 active:brightness-75 cursor-pointer" onClick={ () => { window.location.href=`?driver=${transportation.driver}`; } } key={ transportation.id }>
                            <div className="py-2 pl-4">
                                <div className='font-bold'>{ transportation.name }</div>
                                {
                                    transportation.id === 2 || transportation.id > 4
                                    ?
                                    <div className='text-yellow-400'>Idle</div>
                                    :
                                    <div className='text-emerald-400'>Dalam perjalanan</div>
                                }
                                {/* <div className='text-red-400'>Offline</div> */}
                            </div>
                            {/* <div className="flex items-center pr-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                            </div> */}
                        </div>
                    )
                    :
                    <div className='h-96 flex justify-center items-center'>No data</div>
                }
                {/*
                <div className="flex justify-between">
                    <div className="py-2 pl-4">
                        <div className='font-bold'>Honda Civic SiR-II</div>
                        <div className='text-red-400'>Offline</div>
                    </div>
                    <div className="flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="py-2 pl-4">
                        <div className='font-bold'>Nissan Silvia K's</div>
                        <div className='text-yellow-400'>Idle</div>
                    </div>
                    <div className="flex items-center pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Object;

// if (document.getElementById('object')) {
//     const Index = ReactDOM.createRoot(document.getElementById("object"));

//     Index.render(
//         <React.StrictMode>
//             <Object/>
//         </React.StrictMode>
//     )
// }
