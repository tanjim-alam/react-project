import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'
import FormModel from './FormModel'

function Layout({ children, sectionIds }) {
    function handleOpenModel() {
        document.getElementById('my_modal_3').showModal()
    }
    return (
        <div className=' bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row'>
            <div className=' flex flex-col flex-1 overflow-hidden'>
                <Navbar sectionIds={sectionIds} handleOpenModel={handleOpenModel} />
                <div className='min-h-0 overflow-y-auto overflow-x-hidden'>
                    {children}
                </div>
            </div>
            <div className='hidden md:hidden lg:block xl:block'>
                <SideBar handleOpenModel={handleOpenModel} />
            </div>
            <FormModel />
        </div>
    )
}

export default Layout