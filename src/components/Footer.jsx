import React from 'react'

export default function Footer() {
return (
    <footer className='w-full h-full bg-secondary font-serif border-t-4 border-white/30' id='footer'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 items-center p-8 text-white justify-start max-w-7xl mx-auto'>

            <div className='flex flex-col gap-4 h-full w-full text-lg'>
                <h1 className='text-2xl font-bold text-accent'>Redes Sociales</h1>
                <a className='transition duration-200 ease-in-out hover:underline w-fit' href='https://www.instagram.com/galerianacionaldearte/'>Instagram</a>
                <a className='transition duration-200 ease-in-out hover:underline w-fit' href='https://www.facebook.com/GNAHONDURAS/'>Facebook</a>
            </div>

            <div className='flex flex-col gap-2 h-full w-full'>
                <h1 className='text-2xl font-bold text-accent'>Newsletter</h1>
                <p>Suscríbete para recibir actualizaciones, acceso a ofertas exclusivas y más.</p>
                <input type='text' className='w-full border-2 rounded p-1 text-white border-white/20'/>
                <button className='p-3 text-black hover:text-white cursor-pointer transition duration-200 ease-in-out bg-primary hover:bg-[#4b7e76]'>
                    Suscríbete
                </button>
            </div>

            <div className='h-full md:col-span-2 rounded overflow-hidden flex flex-col gap-2'>
                <iframe className='h-[350px] w-full transition duration-150 ease-in-out' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.50402055788!2d-87.21086912314112!3d14.10643058632338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2bf03f6a595%3A0x8aa2a2bf7772276d!2sGaleria%20Nacional%20de%20Arte!5e0!3m2!1sen!2shn!4v1750948709924!5m2!1sen!2shn" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='flex flex-row gap-4 items-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl md:text-2xl font-bold text-accent'>Tegucigalpa</h1>
                        <p className='text-lg'>Martes a Sabado: 8:30 AM a 4:30 PM</p>
                        <p className='text-lg'>Domingos: 10:00 AM a 3:00 PM</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl md:text-2xl font-bold text-accent'>San Pedro Sula</h1>
                        <p className='text-lg'>Lunes a Viernes: 9:00 AM a 4:00 PM</p>
                        <p className='text-lg'>Sabados: 9:00 AM a 3:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
}
