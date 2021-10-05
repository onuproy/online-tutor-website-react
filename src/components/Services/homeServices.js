import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';

const HomeServices = () => {
    const [tutors, setTutor] = useState([]);
    const singleServices2 = tutors.slice(0,4);
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
                    <div className="title">
                            <h2>Our Tutors</h2>
                        </div>
                    </div>
                    {
                        singleServices2.map(tutor => <SingleServices
                            key={tutor.id}
                            tutor={tutor}
                        ></SingleServices>)
                    }
                </div>
            </div>
        </div>
       
    );
};

export default HomeServices;