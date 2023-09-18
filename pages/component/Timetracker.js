import Dropdown from "./Dropdown"

export default function TimeTracker() {

    return <>
        <div className="bg-white w-full h-[125px] my-5 border border-gray-300 shadow-md">
            <div className="flex w-full item-centre h-[65px] border-b">
                <div className="w-full py-[12px] px-2">
                    <input className="w-full item-centre px-5 h-[40px] py-[20px]" placeholder="What are you working on?" />
                </div>
                <div className="py-[20px] pl-[10px] pr-[30px] z-10" >
                    <Dropdown />
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex item-center">
                    <div className="mt-[18px] w-full px-[25px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#999999" className="w-6 h-6 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                    </div>
                    <div className="border-x border-dashed py-2 font-sans my-2">
                        <div className="px-[15px] z-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-pound" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 18.5a6 6 0 0 1 -5 0a6 6 0 0 0 -5 .5a3 3 0 0 0 2 -2.5v-7.5a4 4 0 0 1 7.45 -2m-2.55 6h-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="px-4 py-1 text-sm tracking-wider">
                        00:00:00
                    </div>
                    <div className="w-[55px]" >
                        <button className="w-full py-[5px] rounded bg-sky-500 hover:bg-sky-600 text-white uppercase text-xs">
                            Start
                        </button>
                    </div>
                    <div className="px-[15px]" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical mt-[2px] cursor-pointer" viewBox="0 0 16 16"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /> </svg>
                    </div>
                </div>
            </div>
        </div>
    </>
}