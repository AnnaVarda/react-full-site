import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
          <div className="navbar-container">
						<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
							AV <i className="fab fa-typo3" />	
						</Link>
						<div className="menu-icon" onClick={handleClick}>
							<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
						</div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className='nav-item'>
								<Link to="/" className='nav-links' onClick={closeMobileMenu}>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to="/about" className='nav-links' onClick={closeMobileMenu}>
									About
								</Link>
							</li>
							<li className='nav-item'>
								<Link to="/dance" className='nav-links' onClick={closeMobileMenu}>
									Dance
								</Link>
							</li>
							<li className='nav-item'>
								<Link to="/fitness" className='nav-links' onClick={closeMobileMenu}>
								Fitness
								</Link>
							</li>
							<li className='nav-item'>
								<Link to="/articles" className='nav-links' onClick={closeMobileMenu}>
								Articles
								</Link>
							</li>
							<li className='nav-item'>
								<Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
								Contact
								</Link>
							</li>
						</ul>
				
				

					</div>
        </nav>   
        </>
    );
}

export default Navbar;
