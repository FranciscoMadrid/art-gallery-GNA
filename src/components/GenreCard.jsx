import React from 'react'
import DefaultImage from '../assets/Art 1.png'

export default function GenreCard({
    title = '',
    image = DefaultImage,
    genre = 'Default Genre',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel sapiente earum vero dolorum. Quasi ullam unde quaerat. Voluptas, a.'
}) {
    return (
        <div className='flex flex-col items-center group cursor-pointer h-full'>
            <div className='relative w-full h-[500px] overflow-hidden'>
                <div className='absolute w-full z-50 items-center justify-center p-10 text-center text-white h-full bg-black/50 backdrop-blur-sm transition ease-in-out duration-300 opacity-0 group-hover:opacity-100 flex flex-col'>
                    <h1 className='text-lg'>{description}</h1>
                </div>
                <img
                    src={image}
                    className='object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out'
                />
            </div>
            <div className='bg-black text-xl flex flex-col gap-2 w-full text-white font-serif p-2 text-center'>
                <h1>{genre}</h1>
            </div>
        </div>
    )
}