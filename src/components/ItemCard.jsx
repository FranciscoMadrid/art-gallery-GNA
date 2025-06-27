import React from 'react'
import DefaultImage from '../assets/24-scaled.jpeg'

export default function ItemCard({
    image = DefaultImage,
    title = 'Default Title',
    subtitle = 'Default Subtitle',
    onClick = () => {}
}) {
return (
    <div onClick={() => onClick(image)} className='cursor-pointer rounded-2xl w-full h-full flex flex-col overflow-hidden relative'>
        <img src={image} className=' object-cover object-center h-full w-full hover:scale-110 transition duration-400 ease-in-out'/>
        <div className='absolute p-5 bottom-0 flex flex-col gap-2 inset-x-0 text-white bg-gradient-to-t from-black to-transparent'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <h1 className='font-light italic text-lg'>{subtitle}</h1>
        </div>
    </div>
)
}
