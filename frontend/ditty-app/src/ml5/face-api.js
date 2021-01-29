import * as ml5 from 'ml5';

const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
};

export default function faceApi(imageInput) {
  // eslint-disable-next-line no-use-before-define
  const faceapi = ml5.faceApi(detectionOptions, modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');

    // Make some sparkles
    faceapi.detect(imageInput, (err, results) => {
      console.log(results);
    });
  }
}
