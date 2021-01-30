import * as ml5 from "ml5";

const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
};

export default async function faceApi(imageInput) {
  return ml5
    .faceApi(detectionOptions)
    .then(faceapi => faceapi.detect(imageInput))
    .then(results => results);
}
