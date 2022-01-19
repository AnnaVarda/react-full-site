import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';

function Cards(props) {
    return (
      <div className="card">	
          <div className="card__body">
						<img src={props.img} alt="" className="card__image" />		
							<h2 className="card__title">{props.title}</h2>
							<p className="card__description">{props.description}</p>
					</div>
				<Link to={props.url}>
					<button className="card__btn">Learn more</button>
				</Link>
			</div>
    );
}

export default Cards;
