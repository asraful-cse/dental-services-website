import { faCar, faCommentDots, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterQuickLinks = () => {
    return (
        
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/about" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>ABOUT US</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faCar} /> <span>CONTACT</span>
                    </Link>
                </li>
                <li>
                    <Link to="/login" style={{textDecoration:'none'}} className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>LOGIN</span>
                    </Link>
                </li>
            </ul>
        
    );
};

export default FooterQuickLinks;