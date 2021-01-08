import * as ml5 from 'ml5';

export default async function classifyImage(imageInput) {
  // Initialize the Image Classifier method with MobileNet
  // eslint-disable-next-line no-console
  const classifier = ml5.imageClassifier('MobileNet', () => { console.log('Model Loaded'); });
  // Put the image to classify inside a variable
  const image = imageInput;
  // Make a prediction with a selected image
  classifier.predict(image, 5, (err, results) => results).then((value) => {
    console.log(value);
    return value;
  });
}
