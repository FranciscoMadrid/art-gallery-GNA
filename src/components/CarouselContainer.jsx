import React from 'react'

export default function CarouselContainer({children}) {
return (
    <div className='flex flex-row gap-10 items-center justify-center p-4'>
        {children}
    </div>
)
}
