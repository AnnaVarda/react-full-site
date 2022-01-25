import React from 'react';
import Img1 from './img/img-1.jpg';
import Img2 from './img/img-2.jpg';
import Img3 from './img/img-3.jpg';

const Gallery = () => {

    let data =[
        {
            id: 1,
            imgSrc:'Img1',
        },
        {
            id: 2,
            imgSrc:'Img2',
        },
        {
            id: 3,
            imgSrc:'Img3',
        }
    ]

  return (
      <>
      <div>
      {
          console.warn(data)
      }
      </div>
      </>
  );
}

export default Gallery;
