import React from 'react'
import { motion } from 'framer-motion'
import DefaultImage from '../assets/Gallery - Hallway.jpg'

export default function ContentCard({
    title = 'Default title',
    subtitle= 'Default subtitle',
    description = 'Default description',
    image = DefaultImage
}) {
return (
    <div className='flex flex-col items-center gap-2 mx-auto'>
        <div className='relative rounded-lg overflow-hidden group'>
            <img src={image} className='object-cover object-center h-[450px] group-hover:scale-115 transition duration-700'/>
            <div className='absolute inset-0 flex items-center justify-center bg-black/30 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h1 className='text-white text-xl font-serif'>{subtitle}</h1>
                <p className='text-white text-lg font-serif'>{description}</p>
            </div>
        </div>
        <h1>{title}</h1>
    </div>
)
}
