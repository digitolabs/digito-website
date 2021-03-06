import React from "react";

const SmallVideo = ({videosrc}) => (
    <video
      className="small-video-content"
      autoPlay="autoplay"
      muted
      loop="loop"
    >
      <source src={videosrc} type="video/webm" />
      Your browser is not supported!
    </video>
);

export default SmallVideo;
