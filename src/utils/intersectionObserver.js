import React, { Children, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion/dist/framer-motion";


const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        x: 0,
    },
    animate: {
        x: 0,
        transition: {
            delayChildren: 0.06,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const lastName = {
    initial: {
        x: 0,
    },
    animate: {
        x: 0,
        transition: {
            delayChildren: 0.06,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const letter = {
    initial: {
        y: 1000,
    },
    animate: {
        y: 0,
        transition: { duration: 0.12, ...transition },
    },
};


const variants = {
    animate: { opacity: 1, x: 0, skewX: 0, skewX: 0, scale: 1 },
    initial: {
        opacity: 0,
        x: -100,
        skewX: -50,
        skewY: -3,
        scale: 1.2
    }
};



const IntersectionObserver = ({ children, threshold }) => {

    const [ref, inView] = useInView({
        /* Optional options */
        threshold: threshold || 0.3,
        triggerOnce: true
    });
    // useEffect(() => {
    //     const images = [...document.querySelectorAll('img')];


    // }, [])
    return (
        <>
            <motion.div
                animate={inView ? 'animate' : 'initial'}
                variants={variants}
                transition={transition}
                ref={ref}>
                {
                    children
                }

            </motion.div>

        </>
    )
}

export default IntersectionObserver
