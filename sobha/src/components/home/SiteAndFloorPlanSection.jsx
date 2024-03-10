import React from 'react'

function SiteAndFloorPlanSection({ handleOpenModel }) {
    const data = [
        "https://www.sales-enquiry.site/adarsh-welkin-park/search/assets/img/master.jpg",
        "https://www.sales-enquiry.site/adarsh-welkin-park/search/assets/img/master.jpg",
        "https://www.sales-enquiry.site/adarsh-welkin-park/search/assets/img/master.jpg",
        "https://www.sales-enquiry.site/adarsh-welkin-park/search/assets/img/master.jpg",
    ]
    return (
        <div className=' bg-white p-4 flex flex-col gap-3 relative border border-gray-200 mt-4'>
            <div>
                <span className=' text-xl border border-blue-500 px-4 rounded-full'>Site & Floor Plan</span>
                <div className=' flex flex-col  mt-4 md:grid md:grid-cols-2  lg:grid lg:grid-cols-4 gap-2'>
                    {data.map((img, i) => (
                        <img key={i} onClick={handleOpenModel} className=' w-[100%] lg:w-[280px] h-[280px] border border-black blur-sm hover:bg-zinc-500' src={img} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SiteAndFloorPlanSection