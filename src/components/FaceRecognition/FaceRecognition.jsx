
import React from "react";
import MixingFaces from "../MixingFaces/MixingFaces";
import paper from '../../paper.jpg';

function FaceRecognition({ imageUrl, box }) {
  let borderArray;
  var result;
  var sortable = [];
for (var vehicle in box) {
    sortable.push([vehicle, box[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1].age - b[1].age;
});


var count = sortable.length;
result = sortable.map(function(el) {
  var o = Object.assign({}, el[1]);
  o.redColor = Math.floor(100*count / sortable.length);
  count--;
  return o;
})
  if (box.length) {
    borderArray = result.map((singleBox, i) => {
      return <MixingFaces singleBox={singleBox} key={i} />;
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