import React from 'react'

function GallerySection() {
    const imageData = [
        {
            id: 1,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 2,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 3,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 4,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 5,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 6,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 7,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 8,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 9,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
        {
            id: 10,
            img: "https://www.bangaloreprojects.info/welkin-park/search/assets/img/g9.jpg"
        },
    ]
    return (
        <div>
            <div className='bg-white p-4 mt-4 flex flex-col gap-3 relative border border-gray-200'>
                <div>
                    <span className=' text-xl border border-blue-500 px-4 rounded-full'>Gallery</span>
                    <div className=' mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-1 lg:p-5'>
                        {imageData.map((data, i) => (
                            <img className=' w-[220px] h-[150px] rounded-sm transition-all duration-2000 ease-in-out hover:w-[250px] hover:h-[170px]' key={i} src={data.img} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection