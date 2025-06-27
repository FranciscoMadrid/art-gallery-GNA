import React from 'react';
import DefaultImage from '../assets/Art 7.jpg';

export default function ArtistBanner({
    leftImage = DefaultImage,
    title = '',
    subtitle = '',
    rightImage = DefaultImage,
    desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus beatae voluptatum incidunt nesciunt eaque...',
}) {
    return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
        <div className="relative w-full h-64 md:h-auto">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage: `url(${leftImage})`,
                }}
            />
        </div>
        <article className="flex text-center flex-col md:flex-row items-center justify-center gap-6 p-4 md:p-8 font-serif text-[#1e1e1e]">
            <div className="flex flex-col gap-2 max-w-xl">
                <header>
                    <h1 className="text-2xl md:text-4xl font-bold underline">{title}</h1>
                    <h2 className="text-lg md:text-xl font-semibold">{subtitle}</h2>
                </header>
                <p className="text-base md:text-lg leading-relaxed">{desc}</p>
            </div>

            <figure className="shrink-0">
                <img
                src={rightImage}
                alt="Artist"
                className="rounded-full object-cover h-32 w-32 md:h-48 md:w-48 border-4 border-[#2d6159] shadow-md"
                />
            </figure>
        </article>
    </section>
    );
}