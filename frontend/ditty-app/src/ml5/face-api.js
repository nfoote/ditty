import * as ml5 from 'ml5';

const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
};

export default async function faceApi(imageInput, callback) {
  // eslint-disable-next-line no-use-before-define
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-use-before-define
  const faceapi = await ml5.faceApi(detectionOptions, modelLoaded);
  callback();
  function modelLoaded() {
    faceapi.detect(imageInput, (err, results) => {
      console.log(results);
    });
  }
}
