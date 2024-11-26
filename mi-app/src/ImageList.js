import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://db-esi.vercel.app/api/card')
      .then(response => {
        const imageLinks = response.data.map(item => item.img);
        setImages(imageLinks);
      })
      .catch(error => {
        console.error('Error al fetchear las imágenes:', error);
      });
  }, []);

  return (
    <div>
      {images.length > 0 ? (
        images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} />
        ))
      ) : (
        <p>No hay imágenes para mostrar.</p>
      )}
    </div>
  );
};

export default ImageList;
