import React from 'react'

function AmenitiesSection() {
    const amenitiesData = [
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },

        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },

        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
        {
            name: "Aerobics Room",
            "image": "https://cdn-icons-png.freepik.com/256/11364/11364386.png"
        },
    ]
    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <span className=' text-xl border border-blue-500 px-4 rounded-full'>Amenities</span>
                    <div className='grid-cols-2 sm:grid-cols-3 px-2 py-4 grid md:grid-cols-4 lg:grid-cols-7 lg:p-5 gap-3'>
                        {amenitiesData.map((data, i) => (
                            <div key={i} className=' w-[150px] h-[150px] shadow-md p-2'>
                                <img className=' w-full h-[85%]' src={data.image} alt="" />
                                <p className=' text-center'>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmenitiesSection