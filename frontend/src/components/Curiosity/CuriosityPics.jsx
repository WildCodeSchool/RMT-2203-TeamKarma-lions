import React, { useState } from "react";

import "../../styles/CuriosityPics.scss";
import PicCard from "./PicCard";

export default function CuriosityPics({ picList }) {
  const [positionIndex, setPositionIndex] = useState(0);
  const [choosenValue, setChoosenValue] = useState("");

  const handleChange = (e) => {
    setChoosenValue(e.target.value);
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
        if (positionIndex + nbPerPage < picList.length) {
          setPositionIndex(positionIndex + nbPerPage);
        }
      }
      if (action === "Last") {
        if (picList.length > nbPerPage) {
          setPositionIndex((Math.ceil(picList.length / nbPerPage) - 1) * 20);
        }
      }
    } else {
      setPositionIndex(action * nbPerPage);
    }
  };

  return (
    <div>
      <div className="filterCam">
        <p>
          <span className="police">Choose a camera :</span>
        </p>
        <select name="Camera" value={choosenValue} onChange={handleChange}>
          <option value="">All - {picList.length} photos</option>
          <option value="FHAZ">
            Front Hazard Avoidance Camera - FHAZ -{" "}
            {picList.filter((pic) => pic.camera.name.includes("FHAZ")).length}{" "}
            photos
          </option>
          <option value="RHAZ">
            Rear Hazard Avoidance Camera - RHAZ -{" "}
            {picList.filter((pic) => pic.camera.name.includes("RHAZ")).length}{" "}
            photos
          </option>
          <option value="MAST">
            Mast Camera - MAST -{" "}
            {picList.filter((pic) => pic.camera.name.includes("MAST")).length}{" "}
            photos
          </option>
          <option value="CHEMCAM">
            Chemistry and Camera Complex - CHEMCAM -{" "}
            {
              picList.filter((pic) => pic.camera.name.includes("CHEMCAM"))
                .length
            }{" "}
            photos
          </option>
          <option value="MAHLI">
            Mars Hand Lens Imager - MAHLI -{" "}
            {picList.filter((pic) => pic.camera.name.includes("MAHLI")).length}{" "}
            photos
          </option>
          <option value="MARDI">
            Mars Descent Imager - MARDI -{" "}
            {picList.filter((pic) => pic.camera.name.includes("MARDI")).length}{" "}
            photos
          </option>
          <option value="NAVCAM">
            Navigation Camera - NAVCAM -{" "}
            {picList.filter((pic) => pic.camera.name.includes("NAVCAM")).length}{" "}
            photos
          </option>
        </select>
      </div>
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
          {picList
            .filter((pic) => pic.camera.name.includes(choosenValue))
            .map((pic, index) =>
              index >= positionIndex && index < nbPerPage + positionIndex ? (
                <PicCard pic={pic} key={pic.id} />
              ) : null
            )}
        </div>
      </div>
    </div>
  );
}
