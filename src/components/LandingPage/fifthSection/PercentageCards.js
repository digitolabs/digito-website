import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import PercentageCard from './PercentageCard';


const PercentageCards = () => {

    const percentages = React.createRef();
 
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(percentages.current, {
            scrollTrigger:{
            trigger: percentages.current,
            scrub: true,
            toggleActions: "restart pause none none"
        }, 
        duration: 3,
        scale: 0.8});
    }, [percentages])

    return(
        <div className="percentage-card-container" ref={percentages}>
           <PercentageCard value="Trust" classname="top-left" />
           <PercentageCard value="Respect" classname="top-right" />
           <PercentageCard value="Unity" classname="bottom-left" />
           <PercentageCard value="Excellence" classname="bottom-right"/>
        </div>
    )
}

export default PercentageCards;