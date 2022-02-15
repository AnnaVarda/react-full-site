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
import Img9 from '../img/B4UGroup.jpg';
import Img10 from '../img/B4UCouple.jpg';
import Img11 from '../img/AJ.jpg';
import Img12 from '../img/AlterEgoRohas.jpg';
import Img13 from '../img/KizoBomba1.0.JPG';
import Img14 from '../img/poluthrona1.jpg';
import Img15 from '../img/B4UStreet.jpeg';


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
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
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
