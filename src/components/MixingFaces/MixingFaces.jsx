import React from "react";
import "./MixingFaces.css";

function MixingFaces({ singleBox }) {
  return (
    <div
      className="mixing-faces"
      id={singleBox.age}
      style={{
        boxShadow: `0 0 0 3px rgb(${singleBox.redColor * 2},30,100) inset`,
        top: singleBox.topRow,
        right: singleBox.rightCol,
        bottom: singleBox.bottomRow,
        left: singleBox.leftCol,
      }}
    ></div>
  );
}

export default MixingFaces;