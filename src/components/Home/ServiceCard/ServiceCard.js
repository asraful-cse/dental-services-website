import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { name, price, imageURL, description, _id } = props.services;
    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded serviceCard">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={imageURL} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h3 className="text-warning fw-bold">$ {price}</h3>
                        <Link to={`/service_detail/${_id}`}>
                            <button className="btn btn-success">Details Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;