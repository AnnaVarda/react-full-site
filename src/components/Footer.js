import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
	return(
		<div className="main-footer">
			<div className="container">
				<div className="row">
					<div className="col">
						<a href="https://www.youtube.com/channel/UCFWpcrcRiocdL57mc5WuPZQ" target="blank" rel="noreferrer">
					<FontAwesomeIcon icon={faYoutube} />
						 </a>
					</div>
					
					<div className="col">
						<a href="https://www.instagram.com/anna_vardaxoglou/" target="blank" rel="noreferrer">
					<FontAwesomeIcon icon={faInstagram}/>
					</a>
					</div>

					<div className="col">
						<a href="https://www.facebook.com/anna.vardaxoglou/" target="blank" rel="noreferrer">
					<FontAwesomeIcon icon={faFacebook} />
					</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;