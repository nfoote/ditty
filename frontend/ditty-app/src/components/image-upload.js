import React from 'react';

const ImageUpload = () => (
  <>
    <h1>Upload Image</h1>

    <form action="/upload" method="post" encType="multipart/form-data">
      <input type="file" accept="image/*" name="photo" />
      <input type="submit" value="upload" />
    </form>
  </>
);

export default ImageUpload;
