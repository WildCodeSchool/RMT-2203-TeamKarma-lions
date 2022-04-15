import React from "react";

export default function FunFact({ textFront, factData, textBack }) {
  return (
    <div className="funfact">
      {textFront}
      <p>
        {factData}
        {textBack}
      </p>
    </div>
  );
}
