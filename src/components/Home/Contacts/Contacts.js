import React from 'react';
import './Contacts.css'
const Contacts = () => {
    return (
        <section className="contact  py-5">
            <div className="container">
                <div className="section-header text-center text-dark mb-5">
                    <h4 className="text-warning">Contact</h4>
                    <h1>Leave Your Message</h1>
                </div>
                <div className="col-md-9 mx-auto ">
                    <form action="">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control bg-light text-dark" placeholder="Email Address *" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control bg-light text-dark" placeholder="Subject *" />
                        </div>
                        <div className="form-group mb-3">
                            <textarea name="" className="form-control bg-light text-dark" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-lg btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;