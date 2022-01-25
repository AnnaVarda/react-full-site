import React, { useState } from 'react';
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Img2 from '../img/img-2.jpg';
import Img3 from '../img/img-3.jpg';
import Img4 from '../img/img-4.jpg';

const Gallery = () => {

    let data =[
        {
            id: 1,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img3,
        },
        {
            id: 3,
            imgSrc: Img4,
        }
    ]

const [model, setModel] = useState(false);
const [tempImgSrc, setTempImgSrc] = useState(''); 

const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
}

  return (
      <>
      <div className={model? "model open" : "model"}>
        <img src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)}/> 
      </div>
      <div className="gallery">
          {data.map((item, index)=>{
              return(
                  <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                      <img src={item.imgSrc} style={{width: '100%'}} />

                  </div>
              )
          })}
      
      </div>
      </>
  );
}

export default Gallery;
