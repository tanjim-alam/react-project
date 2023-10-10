import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        // progressCircle.current.style.setProperty('--progress', 1 - progress);
        // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696874772_Limited_Time_Deals.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696874843_Festive_Deals_on_bestselling_smartphones.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696866399_Realme_A2_Desktop.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696866399_Realme_A2_Desktop.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696874947_Lowest_Prices_Ever.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696874947_Lowest_Prices_Ever.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696875003_Super_Saver.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696875083_Hot_Deals_on_Cool_Kitchenware.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696875209_Grand_Grocery_Deals.jpg?im=Resize=(1680,320)" alt="" />
                </SwiperSlide>
                {/* <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div> */}
            </Swiper>
        </>
    );
}