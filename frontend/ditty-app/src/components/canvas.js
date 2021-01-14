import React, { useRef, useEffect, useState } from 'react';
import classifyImage from '../classifiers/classify-image';
import Flex from './flex';

const Canvas = ({ imageData }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const img = new Image();

  const transformLabel = ({ label, confidence }) => `${label} (Confidence: ${confidence})`;
  // setPredictions(null);
  // const transformResultData = (results) => results.map((result) => ({ label: result.label, confidence: result.confidence }));

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
          classifyImage(img).then((res) => setPredictions(res));
        };
        img.src = imageData;
      }
    }
  }, [context, imageData]);

  return (
    <Flex>
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
      <div>
        {predictions.map((p, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={key}>
            {key + 1}
            :
            {transformLabel(p)}
          </p>
        ))}
      </div>
    </Flex>

  );
};

export default Canvas;
