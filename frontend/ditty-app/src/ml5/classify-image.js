import * as ml5 from 'ml5';

export default function classifyImage(imageInput) {
  return ml5.imageClassifier('MobileNet')
    .then((classifier) => classifier.predict(imageInput))
    .then((results) => results);
}
