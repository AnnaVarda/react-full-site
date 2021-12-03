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
          img="https://www.ewoman.gr/sites/default/files/inline-images/3-ewoman_8.jpg"
          title="The everyday Salad"
          description="Dance with me and LEVEL UP your life"
          label="Dance"
          path="/services" />

          <Cards
          img="https://www.ewoman.gr/sites/default/files/inline-images/3-ewoman_8.jpg"
          title="The everyday Salad"
          description="Dance with me and LEVEL UP your life" />

          <Cards
          img="https://www.ewoman.gr/sites/default/files/inline-images/3-ewoman_8.jpg"
          title="The everyday Salad"
          description="Dance with me and LEVEL UP your life" />
        </div>
      </>
    );
}

export default Home;