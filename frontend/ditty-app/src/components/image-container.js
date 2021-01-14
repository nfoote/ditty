import React, { useState } from 'react';
import { head } from 'lodash';
import Dropzone from './drop-zone';
import Canvas from './canvas';
// import classifyImage from '../classifiers/classify-image';

const ImageContainer = () => {
  const [imageData, setImageData] = useState(null);

  const onDrop = (acceptedFiles) => {
    const first = head(acceptedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(first);

    reader.onloadend = () => {
      setImageData(reader.result);
    };
  };

  return (
    <>
      <Dropzone onDrop={(acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles)} />
      <Canvas imageData={imageData} />
    </>
  );
};

export default ImageContainer;
