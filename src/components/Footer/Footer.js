import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer class="footer-area">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="footer_content text-center"> 
							<p> ©2021 All Rights Reserved <a href="#">Coder It solution</a></p>
						</div>
					</div>
					<div class="col-xl-12"> 
						<div class="footer_social"> 
							<ul>
								<li><a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
								<li><a href="#0"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
								<li><a href="#0"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
    );
};

export default Footer;