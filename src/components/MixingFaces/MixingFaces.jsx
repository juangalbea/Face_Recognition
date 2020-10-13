import React from "react";
import "./MixingFaces.css";

class MixingFaces extends React.Component {
  render() {
    const {singleBox} = this.props;
    return (
      <div
        className="box-face"
        style={{
          top: singleBox.topRow,
          right: singleBox.rightCol,
          bottom: singleBox.bottomRow,
          left: singleBox.leftCol,
        }}
      ><p>{singleBox.age}</p></div>
    );
  }
}

export default MixingFaces;