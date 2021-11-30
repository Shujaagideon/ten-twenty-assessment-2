import { useEffect, useState } from 'react';
import backgroundVideo from '../assets/bgVideo.mp4'
import '../styles/hero.css'
import Parallax from '../utils/parrallax'

const Hero = ({ diff: skew, curr }) => {
    const [diff, setDiff] = useState(0);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setDiff(skew);
        setCurrent(curr);
    }, [skew, curr]);
    return (
        <>
            <div className="cover">
                <div className="bg">
                    <video autoPlay loop muted>
                        <source src={backgroundVideo} />
                    </video>
                </div>
                <div className="hero-info">
                    <Parallax offset={10} diff={diff} current={current/10}>
                        <div className="question">
                            <p>if not now then when?</p>
                        </div>
                    </Parallax>
                    <Parallax offset={20} diff={diff} current={current/10}>
                        <div className="heading-text">
                            <p>Time to make your wealth work for you.</p>
                        </div>
                    </Parallax>
                </div>
            </div>
        </>
    )
}

export default Hero
