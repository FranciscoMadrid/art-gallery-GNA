import React from 'react'
import DefaultImage from '../assets/Exhibit - 1.png'

export default function ExhibitionCard({
    image = DefaultImage,
    title = 'Default Title',
    subtitle = 'Default Subtitle',
    description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo at, iste nam a excepturi deserunt sint quod voluptatem ex suscipit, quibusdam similique ratione accusamus nesciunt veniam cum qui hic dolorum incidunt laboriosam sit ipsa doloremque quasi unde! Alias, repellat. Reiciendis excepturi voluptatibus, impedit tenetur est voluptate animi minus veritatis facere?",
    date = 'Default Date',
    time = 'Default Time'
}) {
return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
        <div className='flex flex-col gap-10 overflow-hidden'>
            <img src={image} className='w-full object-cover max-w-[550px] mx-auto rounded'/>
        </div>

        <div className='flex flex-col gap-2 bg-black/40 backdrop-blur-md rounded p-4 font-serif text-white items-start'>
            <h1 className='text-5xl text-accent'>{title}</h1>
            <h2 className='text-3xl'>{subtitle}</h2>
            <p className='text-xl'>
                {description}
            </p>
            <div className='flex flex-col gap-1 self-end text-2xl items-end'>
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </div>
    </div>
)
}
