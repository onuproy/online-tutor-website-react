import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contant-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-content text-center">
                            <h2>Coder IT Solution</h2>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odio sed non <br /> vitae erat consequat auctor eu in elit. Embarrassing hidden chunks as necessary</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14404.735845878376!2d88.95608419999999!3d25.498910600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1633361149306!5m2!1sen!2sbd"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-contact">
                            <div className="col-12">
                               
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter you name"/>
                            </div>
                            <div className="col-12">
                               
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter you email"/>
                            </div>
                            <div className="col-12">
                              
                                <textarea class="form-control" placeholder="Write Your Message..." id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;