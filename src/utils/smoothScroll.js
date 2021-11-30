import React, { useRef, useEffect, useState } from 'react'
import '../styles/smoothScroll.css'

const SmoothScroll = ({ children }) => {
    let current = 0;
    let target = 0;
    let ease = 0.3;
    let skewDiff = 0;


    useEffect(() => {
        window.scrollTo({ left: 0 });
        SetAnim();
    }, [])
    const [diff, setDiff] = useState(0);
    const [curr, setCurr] = useState(0);

    const Wrapper = useRef(document.body);

    const Lerp = (start, end, speed) => {
        return start * (1 - speed) + end * speed;
    }
    const SetAnim = () => {
        let refHeight = Wrapper.current !== null && Wrapper.current.getBoundingClientRect().width - window.innerWidth/2;
        if(window.innerHeight> window.innerWidth){
            refHeight = Wrapper.current !== null && Wrapper.current.getBoundingClientRect().height;
        }
        document.body.style.height = `${refHeight}px`;

        Animation()
    }

    const Animation = () => {
        
        current = Lerp(current, target, ease);
        current = parseFloat(current.toFixed(2));
        target = window.scrollY;
        skewDiff = (target - current) * 0.008;
        setDiff(skewDiff);
        setCurr(current);
        
        if (Wrapper.current !== null) Wrapper.current.style.transform = `translate3D(${- current}px, 0, 0) skewX(${skewDiff}deg)`
        if (window.innerHeight > window.innerWidth) {
            if (Wrapper.current !== null){
                Wrapper.current.style.height = 'fit-content';
                 Wrapper.current.style.transform = `translate3D(0, ${- current}px, 0) skewY(${skewDiff}deg)`
                }
        }


        requestAnimationFrame(Animation);
    }

    return (
        <div className='smooth-scroll-container'>
            <div className='wrapp' ref={Wrapper}>
                {React.Children.map(children, (child)=>{
                    const clone = React.cloneElement(child, {
                        diff,
                        curr
                    })
                    return clone;
                })}
            </div>
        </div>
    )
}

export default SmoothScroll