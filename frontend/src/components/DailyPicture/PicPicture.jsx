import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PicToggle from "./PicToggle";

export default function PicPicture({ url, handleTogglePic, showPic }) {
  const [imgState, setImgState] = useState("noImg");

  const setBackgroundImage = (urlraw, imgLoaded = false) => {
    const styleObj = {};

    if (document.getElementsByClassName("picPicture")[0]) {
      const baseHeight =
        document.getElementsByClassName("picPicture")[0].clientHeight;
      const baseWidth =
        document.getElementsByClassName("picPicture")[0].clientWidth;

      const totalDistance = baseHeight / 2 + baseWidth;
      const currentDistance = totalDistance * showPic;

      const topDot =
        baseWidth -
        baseHeight / 2 -
        Math.min(currentDistance, baseWidth - baseHeight / 2);
      const leftDot =
        baseHeight / 2 + Math.min(currentDistance, baseHeight / 2);

      styleObj.clipPath = `polygon(${topDot}px ${
        topDot === 0 ? currentDistance - (baseWidth - baseHeight / 2) : 0
      }px,
      ${
        baseWidth -
        baseHeight / 2 -
        Math.min(currentDistance, baseWidth - baseHeight / 2)
      }px 0,
         100% 0, 
         100% ${leftDot}px,
         ${
           leftDot === baseHeight
             ? baseWidth - (currentDistance - baseHeight / 2)
             : baseWidth
         }px ${leftDot}px)`;

      // console.log("showPic", showPic);
      // console.log(styleObj.clipPath)
      if (showPic) styleObj.zIndex = 100;
    }
    if (urlraw !== "" && imgState === "noImg") {
      const img = new Image();
      img.src = urlraw;
      img.addEventListener("load", () => {
        setImgState("loaded");
      });
    }

    if (imgLoaded) styleObj.backgroundImage = `url(${urlraw})`;

    // if (urlraw !== "") styleObj.backgroundImage = `url(${urlraw})`;

    return styleObj;
  };

  useEffect(() => {
    console.log(imgState);
    if (imgState === "loaded") setBackgroundImage(url, true);
  }, [imgState]);

  useEffect(() => {
    console.log("render");
  });

  return (
    <div
      className="picPicture"
      style={setBackgroundImage(url, imgState === "loaded")}
    >
      <img src={url} alt="img loading hack" style={{ display: "none" }} />
      <PicToggle handleTogglePic={handleTogglePic} showPic={showPic} />
    </div>
  );
}

PicPicture.propTypes = {
  url: PropTypes.string,
  handleTogglePic: PropTypes.func.isRequired,
  showPic: PropTypes.number.isRequired,
};

PicPicture.defaultProps = {
  url: "",
};
