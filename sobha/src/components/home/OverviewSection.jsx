import React from 'react'

function OverviewSection({ handleOpenModel }) {
    return (
        <div className='bg-white p-4 flex flex-col gap-3 relative border border-gray-200'>
            <div>
                <span className=' text-xl border border-blue-500 px-4 rounded-full'>Overflow</span>
                <h1 className=' text-2xl mt-3 font-bold'>Adarsh Welkin Park</h1>
                <h3 className=' mt-2 text-xl font-medium'>At Off Sarjapur Road, Gattahalli, Bengaluru</h3>
                <p className=' mt-2'>Adarsh Group's brand-new residential Apartments development, Adarsh Welkin Park,
                    is located in the developing Bangalore. The greatest of the Adarsh Group's premium
                    offerings may be found in the residential neighborhood of Adarsh Welkin Park.
                    The project offers large apartments with luxurious conveniences. The picturesque
                    surroundings add to its uniqueness and elite status. The developer promises to offer
                    the neighborhood a top-notch living environment with stunning architecture and a
                    lifestyle that is comparable to that in Bangalore.
                </p>
                <button onClick={handleOpenModel} className=' mt-4 px-5 py-1 border border-blue-500'>Request Download Brochure</button>
            </div>
        </div>
    )
}

export default OverviewSection