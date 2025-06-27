import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow } from 'swiper/modules';

export default function CoverFlowSwiper({children, initialSlide = 0}) {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
return (
    <div className='relative w-full overflow-visible'>

        <button ref={prevRef} className='rounded-full block md:hidden text-4xl absolute z-250 top-1/2 left-0 bg-black/30 text-white py-1 px-3'>
            <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button ref={nextRef} className='rounded-full block md:hidden text-4xl bg-black/30 absolute z-250 top-1/2 right-0 text-white py-1 px-3'>
            <i className="fa-solid fa-arrow-right"></i>
        </button>


        <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow]}
        effect='coverflow'
        centeredSlides={true}
        slidesPerView={'auto'}
        keyboard
        navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
        }}
        grabCursor={true}
        initialSlide={initialSlide}
        coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true
        }}
        className='w-full h-full'>
            {React.Children.map(children, (child, index) => (
                <SwiperSlide key={index} className='!w-full sm:!w-[350px] md:!w-[500px]'>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
)
}
