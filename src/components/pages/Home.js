import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import '../Cards.css';



function Home() {
    return (
      <>
          <HeroSection />
        <div className="wrapper">
          <Cards
          img="https://www.ewoman.gr/sites/default/files/styles/703xh/public/2019-11/5-ewoman.jpg?itok=huR3qwMA"
          title="Social Dance Classes"
          description="Salsa - Bachata - Kizomba"
          url="dance"
           />

          <Cards
          img="/images/side plank.jpg"
          title="Fitness Classes"
          description="Pilates - Flexibility - Rehab"
          url="fitness"
           />

          <Cards
          img="/images/IMG_5835.JPG"
          title="Dance Therapy Classes"
          description="Primitive Expression - Afro Purcussion - Ecstatic"
          url="articles"
           />
        </div>
      </>
    );
}

export default Home;