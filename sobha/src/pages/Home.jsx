import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/home/HeroSection'
import OverviewSection from '../components/home/OverviewSection'
import PriceSection from '../components/home/PriceSection'
import SiteAndFloorPlanSection from '../components/home/SiteAndFloorPlanSection'
import AmenitiesSection from '../components/home/AmenitiesSection'
import GallerySection from '../components/home/GallerySection'
import LocationSection from '../components/home/LocationSection'
import VirtualSiteTourSection from '../components/home/VirtualSiteTourSection'
import AboutSection from '../components/home/AboutSection'
import FooterSection from '../components/home/FooterSection'
import FormModel from '../components/FormModel'

function Home() {
    const sectionIds = ["siteplan", "amenities", "gallery", "location", "virtualtour"]
    function handleOpenModel() {
        document.getElementById('my_modal_3').showModal()
    }
    return (
        <Layout sectionIds={sectionIds}>
            <HeroSection handleOpenModel={handleOpenModel} />
            <OverviewSection handleOpenModel={handleOpenModel} />
            <PriceSection handleOpenModel={handleOpenModel} />
            <div id='siteplan'>
                <SiteAndFloorPlanSection handleOpenModel={handleOpenModel} />
            </div>
            <div id='amenities'>
                <AmenitiesSection />
            </div>
            <div id='gallery'>
                <GallerySection />
            </div>
            <div id='location'>
                <LocationSection handleOpenModel={handleOpenModel} />
            </div>
            <div id='virtualtour'>
                <VirtualSiteTourSection handleOpenModel={handleOpenModel} />
            </div>
            <div id='about'>
                <AboutSection handleOpenModel={handleOpenModel} />
            </div>
            <div id='footer'>
                <FooterSection />
            </div>
            <FormModel />
        </Layout>
    )
}

export default Home