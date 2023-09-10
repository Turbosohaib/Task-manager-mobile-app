

export default function Task() {

    const currentDate = new Date();

    return <>
        <div className="w-full h-[32%] mb-5 bg-white border border-gray-300 border-b-4">
            <div className="w-full h-[40px] bg-gray-200 border-y border-gray-200 flex justify-between items-center">
                <div className="text-gray-400 text-sm px-5">
                    Fri, Sep 8
                </div>
                <div className="px-5">
                    <div className="text-lg font-medium">
                        05:00:00
                    </div>
                </div>
            </div>

            <div className="w-full h-[135px] ">
                <div className="flex justify-between items-center px-4 py-4">
                    <div className="text-sm">
                        Making clockify clone mobile app
                    </div>
                    <div>05:00:00</div>
                </div>
                <div className="flex item-center px-3">
                    <div className="pt-1.5 pr-2">
                        <img width="12" height="12" src="https://img.icons8.com/ios-glyphs/30/full-stop--v1.png" alt="full-stop--v1" />
                    </div>
                    <div className="text-sm text-sky-600 cursor-pointer">
                        CX
                    </div>
                </div>
                <div className="w-[70px] flex item-center mx-4 mt-2" >
                    <button className="w-full py-[5px] bg-white hover:bg-gray-200 text-gray-600 border border-gray-300  text-xs">
                        Add tags
                    </button>
                </div>
            </div>
            <div className=" border-t border-gray-300 ">
                <div className="flex justify-between items-center pt-1">
                    <div className="flex items-center">
                        <div className="py-1.5 mt-[2px] px-5 border-r border-dashed border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-pound" width="27" height="27" viewBox="0 0 24 24" strokeWidth="1" stroke="#5C5CFF" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="4">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 18.5a6 6 0 0 1 -5 0a6 6 0 0 0 -5 .5a3 3 0 0 0 2 -2.5v-7.5a4 4 0 0 1 7.45 -2m-2.55 6h-7" />
                            </svg>
                        </div>
                        <div className="px-2 text-md">
                            <span>
                                02:35 - 10:35
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-4 z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" opacity="0.5" viewBox="0 0 16 16" id="calendar">
                                <path d="M5 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM11 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z" ></path>
                                <path d="M13 14.5H3c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zM3 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3z"></path>
                                <path d="M14 6.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zM5.5 7.5h1v1h-1zM7.5 7.5h1v1h-1zM9.5 7.5h1v1h-1zM11.5 7.5h1v1h-1zM3.5 9.5h1v1h-1zM5.5 9.5h1v1h-1zM7.5 9.5h1v1h-1zM9.5 9.5h1v1h-1zM11.5 9.5h1v1h-1zM3.5 11.5h1v1h-1zM5.5 11.5h1v1h-1zM7.5 11.5h1v1h-1z"></path>
                            </svg>
                        </div>
                        <div className="px-3 py-1.5 border-x border-gray-300 border-dashed">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                        </div>
                        <div className="px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical mt-[2px] cursor-pointer" viewBox="0 0 16 16"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /> </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}