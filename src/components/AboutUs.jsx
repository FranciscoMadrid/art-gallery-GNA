import React from 'react';
import ImageA from '../assets/Gallery - 1.jpg';
import ImageB from '../assets/Gallery - 2.jpeg';
import ImageC from '../assets/Gallery - 3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export default function AboutUs() {
    return (
        <section className="w-full items-center h-[800px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 h-full">
                <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                navigation
                keyboard
                className='w-full h-full overflow-hidden'>
                    <SwiperSlide><img src={ImageA} className='bg-cover bg-center h-full w-full'/></SwiperSlide>
                    <SwiperSlide><img src={ImageB} className='bg-cover bg-center h-full w-full'/></SwiperSlide>
                    <SwiperSlide><img src={ImageC} className='bg-cover bg-center h-full w-full'/></SwiperSlide>
                </Swiper>
                <article className="flex flex-col gap-6 text-center md:text-left font-serif">
                    <h1 className="text-3xl md:text-4xl font-bold">Sobre Nosotros</h1>
                    <p className="text-lg md:text-xl text-justify leading-relaxed">
                        Ubicada en el corazón histórico de Tegucigalpa, la Galería Nacional de Arte es un espacio dedicado a preservar, promover y celebrar el patrimonio artístico hondureño. A través de sus exposiciones permanentes y temporales, la galería ofrece un recorrido por la historia del arte en Honduras, desde la época colonial hasta las expresiones contemporáneas. Es un punto de encuentro para el diálogo cultural, la reflexión estética y la valorización de nuestras identidades.
                    </p>
                </article>
            </div>
        </section>
    );
    }