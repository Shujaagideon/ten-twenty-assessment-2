import '../styles/section3.css';
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion';
// import { info } from './cardInfo';
// import Card from './cards';
import IntersectionObserver from '../utils/intersectionObserver';
import Parallax from '../utils/parrallax';
import img7 from '../assets/image7.png';
import img2 from '../assets/image1.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'

const Section3 = ({ diff: skew, curr }) => {

    const [diff, setDiff] = useState(0);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setDiff(skew);
        setCurrent(curr);
    }, [skew, curr]);
    // const ease = [0.6, 0.05, -0.01, 0.99];
    // const [width, setWidth] = useState(0)
    const ref = useRef(null);
    useEffect(() => {
        // setWidth(ref.current.getBoundingClientRect().right)
    }, [ref]);
    
    return (
        <>
            <div className="section3">
                <div className="window">
                    <motion.div className="section3-cover"
                        // drag='x'
                        // ref={ref}
                        // dragElastic={0.08}
                        // dragConstraints={{ left: -width + width/1.8, right: 0 }}
                    >
                        <IntersectionObserver className='intersection'>
                            <Parallax className='parallax' diff={diff}>
                                <div className="upper-text">
                                    <p>Building a lasting legacy for individuals, families and businesses globally</p>
                                </div>
                            </Parallax>
                        </IntersectionObserver>
                        <IntersectionObserver >
                            <div className='img-container'>
                                <Parallax className='img-parallax' duration={8} diff={diff} current={current / 10}>
                                    <img src={img7} alt="" />
                                </Parallax>

                            </div>
                        </IntersectionObserver>
                        <IntersectionObserver>
                            <Parallax className='parallax' duration={4} diff={diff} current={current / 10}>
                                <div className="blended-text">
                                    <p>business</p>
                                </div>
                            </Parallax>
                        </IntersectionObserver>

                        <div className="random-imgs">
                            <div className="random-cover">
                                <IntersectionObserver>
                                    <div className='random random-1'>
                                        <Parallax duration={8} diff={diff} current={current / 10}>
                                        <img src={img4} alt="" />
                                        </Parallax>
                                    </div>
                              </IntersectionObserver>

                                <IntersectionObserver>
                                    <div className='random random-2' >
                                        <Parallax duration={8} diff={diff} current={current / 20}>
                                        <img src={img3} alt="" />
                                        </Parallax>
                                    </div>
                                </IntersectionObserver>
                                <IntersectionObserver>
                                    <div className='random random-3'>
                                        <Parallax duration={8} diff={diff} current={current / 20}>
                                        <img src={img2} alt="" />
                                        </Parallax>
                                    </div>
                                </IntersectionObserver>

                            </div>
                        </div>
                        
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Section3
