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
import Img16 from '../img/ClassicDebut.jpg';
import Img17 from '../img/ClassicLiftFinale.jpg';
import Img18 from '../img/ClassicLiftSemba.jpg';
import Img19 from '../img/ClassicLiftSplit.jpg';
import Img20 from '../img/ClassicPaso.jpg';
import Img21 from '../img/Danzaloon2019.jpg';
import Img22 from '../img/KizoBomba3DLift.jpg';
import Img23 from '../img/KizoBombaCross.jpg';
import Img24 from '../img/KizoBombaFinale.jpg';
import Img25 from '../img/KizoBombaLift.jpg';
import Img26 from '../img/KizombadaLesson1.jpg';
import Img27 from '../img/KizombadaLesson2.jpg';
import Img28 from '../img/KizombadaLesson3.jpg';
import Img29 from '../img/KizombadaLesson4.jpg';
import Img30 from '../img/PartyPose.jpg';
import Img31 from '../img/PartyTattoo.jpg';
import Img32 from '../img/SalsaTurn.jpg';
import Img33 from '../img/SSFLesson.jpg';
import Img34 from '../img/SyrosPose.jpg';
import Img35 from '../img/Georgas.jpg';
import Img36 from '../img/Anastasinis.jpg';
import Img37 from '../img/SoloJump.jpg';
import Img38 from '../img/AA1.jpg';
import Img39 from '../img/AA2.jpg';
import Img40 from '../img/AA3.jpg';
import Img41 from '../img/AA4.jpg';
import Img42 from '../img/AK1.jpg';
import Img43 from '../img/AK2.jpg';
import Img44 from '../img/Spyros1.jpg';
import Img45 from '../img/Spyros2.jpg';
import Img46 from '../img/Medal.jpg';
import Img47 from '../img/PasoSpanish.jpg';
import Img48 from '../img/SSFPoster.jpg';
import Img49 from '../img/FlashMob.JPG';
import Img50 from '../img/2ndplace.jpg';

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
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
        {
            id: 22,
            imgSrc: Img22,
        },
        {
            id: 23,
            imgSrc: Img23,
        },
        {
            id: 24,
            imgSrc: Img24,
        },
        {
            id: 25,
            imgSrc: Img25,
        },
        {
            id: 26,
            imgSrc: Img26,
        },
        {
            id: 27,
            imgSrc: Img27,
        },
        {
            id: 28,
            imgSrc: Img28,
        },
        {
            id: 29,
            imgSrc: Img29,
        },
        {
            id: 30,
            imgSrc: Img30,
        },
        {
            id: 31,
            imgSrc: Img31,
        },
        {
            id: 32,
            imgSrc: Img32,
        },
        {
            id: 33,
            imgSrc: Img33,
        },
        {
            id: 34,
            imgSrc: Img34,
        },
        {
            id: 35,
            imgSrc: Img35,
        },
        {
            id: 36,
            imgSrc: Img36,
        },
        {
            id: 37,
            imgSrc: Img37,
        },
        {
            id: 38,
            imgSrc: Img38,
        },
        {
            id: 39,
            imgSrc: Img39,
        },
        {
            id: 40,
            imgSrc: Img40,
        },
        {
            id: 41,
            imgSrc: Img41,
        },
        {
            id: 42,
            imgSrc: Img42,
        },
        {
            id: 43,
            imgSrc: Img43,
        },
        {
            id: 44,
            imgSrc: Img44,
        },
        {
            id: 45,
            imgSrc: Img45,
        },
        {
            id: 46,
            imgSrc: Img46,
        },
        {
            id: 47,
            imgSrc: Img47,
        },
        {
            id: 48,
            imgSrc: Img48,
        },
        {
            id: 49,
            imgSrc: Img49,
        },
        {
            id: 50,
            imgSrc: Img50,
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
