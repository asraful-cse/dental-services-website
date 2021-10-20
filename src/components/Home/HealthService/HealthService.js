import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
const HealthService = () => {
    const [healthServices, setHealthServices] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                setHealthServices(data);
            })
    }, [])
    return (
        <section id="book-ride" className="mt-5 container">
            <h2 className="text-center fw-bolder"> OUR DENTAL <span style={{ color: '#ff4d30' }}>TREATMENTS SERVICES</span></h2>
            <p style={{ fontSize: '18px', color: 'gray',textAlign:'justify' }} className="text-center">Best suitable to show your valuable services like Dental Care,
                Oral Care, Gum treatments, <br />
                Dental surgeon list, Gum care treatments, Cavity treatment,
                Dental floss, Orthodontist, sealants, Dental Procedures, Root canal
                treatments and medical service. Suits also pediatric service, veterinary
                doctors, outpatients, medical emergency, cosmetic treatment <br /> sustainability goals with many extraordinary.
            </p>
            <br /> <br />
            <div className="row">
                {
                    healthServices.map(services => <ServiceCard key={services._id} services={services}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default HealthService;