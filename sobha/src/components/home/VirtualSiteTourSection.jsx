import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";


function VirtualSiteTourSection({ handleOpenModel }) {
    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <span className=' text-xl border border-blue-500 px-4 rounded-full'>Virtual Site Tour</span>
                    <div className=' mt-4 flex flex-col md:flex-row lg:flex-row lg:px-6 gap-4'>
                        <div onClick={handleOpenModel} className=' cursor-pointer' style={{ backgroundImage: "url(" + "https://www.bangaloreprojects.info/welkin-park/search/assets/img/slider2.jpg" + ")", width: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "300px" }}>
                            {/* <img src="https://www.bangaloreprojects.info/welkin-park/search/assets/img/slider2.jpg" alt="" /> */}
                            <div className=' flex flex-col justify-center items-center w-full  h-full'>
                                <div className='flex flex-col justify-center items-center text-center w-full p-5 bg-black'>
                                    <FaRegPlayCircle className=' text-5xl text-white ' />
                                    <h2 className=' text-4xl font-semibold text-white'>SAMPLE APARTMENT</h2>
                                    <p className=' text-white'>Adarsh Welkin Park - Off Sarjapur At Gattahalli, Bangalore</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleOpenModel} className=' cursor-pointer' style={{ backgroundImage: "url(" + "https://www.bangaloreprojects.info/welkin-park/search/assets/img/slider2.jpg" + ")", width: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "300px" }}>
                            {/* <img src="https://www.bangaloreprojects.info/welkin-park/search/assets/img/slider2.jpg" alt="" /> */}
                            <div className=' flex flex-col justify-center items-center w-full  h-full'>
                                <div className='flex flex-col justify-center items-center text-center w-full p-5 bg-black'>
                                    <FaRegPlayCircle className=' text-5xl text-white ' />
                                    <h2 className=' text-4xl font-semibold text-white'>Virtual Site Tour</h2>
                                    <p className=' text-white'>Adarsh Welkin Park - Off Sarjapur At Gattahalli, Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirtualSiteTourSection