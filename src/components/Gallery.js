import React, { useState } from 'react';
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../img/onTheWall.jpg';
import Img2 from '../img/img-2.jpg';
import Img3 from '../img/img-3.jpg';
import Img4 from '../img/img-4.jpg';
import Img5 from '../img/crossindArms.jpg';
import Img6 from '../img/goldenTree.jpg';
import Img7 from '../img/retroMarket.jpg';
import Img8 from '../img/eyesProfileCold.jpg';


const Gallery = () => {

    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id:6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
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
        <img src={tempImgSrc} alt="dance images" />
        <CloseIcon onClick={() => setModel(false)}/> 
      </div>
      <div className="gallery">
          {data.map((item, index)=>{
              return(
                  <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                      <img src={item.imgSrc} style={{width: '100%'}} alt="dance images" />

                  </div>
              )
          })}
      
      </div>
      </>
  );
}

export default Gallery;
