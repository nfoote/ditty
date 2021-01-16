// eslint-disable-next-line react/no-array-index-key
import React, { useState } from 'react';
import { head } from 'lodash';
import Dropzone from './drop-zone';
import Canvas from './canvas';
import Prediction from './predicition';
import classifyImage from '../classifiers/classify-image';

const ImageContainer = () => {
  const [imageData, setImageData] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const onDrop = (acceptedFiles) => {
    const first = head(acceptedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(first);

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    const formData = new FormData();
    formData.append('photo', first);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    }).then((res) => {
      console.log('Request complete! response:', res);
    });
  };

  const onImageLoad = (image) => {
    classifyImage(image).then((res) => setPredictions(res));
  };

  return (
    <>
      <Dropzone onDrop={(acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles)}>
        <Canvas imageData={imageData} onImageLoad={(img) => onImageLoad(img)} />
      </Dropzone>

      <div>
        {predictions.map((p, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <Prediction p={p} key={key} />
        ))}
      </div>
    </>
  );
};

export default ImageContainer;
