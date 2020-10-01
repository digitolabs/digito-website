import React, {useEffect} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Heading from "../../common/Heading";

import images from '../../../assets/svg/productdelivery.png';

const SecondSection = () => {
  const team = React.createRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(team.current, {
      scrollTrigger:{
        trigger: team.current,
        scrub: true,
        toggleActions: 'restart pause none none'
      },
    duration: 2,
    x: 90,
  })

  }, [team]);
  return (
    <div className="second-section">
      <div className="second-section--left">
        <div className="second-section__heading"><Heading text1="Why we do" text2="What we do"/></div>
        <div className="content">
            <p>We want to support campanies, institutions, and individuals with amazing and quality products and services but with less visibility and accessibility. 
            Our purpose is to serve you selflessly and make your business grow tremendously.
            </p>
        </div>
      </div>
      <div className="second-section--right">
        <img ref={team} src={images} alt="teamimage"/>
      </div>
    </div>
  );
};

export default SecondSection;
