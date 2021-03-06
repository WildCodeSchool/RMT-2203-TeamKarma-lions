import React, { useState } from "react";

import "../../styles/CuriosityPics.scss";

import PicSelect from "./PicSelect";

import PicCard from "./PicCard";

export default function CuriosityPics({ picList }) {
  const [positionIndex, setPositionIndex] = useState(0);
  const [choosenValue, setChoosenValue] = useState("");

  const picListFiltered = () => {
    return picList.filter((pic) => pic.camera.name.includes(choosenValue));
  };

  const handleChange = (e) => {
    setChoosenValue(e.target.value);
    setPositionIndex(0);
  };

  const nbPerPage = 20;

  const handleButtonClick = (action) => {
    if (typeof action === "string") {
      if (action === "Previous") {
        if (positionIndex !== 0) {
          setPositionIndex(positionIndex - nbPerPage);
        }
      }
      if (action === "Next") {
        if (positionIndex + nbPerPage < picListFiltered().length) {
          setPositionIndex(positionIndex + nbPerPage);
        }
      }
      if (action === "Last") {
        if (picListFiltered().length > nbPerPage) {
          setPositionIndex(
            (Math.ceil(picListFiltered().length / nbPerPage) - 1) * 20
          );
        }
      }
    } else {
      setPositionIndex(action * nbPerPage);
    }
  };
  return (
    <div className="bigDiv">
      <div className="filterCam">
        <p>
          <span className="police">Choose a camera :</span>
        </p>
        <select name="Camera" value={choosenValue} onChange={handleChange}>
          <option value="">All - {picList.length} photos</option>
          {picList
            .filter(
              (elem, index) =>
                picList.findIndex(
                  (obj) => obj.camera.name === elem.camera.name
                ) === index
            )
            .map((el) => (
              <PicSelect key={el.id} picList={picList} cameraList={el} />
            ))}
        </select>
      </div>
      <div className="picListEmpty">
        {picList.length === 0 ? (
          <div>
            <p className="police">⚠</p>
            <p>
              <span className="police">Sorry</span>, Curiosity was exploring
              that day.{" "}
              <span className="police">Please, select another date</span>.
            </p>
          </div>
        ) : null}
      </div>
      {picList.length === 0 ? null : (
        <div className="containerPic">
          <div className="buttonContainer">
            <button
              type="button"
              className="picButton"
              onClick={() => handleButtonClick(0)}
            >
              <img src="../src/assets/firstfirst.png" alt="first arrow" />
            </button>
            <button
              type="button"
              className="picButton"
              onClick={() => handleButtonClick("Previous")}
            >
              <img src="../src/assets/dbl-arrow-left.png" alt="left arrow" />
            </button>
            <p>
              {positionIndex / nbPerPage + 1} /
              {Math.ceil(picListFiltered().length / nbPerPage)}
            </p>
            <button
              type="button"
              className="picButton"
              onClick={() => handleButtonClick("Next")}
            >
              <img src="../src/assets/dbl-arrow-right.png" alt="right arrow" />
            </button>
            <button
              type="button"
              className="picButton"
              onClick={() => handleButtonClick("Last")}
            >
              <img src="../src/assets/lastlast.png" alt="last arrow" />
            </button>
          </div>

          <div className="gridpics">
            {picListFiltered().map((pic, index) =>
              index >= positionIndex && index < nbPerPage + positionIndex ? (
                <PicCard pic={pic} key={pic.id} />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}
