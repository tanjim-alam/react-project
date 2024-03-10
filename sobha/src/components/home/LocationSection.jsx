import React, { useState } from 'react'

function LocationSection({ handleOpenModel }) {
    const datas = [
        {
            id: 1,
            label: "CONNECTIVITY",
            value: "Station - 2 Km"
        },
        {
            id: 2,
            label: "EDUCATION",
            value: "University - 2 Km"
        },
        {
            id: 3,
            label: "HEATHCARE",
            value: "Hospital - 2 Km"
        },
        {
            id: 4,
            label: "TECH PARKS",
            value: " Park - 4 Km"
        },
        {
            id: 5,
            label: "HOTELS, MALLS & RESORTS",
            value: " Mall - 21.4 Km"
        },
    ]

    const [buttonValue, setButtonValue] = useState(datas[0].value);
    const [active, setActive] = useState(1);
    function handleOnChange(id, value) {
        setButtonValue(value)
        setActive(id)
    }

    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <span className=' text-xl border border-blue-500 px-4 rounded-full'>Location</span>
                    <div className=' flex flex-col md:flex-row lg:flex-row gap-4 mt-4'>
                        <div className=' lg:w-[60%] w-[100%]'>
                            <h3 className=' text-center text-xl font-semibold'>Map View</h3>
                            <div onClick={handleOpenModel} className='cursor-pointer'>
                                <img className=' border  w-[100%] h-[300px] blur-[2px]' src="https://www.bangaloreprojects.info/welkin-park/search/assets/img/lp.jpg" alt="" />
                                <h3 className=' text-center text-lg bg-yellow-600 text-white p-2'>Know More About Location</h3>
                            </div>
                        </div>
                        <div className=' lg:w-[40%] w-[100%]'>
                            <h3 className=' text-center text-xl font-semibold'>Location Map</h3>
                            <div onClick={handleOpenModel} className='cursor-pointer'>
                                <img className=' w-[100%] h-[300px] blur-[2px]' src="https://www.bangaloreprojects.info/welkin-park/search/assets/img/map.jpg" alt="" />
                                <h3 className=' text-center text-lg bg-yellow-600 text-white p-2'>Know More About Locatio</h3>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-3'>
                        {datas.map((data, i) => (
                            <button style={{ backgroundColor: active === data.id ? "yellow" : "transparent" }} onClick={() => handleOnChange(data.value, data.id)} className={`border p-2 border-yellow-600 ${data.id === active ? 'filter blur-md' : ''}} ? bg-yellow-600 `} key={i}>{data.label}</button>
                        ))}
                        <div className=' mt-2 text-lg'>
                            <p>{buttonValue}{active}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSection