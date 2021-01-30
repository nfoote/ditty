// eslint-disable-next-line react/no-array-index-key
import React, { useState } from 'react';
import { head, size } from 'lodash';
import Dropzone from './drop-zone';
import Canvas from './canvas';
import Prediction from './predicition';
import classifyImage from '../ml5/classify-image';
import faceApi from '../ml5/face-api';

const ImageContainer = () => {
  const [imageData, setImageData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [faces, setFaces] = useState(0);

  const onDrop = (acceptedFiles) => {
    const first = head(acceptedFiles);
    const reader = new FileReader();
    reader.readAsDataURL(first);

    reader.onloadend = () => {
      setImageData(reader.result);
    };

    // const formData = new FormData();
    // formData.append('photo', first);

    // fetch('/upload', {
    //   method: 'POST',
    //   body: formData,
    // }).then((res) => {
    //   console.log('Request complete! response:', res);
    // });
  };

  function callback() {
    console.log('yoyoo');
  }

  const onImageLoad = (image) => {
    classifyImage(image).then((res) => setPredictions(res));
    faceApi(image, callback).then((res) => setFaces(size(res)));
    console.log(faces);
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
