import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import stayConnectedBG from '../../images/stay-connected.jpg'
import leaveMessageBG from '../../images/leave-message.png'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <PageHeader title={"Contact Us"} />
            <Container>
                {/* Stay connected */}
                <div className="stay-connected-container">
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-5">
                        <div className="w-100 text-start">
                            <h3 className="title">Stay Connected</h3>
                            <p>Stay connected with us.</p>
                            <div className='d-flex align-items-center info-container'>
                                <div>
                                    <i class="bi bi-geo-alt-fill stay-connected-icon"></i>
                                </div>
                                <div className="ms-3 mt-3">
                                    <h5>Our Address</h5>
                                    <p>6069 Railroad St</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center info-container'>
                                <div>
                                <i class="bi bi-envelope-fill stay-connected-icon"></i>
                                </div>
                                <div className="ms-3 mt-3">
                                    <h5>Our Email</h5>
                                    <p>elearning@gmail.com</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center info-container'>
                                <div>
                                    <i class="bi bi-telephone-fill stay-connected-icon"></i>
                                </div>
                                <div className="ms-3 mt-3">
                                    <h5>Our Phone</h5>
                                    <p>(150)-435-3146</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-100">
                            <img src={stayConnectedBG} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
                {/* Leave a message */}
                <div className="leave-message py-5">
                    <div className="d-flex flex-column flex-column-reverse flex-md-row justify-content-center align-items-center py-5">
                        <div className="w-100">
                            <img src={leaveMessageBG} className="w-100" alt="" />
                        </div>
                        <div className="w-100 text-start">
                            <h3 className="title">Leave a Message</h3>
                            <p>Your email address will not be published.</p>
                            <input type="text" placeholder="Your Name"  className="message-input"/>
                            <br />
                            <input type="text" placeholder="Your Email Address"  className="message-input"/>
                            <br />
                            <textarea name="w3review" rows="3" cols="30" placeholder="Your Message" className="message-input"/>
                            <br />
                            <Button variant="primary">Get In Touch</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;