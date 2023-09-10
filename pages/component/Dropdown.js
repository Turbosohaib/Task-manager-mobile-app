import script from 'next/script';
import { useState } from 'react';


function Dropdown({ projects, handleChange, trackTime, setTrackTime }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectOption = (value) => {
        console.log(value);
        // setTrackTime({ ...trackTime, project: value });
        setIsOpen(false);
        // console.log(trackTime)
    }

    return (
        <div>
            <div>
                <div onClick={toggleDropDown} className="text-blue-600 cursor-pointer rounded-md">
                    Project     {/* {trackTime.project || "Project"} */}
                </div>
                {isOpen && <div className="absolute right-5 mt-2 py-2 w-[350px] bg-white rounded-md shadow-lg">
                    <input className='py-2 px-2 mx-2 my-2 w-[335px] border bg-gray-60' placeholder='Find Project'></input>
                    <ul>
                        {/* {projects.map((project) => ( */}
                        <li className="block px-4 cursor-pointer py-2 text-gray-800 hover:bg-gray-100">CX</li>
                        <li className="block px-4 cursor-pointer py-2 text-gray-800 hover:bg-gray-100">Djb</li>
                        <li className="block px-4 cursor-pointer py-2 text-gray-800 hover:bg-gray-100">Connextar</li>
                        {/* ))} */}
                    </ul>
                </div>}
            </div>
        </div>
    );
}

export default Dropdown;
