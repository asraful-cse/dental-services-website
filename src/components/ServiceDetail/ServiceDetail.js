import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const ExactIteam = data.filter(td => td._id === id);
    return (
        <div className="card mb-3 container" style={{ maxWidth: '100%', marginTop:'50px' , textAlign:"center" }}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={ExactIteam[0]?.imageURL} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-9 ">
                    <div className="card-body">
                        <h5 className="card-title text-warning text-uppercase fw-bold">{ExactIteam[0]?.name} </h5>
                        <p className="card-text">{ExactIteam[0]?.description}</p> 
                        <strong className="card-text"><small className="text-muted">{ExactIteam[0]?.details}</small></strong>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;