import React from 'react'
import GenreCard from './GenreCard'
import ArtA from '../assets/Art 2.png'
import ArtB from '../assets/Art 3.png'
import ArtC from '../assets/Art 4.png'
import ArtD from '../assets/Art 5.png'
import ArtE from '../assets/Art 6.png'
import ArtF from '../assets/French Art.png'

import FadeInWrapper from './FadeInWrapper'

export default function GenreContent() {
return (
    <section className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-evenly'>
        
        <FadeInWrapper delay={0.5}>
            <GenreCard image={ArtA} genre='Renacimiento' description='El Renacimiento en pintura se caracterizó por el uso de la perspectiva y el realismo para representar figuras humanas y escenas con gran detalle. Fue una época que combinó arte y ciencia, con artistas como Leonardo da Vinci y Miguel Ángel.'/>
        </FadeInWrapper>

        <FadeInWrapper delay={0.5}>
            <GenreCard image={ArtB} genre='Religioso' description='El Renacimiento religioso en pintura mostró escenas bíblicas con gran realismo y emoción, humanizando a los personajes sagrados. Artistas como Rafael y Caravaggio lograron combinar devoción y técnica para inspirar fe.'/>
        </FadeInWrapper>

        <FadeInWrapper delay={0.5}>
            <GenreCard image={ArtC} genre='Abstracto' description='El arte abstracto rompe con la representación literal y busca expresar ideas, emociones o formas a través de colores, líneas y formas no figurativas. Surge en el siglo XX como una forma de explorar lo intangible y lo subjetivo.'/>
        </FadeInWrapper>

        <FadeInWrapper delay={0.5}>
            <GenreCard image={ArtD} genre='Contemporaneo' description='El arte contemporáneo abarca una gran variedad de estilos y técnicas actuales, reflejando temas sociales, políticos y personales. Es experimental, diverso y busca cuestionar ideas tradicionales del arte.'/>
        </FadeInWrapper>

        <FadeInWrapper delay={0.5}>
            <GenreCard image={ArtE} genre='Sentimental' description='El arte sentimental busca transmitir emociones profundas y conectar con los sentimientos del espectador, usando colores, formas y escenas que evocan nostalgia, amor o melancolía. Su objetivo es tocar el corazón más que la razón.'/>
        </FadeInWrapper>

        <FadeInWrapper delay={0.5}>
            <GenreCard image={ArtF} genre='Frances' description='El arte francés se caracteriza por su elegancia y diversidad, abarcando desde el clasicismo hasta el modernismo. Ha influido en movimientos clave como el barroco, el impresionismo y el surrealismo.'/>
        </FadeInWrapper>
    </section>
)
}
