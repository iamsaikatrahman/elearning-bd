import React from 'react';
import { Container } from 'react-bootstrap';
import landingPageLogo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src={landingPageLogo} className="w-100 p-3" alt="" />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 text-center text-md-start">
                        <h4>Contacts</h4>
                        <p>6069 Railroad St</p>
                        <p>elearning@gmail.com</p>
                        <p>(150)-435-3146</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 text-center text-md-start">
                        <h4>Popular Courses</h4>
                        <p>Business English</p>
                        <p>English Grammar For IELTS</p>
                        <p>Speaking English</p>
                    </div>
                    <div className="col-12 col-lg-3 text-center text-md-start mt-3">
                        <h4>Keep With Us</h4>
                        <input type="text" className="footer-input-box" />
                        <br />
					    <button className="btn btn-primary text-center my-3 mb-md-0">Sign Up Now</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;