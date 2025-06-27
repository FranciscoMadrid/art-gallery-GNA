import React from 'react'
import ContentCard from './ContentCard'

export default function Content() {
return (
    <section className='w-full'>
        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 p-2 mx-auto'>
            <ContentCard/>
            <ContentCard/>
            <ContentCard/>
        </div>
    </section>
)
}
