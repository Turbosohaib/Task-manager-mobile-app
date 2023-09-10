import Sidebar from "./component/sidebar"
import TimeTracker from "./component/Timetracker"
import Task from "./component/Task"

export default function Home() {

    return <>
        <div className=" bg-gray-50 h-screen px-3 py-2.5">
            <div className=" border border-gray-300 rounded h-full bg-gray-100">
                <div className="sticky top-0 bg-gray-100 z-40">
                    <Sidebar />
                    <TimeTracker />
                </div>
                <div className="px-3 subpixel-antialiased">
                    <div>This week</div>
                    <div className="my-3 text-slate-400 text-sm">Week total: <span className="text-lg font-medium text-black tracking-wider">30:00:00</span></div>
                </div>
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    </>
}