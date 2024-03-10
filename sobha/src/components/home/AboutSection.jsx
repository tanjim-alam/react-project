import React from 'react'

function AboutSection() {
    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <h3 className=' text-2xl text-center font-semibold'>About</h3>
                    <h2 className=' text-xl font-medium'>About Developer</h2>
                    <p className=' mt-2'>
                        Since its inception in 1988, under the visionary leadership of Founder Mr. BM Jayeshankar, Adarsh Group has experienced phenomenal growth.
                        Started as a humble endeavour, today Adarsh Developers are one of the leading real estate companies in Bengaluru.
                        Coming to be known now as the innovative creator of a luxurious lifestyle, the group constructed its first residential
                        property in 1996 and after that, there was no looking back. Defining the future of architectural excellence, Adarsh offers an eco-friendly,
                        secure and self-sufficient lifestyle through their numerous Residential and commercial endeavours. Today, Adarsh Developers is a name synonymous with quality.
                        <span className=' text-blue-600 underline cursor-pointer'> Read more...</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection