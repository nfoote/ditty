import React, { useState } from 'react';
import { head, map } from 'lodash';
import Dropzone from './drop-zone';
import Canvas from './canvas';
import Prediction from './predicition';
import classifyImage from '../classifiers/classify-image';

const ImageContainer = () => {
  const [imageData, setImageData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  // const transformLabel = ({ label, confidence }) => `${label} (Confidence: ${confidence})`;

  const onDrop = (acceptedFiles) => {
    const first = head(acceptedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(first);

    reader.onloadend = () => {
      setImageData(reader.result);
    };
  };

  const onImageLoad = (image) => {
    console.log(image);
    classifyImage(image).then((res) => setPredictions(res));
  };

  return (
    <>
      <Dropzone onDrop={(acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles)}>
        <Canvas imageData={imageData} onImageLoad={(img) => onImageLoad(img)} />
      </Dropzone>
      <div>
        {map(predictions, (p, key) => (
          <div>
            <Prediction prediction={p} key={key} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageContainer;
