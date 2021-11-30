import { useEffect, useState } from 'react';
import { ReactComponent as Flower } from '../assets/flower.svg'
import '../styles/section2.css';
import IntersectionObserver from '../utils/intersectionObserver';
import Parallax from '../utils/parrallax';
import img2 from '../assets/image1.png'



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
                    <div className="section2-cover">
                        <div className="intersect1">
                            <IntersectionObserver>
                                    <div className="upper-text">
                                        <p>Success stories our capabilities in action</p>
                                    </div>
                            </IntersectionObserver>
                        </div>
                        <div className="intersect2">
                            <ul>
                                <li><a href="#">private clients</a></li>
                                <li><a href="#">corporate</a></li>
                                <li><a href="#">insights</a></li>
                                <li><a href="#">contacts</a></li>
                            </ul>
                        </div>
                        <div className="intersect3">
                            <div className='last-section-img'>
                                    <Parallax duration={8} diff={diff} current={current / 80}>
                                        <img src={img2} alt="" />
                                    </Parallax>
                            </div>
                            <div className="blended-text">
                                <IntersectionObserver>
                                    <Parallax duration={4} diff={diff} current={current / 10}>
                                        <p className='right'>Diversifying for</p>
                                        <p className='left'>a more secure future</p>
                                    </Parallax>
                                </IntersectionObserver>
                            </div>
                        </div>
                        <div className="intersect4">
                            <div className="make-enquiry-btn">
                                <p>make</p>
                                <p>enquiry</p>
                            </div>
                            <div className="last-text">
                                <p>Diversifying for a more secure future</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Flower className='flower' />
            </div>
        </>
    )
}

export default Section
