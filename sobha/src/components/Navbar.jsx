import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

function Navbar({ handleOpenModel, sectionIds }) {
    // console.log(sectionIds)
    function scroll() {
        console.log("clicked")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className="navbar flex justify-between bg-white shadow-md">
            <div className=" w-[10%]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" flex flex-col gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                        <li className=' bg-yellow-600 text-white px-3 py-1 rounded-sm border-black h-full '><ScrollLink className=' hover:bg-transparent ' >Home</ScrollLink></li>
                        <li className='  hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm h-full '><ScrollLink className=' hover:bg-transparent '>Price</ScrollLink></li>
                        <li className='hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm h-full  '><ScrollLink className='text-center hover:bg-transparent '>Site Plan</ScrollLink></li>
                        <li className=' hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm h-full '><ScrollLink className='text-center hover:bg-transparent '>Amenities</ScrollLink></li>
                        <li className=' hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm h-full  '><ScrollLink className='text-center hover:bg-transparent '>Gallery</ScrollLink></li>
                        <li className='hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm h-full '><ScrollLink className='text-center hover:bg-transparent '>Location</ScrollLink></li>
                        <li className='hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm h-full '><ScrollLink className='text-center hover:bg-transparent '>Virtual Tour</ScrollLink></li>
                        <li className='hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm h-full '><ScrollLink onClick={handleOpenModel} className='text-center hover:bg-transparent '>Download Brochure</ScrollLink></li>
                    </ul>
                </div>
                <ScrollLink className=" text-xl" to="/"><img className=' w-[100px] h-full' src="https://www.axiomlandbase.in/wp-content/uploads/2019/11/shobha-logo.png" alt="" /></ScrollLink>
            </div>
            <div className="  w-[90%] hidden lg:flex">
                <button onClick={scroll}>scroll</button>
                <ul className=" flex justify-between  items-center w-full h-full m-auto">
                    <li className=' bg-yellow-600 text-white px-3 py-1 rounded-sm border-black h-full  text-center '><ScrollLink className='text-center hover:bg-transparent ' >Home</ScrollLink></li>|
                    <li className='  h-full '><ScrollLink to="price" onClick={scroll} smooth={true} duration={500} className='text-center hover:bg-transparent '>Price</ScrollLink></li>|
                    <li className='  h-full  '><ScrollLink to="siteplan" smooth={true} duration={500} className='text-center hover:bg-transparent '>Site Plan</ScrollLink></li>|
                    <li className=' h-full'><ScrollLink to="amenities" smooth={true} duration={500} className='text-center hover:bg-transparent '>Amenities</ScrollLink></li>|
                    <li className='  h-full '><ScrollLink to="gallery" smooth={true} duration={500} className='text-center hover:bg-transparent '>Gallery</ScrollLink></li>|
                    <li className='h-full '><ScrollLink to="location" smooth={true} duration={500} className='text-center hover:bg-transparent '>Location</ScrollLink></li>|
                    <li className=' h-full '><ScrollLink to="virtualtour" smooth={true} duration={500} className='text-center hover:bg-transparent '>Virtual Tour</ScrollLink></li>|
                    <li className=' h-full '><ScrollLink onClick={handleOpenModel} className='text-center hover:bg-transparent '>Download Brochure</ScrollLink></li>
                </ul>
            </div>
            <div className=" lg:hidden">
                <ScrollLink className=" text-xl" to="/"><img className=' w-[100px] h-full' src="https://www.axiomlandbase.in/wp-content/uploads/2019/11/shobha-logo.png" alt="" /></ScrollLink>
            </div>
        </div>
    )
}

export default Navbar