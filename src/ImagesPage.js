// ImagesPage.js
import React from 'react';

const ImagesPage = () => {
  const imagePaths = ['src\images\bulbasaur.jpg', 'src\images\charmander.png', 'src\images\squirtle.png'];

  return (
    <div>
      {imagePaths.map((path, index) => (
        <img key={index} src={require(`./${path}`).default} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImagesPage;
