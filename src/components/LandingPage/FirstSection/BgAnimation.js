import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import images from '../../../assets/imageUrls';


const BgAnimation = () => {
const box1 = React.createRef();
const box3 = React.createRef();
const box2Small = React.createRef();
const topbox = React.createRef();



  useEffect(() => {

    gsap.to(topbox.current, {
      y: 460,
      duration: 20,
      ease:"bounce",
      delay: 10,
      repeat: -1
      
    });
    gsap.to(box1.current, {
      x: 95,
      rotation: 360,
      duration: 35,
      ease:"bounce",
      repeat: -1
    });

    gsap.from(box3.current, {
      x: -170,
      rotation: 360,
      duration: 35,
      ease:"bounce",
      delay: 25,
      repeat: -1
    });

    gsap.from(box2Small.current, {
      y: -9,
      duration: 10,
      scale: 8,
      ease:"bounce",
      repeat: -1
    });

  }, [box1, box3, box2Small, topbox]); 

    return(
        <div className="bg-animations">
        <div className="top-div">
          <img src={images.box_black} alt="imagetop" ref={topbox}></img>
        </div>
        <div className="lower-div"> 
            <div className="box-1">
              <img src={images.box_black} alt="whitebox" ref={box1}/>
            </div>
            <div className="box-2">
              <img src={images.last_box_open} alt="openkbox" className="big-box"/>
            </div>
            <div className="box-3">
              <img src={images.white_box} alt="whitebox"  ref={box3}/>
            </div>
        </div>
      </div>
    )
}

export default BgAnimation;