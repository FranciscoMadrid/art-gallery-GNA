import React from 'react'
import DefaultImage from '../assets/Art 1.png'

export default function InformationContainer({
    image = DefaultImage,
    title = 'Default Title',
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni eum atque veniam impedit praesentium qui, dicta error facilis provident officiis, quae sit necessitatibus distinctio voluptatem dolorum mollitia, ratione deserunt aperiam quos consequuntur minima id iste? Obcaecati repellendus labore ab."
}) {
return (
    <section className='bg-gray-200 grid grid-cols-2 w-full h-full'>
        <div className='flex flex-col gap-2 overflow-hidden relative'>
            <img src={image} className=' object-cover object-center'/>
            <div className=' absolute w-full h-full bg-gradient-to-t from-black/40 to-transparent'/>
        </div>

        <div className='flex flex-col gap-2 font-serif p-4 border-l-8'>
            <h1 className=' text-3xl'>{title}</h1>
            <p className='text-xl'>{desc}</p>
        </div>
    </section>
)
}
