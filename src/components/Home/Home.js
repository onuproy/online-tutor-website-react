import React from 'react';
import Banner from '../Banner/Banner';
import SecurePayment from '../SecurePayment/SecurePayment';
import HomeServices from '../Services/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <SecurePayment></SecurePayment>
        </div>
    );
};

export default Home;