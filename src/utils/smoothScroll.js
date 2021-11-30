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
        let refHeight = Wrapper.current !== null && Wrapper.current.getBoundingClientRect().width - window.innerWidth/2
        document.body.style.height = `${refHeight}px`;
        // console.log(document.body.style.height);
        console.log(Wrapper.current.getBoundingClientRect());

        Animation()
    }

    const Animation = () => {

        current = Lerp(current, target, ease);
        current = parseFloat(current.toFixed(2));
        target = window.scrollY;
        skewDiff = (target - current) * 0.008;
        setDiff(skewDiff);
        setCurr(current);
        // console.log(current)
        // scrollPos = ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);

        if (Wrapper.current !== null) Wrapper.current.style.transform = `translate3D(${- current}px, 0, 0) skewX(${skewDiff}deg)`

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