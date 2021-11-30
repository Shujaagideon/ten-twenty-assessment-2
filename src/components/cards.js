import { motion } from 'framer-motion/dist/framer-motion';
import { useEffect, useState } from 'react';
import '../styles/card.css'
import IntersectionObserver from '../utils/intersectionObserver';

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const initial={
    width: '100%',
    height: '100%',
    transition
}
const animate = {
    width: '105%',
    height: '105%',
    transition
}

const Card = ({ info }) => {
    const { heading, text, img } = info;
    const [paused, setPaused] = useState(true);
    useEffect(() => {
        const svFilter = document.getElementById('turbulence');
        const freq = svFilter.attributes.getNamedItem('baseFrequency');
        let num = 0;
        const Animate = () => {
            if(paused) return;
            num += 0.005;
            freq.value = `${Math.abs(Math.sin(num))} ${Math.abs(Math.cos(num))}`
            requestAnimationFrame(Animate)
        }
        Animate()
        console.log(paused)
    }, [paused]);

    return (
        <>
            <motion.div className="card">
                <div className="text">
                    <IntersectionObserver threshold={0}>
                        <h2>{heading}</h2>
                    </IntersectionObserver>
                    <p>{text}</p>
                </div>
                <motion.div animate='animate' initial='initial' className="image-part">
                    <svg className="imgfilter">
                        <filter id="noise" x='0' y='0' width='100%' height='100%'>
                            <feTurbulence id="turbulence" baseFrequency='0.02 0.03' numOctaves='1' result='NOISE' />
                            <feDisplacementMap in='SourceGraphic' in2='NOISE' scale='20' />
                        </filter>
                    </svg>
                    <IntersectionObserver>
                    <motion.img onMouseEnter={() => setPaused(false)} onMouseLeave={() => setPaused(true)} animate={paused ? initial : animate} src={img} alt="" />
                    </IntersectionObserver>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Card
