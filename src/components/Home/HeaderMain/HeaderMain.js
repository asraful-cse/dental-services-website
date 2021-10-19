import React from 'react';
import { Link } from 'react-router-dom';
import clinicBanner1 from '../../../images/1.jpg';
import clinicBanner2 from '../../../images/2.jpg';
import clinicBanner3 from '../../../images/3.jpg';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner"  >
                <div class="carousel-item active">
                    <img src={clinicBanner1} class="d-block w-100 opacity" alt="..." />
                    <div class="carousel-caption d-none d-md-block banner_blur" >
                        <h1 style={{color:'rgb(78 29 54 / 95%)'}} className="fw-bold">The Modern Dentistry <br /> You've Been Missing </h1>
                        <br />
                        <p style={{color:'rgb(78 29 54 / 100%)'}}>Our doctors are committed to helping you look , feel and smile your best.</p><br />

                        <button className="btn btn bg-success">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">ABOUT US </Link>
                        </button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={clinicBanner2} class="d-block w-100 opacity" alt="..." />
                    <div class="carousel-caption d-none d-md-block  banner_blur">
                        <h1 className="fw-bold" >We Offer Full-Scale <br /> Services You Need!</h1>
                        <br />
                        <p>If you are looking for a great place to smile look no further than Dental Clinic!</p><br />
                        <button className="btn btn bg-success">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/contacts">CONTACTS</Link>
                        </button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={clinicBanner3} class="d-block w-100 opacity" alt="..." />
                    <div class="carousel-caption d-none d-md-block banner_blur " >
                        <h1 style={{color:'rgb(155 78 175)'}} className="fw-bold">Complete Oral Health <br /> Starts Here and Now!</h1>
                        <br />
                        <p style={{color:'rgb(155 78 175)'}}>If you have any worries , concerns , or questions about visiting a dentist , please give us a call!</p><br />
                        <button className="btn btn bg-success">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/login">SIGN UP</Link>
                        </button>
                    </div>
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden text-success" >Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;