import React from 'react';
import './SecurePayment.css'

const SecurePayment = () => {
    return (
        <section className="SecurePayment-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="payment-content">
                            <h3>Secure Payment</h3>
                            <p>We use industry standard payment systems to facilitate online payments. We never store your payment/card information.</p>
                            <h3>Money Back Gaurantee</h3>
                            <p>We are offering a full or partial refund within 7 business days starting from the moment when the member makes.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="payment-image">
                            <img src="https://onuproy.com/assets/payment1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurePayment;