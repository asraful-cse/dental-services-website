import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterQuickLinks from '../FooterQuickLinks/FooterQuickLinks';

const Footer = () => {
    return (
        <footer className="bg-cyan py-3" style={{marginTop:'30px', backgroundColor:'#474c3d73'}}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 d-flex">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:'41px'}} />
                        <p className="ms-2 fw-bolder text-light">H#1209(6th floor), Road #121, USA</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Quick Links</h4>
                        <div>
                            <FooterQuickLinks></FooterQuickLinks>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <h6 className="text-light">Our goal is to provide our patients with the best possible dental care in an environment of comfort and compassion.!</h6>
                        <div className='d-flex justify-content-evenly' style={{fontSize:'2em'}}>
                            <FontAwesomeIcon icon={faFacebook}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faWhatsapp}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;