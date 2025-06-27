import React from 'react'
import DefaultImage from '../assets/Gallery - 3.jpg'

export default function BannerContent({
    image = DefaultImage,
    title = 'Default Title',
    artistName = 'John Doe',
    description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt ullam impedit, adipisci, cumque quam est recusandae error earum officia, in ut iure animi molestias itaque tempore nostrum aperiam dolor. Eligendi ad consequuntur odio iusto, expedita et qui quos tempora facere consectetur, quasi repellat doloribus, dolores perspiciatis suscipit porro nihil."
}) {
return (
    <section className=' grid grid-cols-1 md:grid-cols-2 gap-2 font-serif items-center'>
        <div className=' h-[450px] bg-amber-800'>
            <img src={image} className='object-scale-down h-full w-full'/>
        </div>

        <div className='flex flex-col gap-10 font-serif items-center h-full justify-start row-span-2'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-xl'>{description}</p>
        </div>

        <h1 className='text-sm'>Artista - <strong className='font-bold'>{artistName}</strong></h1>
    </section>
)
}
