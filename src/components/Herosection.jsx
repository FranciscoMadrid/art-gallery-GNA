import React from 'react'
import DefaultImage from '../assets/Gallery - Hallway.jpg'
import { motion } from 'framer-motion'

export default function Herosection({
    image = DefaultImage,
    title = 'Default title',
    subtitle = 'Default subtitle'
}) {
return (
    <section className='font-serif bg-primary'>
        <div className='grid grid-cols-1 md:grid-cols-[70%_30%] w-full min-h-screen' id='home'>

            <div className='w-full h-full overflow-hidden relative'>
                <motion.img 
                initial={{opacity: 0, x: -1000}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 1.2, ease: 'easeInOut'}}
                src={image} className='w-full h-full object-cover object-center'/>
            </div>

            <div className='bg-primary grid grid-cols-[8%_8%_1fr] items-center justify-center h-full'>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease:'easeInOut', duration: 0.55, delay: 0.8}}
                className='h-full w-full bg-[#5da096]'/>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease:'easeInOut', duration: 0.55, delay: 1}}
                className='h-full w-full bg-[#4b7e76] opacity-25'/>

                <div className='flex flex-col items-center p-2 gap-2 h-full justify-center'>
                    <h1 
                    className='text-4xl font-bold'>{title}</h1>
                    <p 
                    className='text-xl text-start'>{subtitle}</p>
                </div>
            </div>
        </div>
    </section>
)
}
