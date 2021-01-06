import React, { useState } from 'react';
import Canvas from './canvas';

const ImageUpload = () => {
  const [imageData, setImageData] = useState(null);

  function handleUploadChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageData(reader.result);
    };
  }

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Upload Image</h1>
      <Canvas imageData={imageData} />
      <input onChange={handleUploadChange} id="upload" type="file" accept="text" multiple />
    </div>
  );
};

export default ImageUpload;
