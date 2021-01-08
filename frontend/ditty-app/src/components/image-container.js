import React from 'react';
import { head } from 'lodash';
import Dropzone from './drop-zone';
// import classifyImage from '../classifiers/classify-image';

const ImageContainer = () => {
  const onDrop = async (acceptedFiles) => {
    // do stuff with your files and the newFunction
    // console.log(acceptedFiles);
    const first = head(acceptedFiles);
    console.log(first);
    // classifyImage(first);
  };

  return (
    <Dropzone onDrop={(acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles)} />
  );
};

export default ImageContainer;
