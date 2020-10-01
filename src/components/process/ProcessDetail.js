import React, { useEffect } from "react";
import { connect } from "react-redux";
import ExtraRectangle from "../LandingPage/sixthSection/ExtraRectangle";
import images from "../../assets/imageUrls";
import { useParams } from "@reach/router";
import { findProcess } from "../../actions";

const ProcessDetail = (props) => {
  const params = useParams();

  useEffect(() => {
    props.findProcess(Number(params.processId));
  }, [Number(params.processId)]);

  return (
    <div className="our-process__content">
      <div className="left-section">
        {/* <h1>{props.process && props.process[0].title}</h1> */}
        <div className="process-bg-img">
          <img
            src={(props.process && props.process[0].image) || images.team}
            alt="title"
          />
        </div>
        <div className="model"></div>
      </div>
      <div className="right-section">
        <div className="upper-part">
          <div className="message">
            <p>
              {(props.process && props.process[0].text) ||
                `These are the essential steps of how we do what we do.`}
            </p>
          </div>
        </div>
        <div className="lower-part">
          <ExtraRectangle />
        </div>
      </div>
      {/* <div className="design-button">
        <div className="left">
          <img
            src={(props.process && props.process[0].icon) || images.together}
            alt={(props.process && props.process[0].title) || "icon"}
          />
        </div>
        <div className="right">
          {(props.process && props.process[0].title) || "welcome"}
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProcess: state.selectedProcess,
    process: state.process,
  };
};
export default connect(mapStateToProps, { findProcess })(ProcessDetail);
