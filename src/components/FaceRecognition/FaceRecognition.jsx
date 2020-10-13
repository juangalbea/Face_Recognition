
import React from "react";
import MixingFaces from "../MixingFaces/MixingFaces";
import paper from '../../paper.jpg';

function FaceRecognition({ imageUrl, box }) {
  let borderArray;
  console.log(box)
  var sortable = [];
for (var vehicle in box) {
    sortable.push([vehicle, box[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1].age - b[1].age;
});

console.log('hello')
console.log(sortable)
  if (box.length) {
    borderArray = sortable.map((singleBox, i) => {
      return <MixingFaces singleBox={singleBox[1]} key={i} />;
    });
  }
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          src={imageUrl || paper}
          alt="img"
          width="500px"
          height="auto"
          id="inputImage"
        />
        {borderArray}
      </div>
    </div>
  );
}

export default FaceRecognition;