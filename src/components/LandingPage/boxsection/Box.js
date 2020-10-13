import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


const Box = () => {

    const cover = React.createRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(cover.current, {scrollTrigger: {
            trigger: cover.current,
            scrub: true,
            toggleActions: "restart pause none none"
        },
        duration: 2,
        y:600,
        opacity: 0
    })
    }, [cover]);
    return(
        <div className="box-section">
         </div>
    )
}

export default Box;