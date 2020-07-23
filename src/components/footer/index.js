import React from "react";
import Logo from "../common/Logo";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { faStreetView} from "@fortawesome/free-solid-svg-icons";
import { faMapMarker} from "@fortawesome/free-solid-svg-icons";
import Contact from "../common/Contact";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo-and-content">
        <div className="footer__logo">
          <div className="footer__logo--container">
            <Logo />
          </div>
        </div>
        <div className="footer__content">
          <div className="footer__content--line">
            <div className="invisible-div" ><h4 className="invisible">Contact us</h4></div>
            <div className="line"></div>
          </div>
          <div className="footer__content--info">
            <div className="footer__info">
              <h4 className="phone-invisible">Contact us</h4>
              <Contact icon={faComment} content="sms/call/whatsap: +25078000000"/>
              <Contact icon={faEnvelope} content="digitolabs@gmail.com"/>
              <Contact icon={faStreetView} content="KK 319 ST, Kigali, Kicukiro, Niboyi"/>
              <Contact icon={faMapMarker} content="Kigali, Rwanda"/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__free-space">
      <p>&copy;Digito 2020</p>
      </div>
    </div>
  );
};

export default Footer;
