import React from 'react';
import aboutImage from '../../../images/aboutImage.jpg';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical, faDiagnoses, faStreetView } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    const props = useSpring({ number: 15, from: { number: 0 } });
    const propsTwo = useSpring({ number: 20, from: { number: 0 } });
    const propsThree = useSpring({ number: 10, from: { number: 0 } });

    return (
        <section className="my-3 container">
            <div className="row">
                <div className="col-md-5 mb-3">
                    <img className="img-fluid" src={aboutImage} alt="" />
                </div>
                <div className="col-md-6 mb-2">
                    <h2 className="fw-bold text-warning">ABOUT SERVICES </h2>
                    <h3 className="fw-bolder w-50">We use advanced proven technology to keep your smile looking the best!</h3>
                    <p style={{color:'gray'}}>We are passionate about smiles and having the latest technology is one step we can take to help save yours!</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="overflow-hidden w-25">
                            <h6>Clinic</h6>
                            <FontAwesomeIcon icon={faClinicMedical} style={{ fontSize: '4em',color:'red' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{props.number}</animated.span>
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Dentists</h6>
                            <FontAwesomeIcon icon={faDiagnoses} style={{ fontSize: '4em',color:'red' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{propsTwo.number}</animated.span>
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Services</h6>
                            <FontAwesomeIcon icon={faStreetView} style={{ fontSize: '4em',color:'red' }}></FontAwesomeIcon>
                            <br />
                            <animated.span style={{ fontSize: '4em' }}>{propsThree.number}</animated.span>
                        </div>  
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;