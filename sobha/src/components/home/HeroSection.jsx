import React from 'react'

function HeroSection({ handleOpenModel }) {
    return (
        <div className=' lg:h-[100vh]' style={{ backgroundImage: "url(" + "https://sobhaupcoming.com/images/sobha-neopolis.jpg" + ")", width: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className=' p-4 lg:flex md:justify-center md:items-center lg:justify-start  lg:items-end m-auto relative lg:top-10 lg:left-4'>
                <div className=' bg-white md:w-[430px] md:m-auto lg:m-0 lg:w-[430px] rounded-md p-2 '>
                    <div style={{ border: "1px dashed black" }} className=' p-2'>
                        <div>
                            <h2 className=' text-center p-2 text-xl font-semibold text-cyan-500'>BOOKING OPEN</h2>
                        </div>
                        <div className=' flex flex-col text-center'>
                            <h1 className=' text-center p-2 text-2xl font-semibold'>SOBHA CRYSTAL PALACE</h1>
                            <h3 className=' text-xl font-medium'>Sarjapur, Bangalore</h3>
                            <p className=' text-lg'>By Sobha Group</p>
                        </div>
                        <div className=' px-10 mt-4 text-center'>
                            <p>
                                <span className=' font-medium'>Sobha Crystal Palace</span> - Launching Soon Luxurious Villas
                            </p>
                        </div>
                        <div className=' animate-bounce mt-4 font-medium bg-yellow-600 text-center px-2 py-1 rounded-sm text-sm text-white'>
                            <p>LIMITED PERIOD PRE LAUNCH PRICE ** CR. ONWARDS</p>
                        </div>
                        <div className='  animate-bounce mt-2 font-medium bg-yellow-600 text-center px-2 py-1 rounded-sm text-sm text-white'>
                            <p>LIMITED PERIOD PRE LAUNCH PRICE ** CR. ONWARDS</p>
                        </div>
                        <div className='mt-4 text-center text-2xl font-semibold'>
                            <p>7.5 Cr*. Onwards</p>
                        </div>
                        <div className=' mt-4 flex justify-center'>
                            <button onClick={handleOpenModel} className=' px-6 py-2 text-white rounded-sm bg-yellow-600'>Inquiry Now</button>
                        </div>
                        <div className=' text-center mt-4'>
                            <p className=' text-xs'>Phase 1 : RERA Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection