import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SideBar({ handleOpenModel }) {
    const api = "https://newsmtp-production.up.railway.app/"
    const [LeadData, setLeadData] = useState({
        name: "",
        email: "",
        number: "",
        projectName: "Sobha Crystal Meadows"
    });

    function handleOnChange(e) {
        const { name, value } = e.target;
        setLeadData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (LeadData.name == "" || LeadData.email == "" || LeadData.number == "") {
                return alert("All fields are required")
            }
            const res = await axios.post(api, LeadData);
            if (res?.data?.success) {
                setLeadData({
                    name: "",
                    email: "",
                    number: ""
                })
                alert("Submitted Successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='min-w-[300px] h-[100vh] bg-white p-4 '>
            <div className='flex justify-between gap-2'>
                <button className=' bg-black text-white px-2  rounded-full'>Organize Site Visit</button>
                <NavLink className=' bg-black text-white px-2  rounded-full'>+91-936329764</NavLink>
            </div>
            <div className=' text-center mt-6 '>
                <button onClick={handleOpenModel} className=' bg-yellow-600 px-3 rounded-full py-1 font-medium text-white'>
                    Request Call Back
                </button>
            </div>
            <form action="" onSubmit={handleSubmit} className=' mt-4 flex flex-col gap-2'>
                <h3 className=' text-center font-semibold text-lg'>Pre - Register here for Best Offers</h3>
                <div>
                    <input className=' p-2 border-b w-full border-gray-500 outline-none' value={LeadData.name} onChange={handleOnChange} required type="text" name="name" id="name" placeholder='Name' />
                </div>
                <div>
                    <input className=' p-2 border-b w-full border-gray-500 outline-none' value={LeadData.email} onChange={handleOnChange} required type="text" name="email" id="email" placeholder='Email' />
                </div>
                <div>
                    <input className=' p-2 border-b w-full border-gray-500 outline-none' value={LeadData.number} onChange={handleOnChange} required type="number" name="number" id="number" placeholder='Phone' />
                </div>

                <div className=' flex items-center justify-center mt-3'>
                    <button type='submit' className=' bg-yellow-600 px-5 rounded-md py-1 font-medium text-white'>Pre - Register Now</button>
                </div>
            </form>
        </div>
    )
}

export default SideBar