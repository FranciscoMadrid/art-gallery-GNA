import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/GNA - Main Body.png';
import LogoSlide from '../assets/GNA - Slide Body.png';
import { AnimatePresence, motion } from 'framer-motion';

export default function NavBar() {
    const [mobileView, setMobileView] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const mobileViewRef = useRef(mobileView);
    const lastScrollY = useRef(0);

    const toggleMobileView = () => {
        setMobileView(!mobileView);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNav(false);
                if (mobileViewRef.current) {
                    setMobileView(false);
                }
            } else {
                setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        mobileViewRef.current = mobileView;
    }, [mobileView]);

    return (
        <div className="relative">
            {/* Navbar */}
            <motion.nav 
                initial={{ y: 0 }}
                animate={{ y: showNav ? 0 : -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='w-full bg-white p-2 font-serif border-b-2 fixed top-0 left-0 right-0 z-250'
            >
                <div className='flex flex-row gap-2 justify-between items-center'>
                    {/* Logo */}
                    <a className='flex flex-row gap-1 items-center overflow-hidden cursor-pointer'
                        onClick={() => {
                                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                                setShowNav(false);
                        }}>
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            src={Logo}
                            className='h-15 bg-white z-30'
                        />
                        <motion.img 
                            initial={{ x: -200 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                            src={LogoSlide}
                            className='h-15'
                        />
                    </a>

                    {/* Desktop Links */}
                    <div className='hidden md:flex flex-row gap-8 text-xl'>
                        <span onClick={() => {
                                document.getElementById('exhibicion')?.scrollIntoView({ behavior: 'smooth' });
                                setShowNav(false);
                            }}
                            className="cursor-pointer">
                            Exhibiciones
                        </span>
                        <span onClick={() => {
                                document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
                                setShowNav(false);
                            }}
                            className="cursor-pointer">
                            Galeria
                        </span>
                        <span onClick={() => {
                                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                                setShowNav(false);
                            }}
                            className="cursor-pointer">
                            Ubicacion
                        </span>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={toggleMobileView}
                        className="md:hidden flex flex-col justify-center items-center w-15 h-15 relative z-40"
                    >
                        <div className="relative w-8 h-6 flex flex-col justify-between items-center">
                            <motion.span
                                animate={mobileView ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                                className="bg-black h-1 w-8 rounded-sm origin-center absolute top-0"
                                transition={{ duration: 0.1 }}
                            />
                            <motion.span
                                animate={mobileView ? { opacity: 0 } : { opacity: 1 }}
                                className="bg-black h-1 w-8 rounded-sm absolute top-1/2 transform -translate-y-1/2"
                                transition={{ duration: 0.1 }}
                            />
                            <motion.span
                                animate={mobileView ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                                className="bg-black h-1 w-8 rounded-sm origin-center absolute bottom-0"
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileView && (
                    <motion.div
                        initial={{ y: -150 }}
                        animate={{ y: 0 }}
                        exit={{ y: -150 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='md:hidden w-full bg-white border-b-2 z-240 p-4 flex flex-col gap-2 mt-[60px] border-t-1 fixed left-0'
                    >
                        <h1>Reservar</h1>
                        <h1>Exhibiciones</h1>
                        <h1>Galeria</h1>
                        <h1>Ubicacion</h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}