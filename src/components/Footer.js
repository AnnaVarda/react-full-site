import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from 'react-grid-system';


const Footer = () => {
	return(
		<div className="main-footer">
			<Container className="brands">
				<Row>
					<Col>
						<a className='styleBrands' href="https://www.youtube.com/channel/UCFWpcrcRiocdL57mc5WuPZQ" target="blank" rel="noreferrer">
					<FontAwesomeIcon icon={faYoutube} />
						 </a>
					</Col>
					
					<Col>
						<a className='styleBrands' href="https://www.instagram.com/anna_vardaxoglou/" target="blank" rel="noreferrer">
					<FontAwesomeIcon icon={faInstagram}/>
					</a>
					</Col>

					<Col>
						<a className='styleBrands' href="https://www.facebook.com/anna.vardaxoglou/" target="blank" rel="noreferrer">
					<FontAwesomeIcon icon={faFacebook} />
					</a>
					</Col>
				</Row>
			</Container>	
			<p className='copyright'>Copyright Anna Vardaxoglou</p>

		</div>
	)
}

export default Footer;