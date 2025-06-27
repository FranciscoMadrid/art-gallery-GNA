import React, { useState } from 'react';
import Herosection from '../components/Herosection';
import HeroImage from '../assets/Gallery - 2.jpeg'
import ImageBackground from '../assets/painting-background.png';
import ExhibitionCard from '../components/ExhibitionCard';
import GenreContent from '../components/GenreContent';
import FadeInWrapper from '../components/FadeInWrapper';
import ItemCard from '../components/ItemCard';
import CoverFlowSwiper from '../components/CoverFlowSwiper';
import ArtistBanner from '../components/ArtistBanner';
import FullScreenModal from '../components/FullScreenModal';

import PaintingA from '../assets/Art 7.jpg'
import ArtistImage from '../assets/Artist - 1.jpg'
import ArtistPainting from '../assets/Art 9.jpg'

import ItemImageA from '../assets/Art-10.png'
import ItemImageB from '../assets/Art-11.png'
import ItemImageC from '../assets/Art-12.png'
import ItemImageD from '../assets/Art-13.png'
import ItemImageE from '../assets/Art-14.png'
import ItemImageF from '../assets/Art-15.png'
import ItemImageG from '../assets/Art-16.png'
import ItemImageH from '../assets/Art-17.png'
import ItemImageI from '../assets/Art-18.png'
import ItemImageJ from '../assets/Art-19.png'
import ItemImageK from '../assets/Art-20.png'
import ItemImageL from '../assets/Art-21.png'
import ItemImageM from '../assets/Art-22.png'
import ItemImageN from '../assets/Art-23.png'

import ExhibitA from '../assets/Taller - 1.jpg'

import Divider from '../assets/Divider 1.png'

import { AnimatePresence, motion } from 'framer-motion';



export default function Home() {
    const [selectedImage, setSelectedImage] = useState(null)
    
return (
    <section className=' scroll-smooth'>
        <Herosection 
        image={HeroImage} 
        title="Galería Nacional de Arte" 
        subtitle="Donde el arte narra nuestra historia"
        />


        <div className='w-full bg-no-repeat bg-fixed bg-cover p-4 py-20' id='exhibicion' style={{ backgroundImage: `url("${ImageBackground}")` }}>
            <div className='bg-black/30 max-w-4xl mx-auto rounded-2xl shadow-2xl backdrop-blur-2xl p-4'>
                <h1 className='font-serif text-4xl md:text-6xl text-center text-white'>Nuestras Exhibiciones</h1>
            </div>

            <div className='max-w-7xl mx-auto'>
                <FadeInWrapper delay={0.5}>
                    <ExhibitionCard title='Angeles y Demonios' subtitle='Odas y Epodos' description='Esta exposición explora la dualidad entre ángeles y demonios, lo celestial y lo terrenal. Inspiradas en odas y epodos, las obras reflejan emociones opuestas: la luz de la virtud y la sombra del deseo. Un recorrido por los contrastes que habitan en el alma humana.' date='28 de Agosto' time='7:00 PM'/>
                </FadeInWrapper>
                <FadeInWrapper delay={0.5}>
                    <ExhibitionCard title='Versa Arte' subtitle='Inspiracion Francesa' description='La Alianza Francesa de Tegucigalpa, en colaboración con la Galería Nacional de Arte y con el apoyo de la Embajada de Francia en Honduras, tiene el honor de invitarle a dos eventos excepcionales que celebran el arte y la cultura francófona.' image={PaintingA} date='11 de Marzo' time='6:30 PM'/>
                </FadeInWrapper>
                <FadeInWrapper delay={0.5}>
                    <ExhibitionCard title='Taller De Arte' subtitle='A beneficio de FUNDARTE' image={ExhibitA} description='Aparta tu cupo con el pago del 50%, se impartira de 10 a.m. a 4 p.m., tus aportaciones seran a favor de FUNDARTE y sus los proyectos artisticos. . Lista de materiales no incluida.' date='30 de Noviembre' time='10:00 AM - 4:00 PM'/>
                </FadeInWrapper>
            </div>
        </div>

        <section id='galeria'>
            <AnimatePresence>
                <motion.div 
                initial={{opacity: 0, scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut'
                }}
                exit={{opacity: 0, scale: 0}}
                viewport={{
                    margin: '-200px 0px 10px 0px'
                }}
                className='w-full py-20 px-2 flex flex-col gap-10'>
                    <div className='mx-auto flex flex-col items-center gap-2'>
                        <h1 className='text-4xl font-serif'>Un vistazo de nuestra colleccion</h1>
                        <img src={Divider} className=' object-cover w-[80vw] md:w-[50vw]'/>
                    </div>
                    <CoverFlowSwiper initialSlide={2}>
                        <div className='h-[580px]'>
                            <ItemCard image={ItemImageA} onClick={setSelectedImage} title='David' subtitle='Ulises Rivera'/>
                        </div>
                        <div className='h-[580px]'>
                            <ItemCard image={ItemImageB} onClick={setSelectedImage} title='Libertad' subtitle='Victor Lopez'/>
                        </div>
                        <div className='h-[580px]'>
                            <ItemCard image={ItemImageC} onClick={setSelectedImage} title='Un Campo, un balon, una passion' subtitle='Wilmer Saldre'/>
                        </div>
                        <div className='h-[580px]'>
                            <ItemCard image={ItemImageD} onClick={setSelectedImage} title='Condición de una verdad' subtitle='Fabricio Ortiz'/>
                        </div>
                        <div className='h-[580px]'>
                            <ItemCard image={ItemImageE} onClick={setSelectedImage} title='Aguadoras' subtitle='Benigno Gomez'/>
                        </div>
                    </CoverFlowSwiper>
                </motion.div>
            </AnimatePresence>
        </section>
        
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[85vw] md:w-[80vw] xl:w-[70vw] py-10 mx-auto'>
            <ItemCard image={ItemImageF} title='Efímera' subtitle='Carmen Moncada' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageG} title='Peregrino' subtitle='Lucrecia Santos' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageH} title='Valle Enegma' subtitle=' Miguel Ángel Ruiz Matute' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageI} title='Collar Turquesa' subtitle='Claudia Lardizabal' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageJ} title='Germinacion' subtitle='Adonay Navarro' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageK} title='Oro Negro No.7' subtitle='Ezaquiel Padilla Ayestas' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageL} title='Vitae Brevitas' subtitle='Julio Visquerra' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageM} title='El Contemplado' subtitle='Miguel Angel Ruiz Matute' onClick={setSelectedImage}/>
            <ItemCard image={ItemImageN} title='El Angel de la Victoria' subtitle='Moises Becerra' onClick={setSelectedImage}/>
        </section>

        <div className='w-full bg-white py-20'>
            <div className='w-[85vw] md:w-[80vw] xl:w-[70vw] mx-auto'>
                <GenreContent/>
            </div>
        </div>
        <div className='bg-primary flex flex-col'>
            <div className='w-full bg-[#5da096] h-4'/>
            <div className='w-full bg-[#4b7e76] opacity-25 h-4'/>
            <ArtistBanner leftImage={ArtistPainting} subtitle='Artista del Mes' title='Scarlett Rovelaz' rightImage={ArtistImage}/>
            <div className='w-full bg-[#5da096] h-4'/>
            <div className='w-full bg-[#4b7e76] opacity-25 h-4'/>
        </div>
        <FullScreenModal src={selectedImage} onClose={() => setSelectedImage(null)}/>
    </section>
);
}