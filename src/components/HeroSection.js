import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ReactCurvedText from "react-curved-text";


function HeroSection() {
    return (
      <div className='hero-container'>
            
            <h1>
                <ReactCurvedText text="LEVEL UP YOUR LIFE"
                width={370}
                height={300}
                cx="196"
                cy="204"
                rx={100}
                ry={100}
                startOffset={20}
                reversed={true}
                textProps={{ style: { fontSize: '25' } }}
                tspanProps={{ dy: '-20' }}/>
            </h1>
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
