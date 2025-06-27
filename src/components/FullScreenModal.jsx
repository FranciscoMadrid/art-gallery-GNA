import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FullScreenModal({
    src,
    alt ='',
    onClose
}) {
    useEffect(() => {
        const handleKey = (e) => {
        if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);
return (
    <AnimatePresence>
        {src && (
            <motion.div
            className='fixed inset-0 bg-black/50 z-[250] flex items-center justify-center'
            onClick={onClose}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <motion.img 
                initial={{opacity:0, scale:0.9}}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={src} 
                alt={alt} 
                onClick={(e) => e.stopPropagation()}
                className=' max-w-[90vw] maxh-[90vh] object-contain rounded-2xl shadow-2xl'/>
            </motion.div>
        )}
    </AnimatePresence>
)
}
