import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
          <h1>Check out these EPIC Destinations!</h1>
					<div className="cards__container">
						<div className="cards__wrapper">
							<ul className="cards__items">
								<CardItem 
								src="images/img-9.jpg"
								text="Explore the hidden waterfall"
								label="Adventure"
								path="/services"
								/>
								<CardItem 
								src="images/img-2.jpg"
								text="Travel through the island of Greece"
								label="Luxury"
								path="/services"
								/>
							</ul>
							<ul className="cards__items">
								<CardItem 
								src="images/img-3.jpg"
								text="Set Sail of the Atlantic"
								label="Adventure"
								path="/services"
								/>
								<CardItem 
								src="images/img-4.jpg"
								text="Experience football on to of the Himalaia"
								label="Sport Adventure"
								path="/services"
								/>
								<CardItem 
								src="images/img-8.jpg"
								text="Ride a camel on Sahara desert"
								label="Adventure"
								path="/services"
								/>
							</ul>
						</div>
					</div>
        </div>
    )
}

export default Cards
