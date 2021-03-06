import React, { useState } from "react";
import { head, size } from "lodash";
import { connect } from "react-redux";
import { addTodo } from "../reducers/todoSlice";
import Dropzone from "./drop-zone";
import Canvas from "./canvas";
import Prediction from "./predicition";
import classifyImage from "../ml5/classify-image";
import faceApi from "../ml5/face-api";

const ImageContainer = ({ addTodo }) => {
  const [imageData, setImageData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [faces, setFaces] = useState(0);

  const onDrop = acceptedFiles => {
    const first = head(acceptedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(first);

    reader.onloadend = () => {
      setImageData(reader.result);
    };
  };

  const onImageLoad = image => {
    classifyImage(image).then(res => setPredictions(res));
    faceApi(image).then(res => setFaces(size(res)));
  };

  return (
    <>
      <Dropzone onDrop={(acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles)}>
        <Canvas imageData={imageData} onImageLoad={img => onImageLoad(img)} />
      </Dropzone>
      {faces}
      <div>
        {predictions.map((p, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <Prediction p={p} key={key} />
        ))}
      </div>
    </>
  );
};

const mapDispatch = { addTodo };

export default connect(null, mapDispatch)(ImageContainer);
