import React from 'react'

function PriceSection({ handleOpenModel }) {
    const priceData = [
        {
            id: 1,
            bhk: "3 BHK",
            area: "1868 - 1906 Sq.Ft.",
            price: "1.5 Cr* Onwards"
        },
        {
            id: 1,
            bhk: "3 BHK",
            area: "1868 - 1906 Sq.Ft.",
            price: "1.5 Cr* Onwards"
        }
    ]
    return (
        <div className=' bg-white p-4 flex flex-col gap-3 relative border border-gray-200 mt-4' id='price'>
            <div>
                <span className=' text-xl border border-blue-500 px-4 rounded-full'>Price</span>
                <div className=' lg:flex md:flex gap-4 mt-4 hidden'>
                    <div className=' w-[70%]'>
                        <table className="min-w-full border text-center text-sm font-light border-black">
                            <thead className="border-b font-medium ">
                                <tr>
                                    <th scope="col"
                                        className="border-r px-3 py-4  border-black">Type</th>
                                    <th scope="col"
                                        className="border-r px-3 py-4 border-black">Saleable Are</th>
                                    <th scope="col"
                                        className="border-r px-3 py-4 border-black">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {priceData.map((data, i) => (
                                    <tr key={i}>
                                        <td className="whitespace-nowrap border-r px-3 py-4 font-medium border-black">{data.bhk}</td>
                                        <td className="whitespace-nowrap border-r px-3 py-4 font-medium border-black">{data.area}</td>
                                        <td className="whitespace-nowrap border-r px-3 py-4 font-medium border-black">
                                            <span>{data.price}</span>
                                            <button onClick={handleOpenModel} className=' bg-yellow-600 px-3 py-1 text-white rounded-sm'>Request for Price Breakup</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className=' w-[30%]'>
                        <img onClick={handleOpenModel} className=' cursor-pointer' src="https://www.sales-enquiry.site/adarsh-welkin-park/search/assets/img/costing-details-320w.webp" alt="" />
                    </div>
                </div>
                <div className=' mt-4 md:hidden lg:hidden '>
                    <div className=' w-full flex flex-col gap-2'>
                        {priceData.map((data, i) => (
                            <div key={i} className=' w-[100%] flex flex-col gap-2 bg-gray-200 px-10 py-5 text-center shadow-sm rounded-sm border border-gray-400'>
                                <h3 className=' text-2xl font-semibold'>{data.bhk}</h3>
                                <p className=' '>{data.area}</p>
                                <h4 className=' text-xl font-medium'>{data.price}</h4>
                                <button onClick={handleOpenModel} className=' bg-yellow-600 px-3 py-1 text-white rounded-sm'>Request for Price Breakup</button>
                            </div>
                        ))}
                    </div>
                    <div className=' w-[100%] mt-3'>
                        <img onClick={handleOpenModel} className=' w-full cursor-pointer' src="https://www.sales-enquiry.site/adarsh-welkin-park/search/assets/img/costing-details-320w.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceSection