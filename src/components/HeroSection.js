import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
      <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>LEVEL UP YOUR LIFE</h1>
            <p>What are you waiting for?</p>
        <div className="hero-btns">
					<Button className='btns' buttonStyle='btn--outline'
					buttonSize='btn--large'>
					DANCE WITH ME
					</Button>
					<Button className='btns' buttonStyle='btn--primary'
					buttonSize='btn--large'>
						LET'S WORKOUT
					</Button>
        </div>
    </div>
    );
}

export default HeroSection;
