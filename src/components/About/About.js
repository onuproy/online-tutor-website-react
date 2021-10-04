import React from 'react';
import './About.css'

const About = () => {
    return (
       <div className="about-area">
           <div className="container">
               <div className="row">
                   <div className="col-12">
                        <div className="title">
                            <h2>About</h2>
                        </div>
                   </div>
               </div>
               <div className="row about-content-image">
                   <div className="col-md-6">
                       <div className="about-content">
                          <h4> Coder IT Solution</h4>
                          <p>Coder IT Solution is a professional Web, E-Commerce, and software development company, providing Web Courses and an extent of affordable custom website design, E-Commerce, in fact, all kind of website design services to clients all over the world.</p>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <div className="about-image">
                           <img src="https://coderitsolution.com/wp-content/themes/CoderIT/assets/images/getSubscribe-img.png" alt="About iamge" />
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default About;