import { useEffect, useState } from 'react';
import { ReactComponent as Flower } from '../assets/flower.svg'
import '../styles/section2.css';
import IntersectionObserver from '../utils/intersectionObserver';
import Parallax from '../utils/parrallax';



const Section = ({ diff: skew, curr }) => {
    const [diff, setDiff] = useState(0);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setDiff(skew);
        setCurrent(curr);
    }, [skew, curr]);

    return (
        <>
            <div className="section2">
                <div className="section2-info">
                    <IntersectionObserver>
                        <Parallax offset={0} diff={diff}>
                            <div className="heading-text">
                                <p>Building a lasting legacy for individuals, families and businesses globally</p>
                            </div>
                        </Parallax>
                    </IntersectionObserver>
                    <IntersectionObserver>
                        <Parallax offset={0} diff={diff}>
                            <div className="question">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </Parallax>
                    </IntersectionObserver>
                </div>
                <Flower className='flower' />
            </div>
        </>
    )
}

export default Section
