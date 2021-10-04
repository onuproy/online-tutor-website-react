import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';
import './Services.css'

const Services = () => {
    const [tutors, setTutor] = useState([]);
    useEffect(() => {
        fetch('/tutor.JSON')
        .then(res => res.json())
        .then(data => setTutor(data))
    },[]);

    return (
        <div className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                    </div>
                    {
                        tutors.map(tutor => <SingleServices
                            key={tutor.id}
                            tutor={tutor}
                        ></SingleServices>)
                    }
                </div>
            </div>
        </div>
       
    );
};

export default Services;