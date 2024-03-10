import React, { useState } from 'react'
import telephonecall from "../assets/telephone-call.png";
import house from "../assets/house.png";
import rupees from "../assets/rupees.png";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function FormModel() {
    const api = "https://newsmtp-production.up.railway.app/";
    const [isError, setIsError] = useState(false)
    const [LeadData, setLeadData] = useState({
        name: "",
        email: "",
        number: "",
        projectName: "Sobha Crystal Meadows"
    });


    function handleOnChange(e) {
        setIsError(false)
        const { name, value } = e.target;
        setLeadData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (!LeadData.name || !LeadData.email || !LeadData.number) {
                setIsError(true)
                return
            }
            const res = await axios.post(api, LeadData)
            setIsError(false)
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
            setIsError(true)
        }
    }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box w-[90%] md:w-[400px] lg:w-[400px] rounded-sm">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h3 id="contactformbox_title" className="text-center text-lg">Get Instant Call Back</h3>
                </div>
                <div className="contactformbox_box1 flex items-center justify-between mt-5">
                    <div className="flex flex-col items-center justify-between">
                        <img className="w-[30px]" src={telephonecall} alt />
                        <p className="text-sm">24/7 Support</p>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <img className="w-[30px]" src={house} alt />
                        <p className="text-sm">Free Visit</p>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <img className="w-[30px]" src={rupees} alt />
                        <p className="text-sm">Unmatched Price</p>
                    </div>
                </div>
                <form method="dialog">
                    <button type=' button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className=" text-lg text-center font-medium mt-5">Sobha Crystal Meadows</h3>
                    <form action="">
                        <div className=' flex flex-col gap-2 mt-2'>
                            <input name="name" type="text" placeholder="Name" value={LeadData.name} onChange={handleOnChange} required className="w-full border-b border-black p-2 rounded-sm outline-none" id="second" />
                            <input name="number" type="text" placeholder="+91 - " value={LeadData.number} onChange={handleOnChange} required className="w-full  border-b border-black p-2 rounded-sm outline-none" />
                            <input name="email" type="email" placeholder="Email" value={LeadData.email} onChange={handleOnChange} required className="w-full border-b border-black p-2 rounded-sm outline-none" />
                        </div>
                        <span>{isError ? "all fields are required" : null}</span>
                        <button type="submit" onClick={handleSubmit} className=" mt-5 bg-yellow-600 w-full p-1 text-white rounded-sm">Enquire Now</button>

                    </form>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <NavLink to="tel:919900112233" className="flex items-center gap-1">
                        <BiSolidPhoneCall className=" text-lg text-green-600" />
                        <p className="text-sm text-green-600 font-medium">Call</p>
                    </NavLink>
                    <NavLink to="https://wa.me/552196312XXXX" className="flex items-center gap-1">
                        <FaSquareWhatsapp className=" text-lg text-green-600" />
                        <p className="text-sm text-green-600 font-medium">WhatsApp</p>
                    </NavLink>
                </div>
            </div>
        </dialog>
    )
}

export default FormModel