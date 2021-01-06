import React, { useRef, useEffect, useState } from 'react';

const Canvas = ({ imageData }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const img = new Image();

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
    </div>
  );
};

export default Canvas;
