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
           />

          <Cards
          img="https://scontent.fath4-2.fna.fbcdn.net/v/t1.15752-9/79929672_1450528118461946_2849707498066149376_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-ACamvwoLDoAX9r0n5i&_nc_ht=scontent.fath4-2.fna&oh=32f524337180a0a65f2f4310e21a3d7d&oe=61D56589"
          title="Fitness Classes"
          description="Pilates - Flexibility - Rehab" />

          <Cards
          img=".images/IMG_5835.JPG"
          title="Dance Therapy Classes"
          description="Primitive Expression - Afro Purcussion - Ecstatic" />
        </div>
      </>
    );
}

export default Home;