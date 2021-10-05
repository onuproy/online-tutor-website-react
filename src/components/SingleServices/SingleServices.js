import React from 'react';
import './SingleServices.css';

const SingleServices = (props) => {
    const {img, name, sub, email, price} = props.tutor;

    return (
        
       <div className="col-lg-3 col-md-4">
            <div className="simgle-item">
                 <div className="single-image">
                    <img src={img} alt="Profile" />
                 </div>
                 <div className="single-content">
                     <h1> Name: {name}</h1>
                     <h3>Subject: {sub}</h3>
                     <h3>Email: {email}</h3>
                     <h3>Course Fee: ${price}</h3>
                     <button> See more </button>
                 </div>
            </div>
       </div>
      
    );
};

export default SingleServices;