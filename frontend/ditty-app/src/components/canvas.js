import React, { useRef, useEffect, useState } from 'react';
import * as ml5 from 'ml5';
import { map } from 'lodash';

const Canvas = ({ imageData }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const img = new Image();

  const transformResultData = (results) => map(results, (result) => result.label);

  const classifyImg = () => {
    // Initialize the Image Classifier method with MobileNet
    // eslint-disable-next-line no-console
    const classifier = ml5.imageClassifier('MobileNet', () => { console.log('Model Loaded'); });
    // Put the image to classify inside a variable
    const image = img;
    // Make a prediction with a selected image
    classifier.predict(image, 5, (err, results) => {
      setPredictions(transformResultData(results));
    });
  };

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');

      if (renderCtx) {
        setContext(renderCtx);
      }
    }

    if (context) {
      if (imageData != null) {
        img.onload = () => {
          context.drawImage(img, 0, 0, 500, 500);
        };
        img.src = imageData;
      }
    }
  }, [context, imageData]);

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <canvas
        id="canvas"
        ref={canvasRef}
        width={500}
        height={500}
        style={{
          border: '2px solid #000',
          marginTop: 10,
        }}
      />
      <button
        type="button"
        onClick={() => {
          classifyImg();
        }}
      >
        Classify
      </button>
      <div>
        {predictions.map((p, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={key}>
            {key + 1}
            :
            {p}
          </p>
        ))}
      </div>

    </div>
  );
};

export default Canvas;
