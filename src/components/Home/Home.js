import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import bgLearning from '../../images/bg-learning.jpg'
import focusIcon from '../../images/icons/focus.png'
import videoIcon from '../../images/icons/video.png'
import learnIcon from '../../images/icons/head.png'
import growthIcon from '../../images/icons/growth.png'
import learninBG from '../../images/learning.png'
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data.courses));
    },[])
    return (
        <div>
            <Container>
                <div className="home-container">
                    <div className="d-flex flex-column flex-column-reverse flex-md-row justify-content-center align-items-center py-3">
                        <div className='w-100 text-center text-md-start'>
                            <h2 className="title">Learn English today. <br className="d-none d-md-block" />Build a better career in the future!!</h2>
                            <p className="py-3 body-text">Learning a skill such as a new language can take a long time. If you feel like your progress is slow, bear in mind these wise words from Confucius. The important thing is to keep going and you will get there in the end.</p>
                            <Button variant="primary">Get Started</Button>
                        </div>
                        <div className='w-100'>
                            <img src={bgLearning} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
                {/* What we are offering you */}
                <div className="offer-container py-4">
                    <h2 className="title">What we are offering you</h2>
                    <p className="py-2">We will provide you with a good learning experience <br className="d-none d-md-block" /> with our skilled teachers. And a lot of <span className="highlight-text">Support</span> and <span className="highlight-text">Mentoring</span> from our side.</p>
                    <div className="our-top-courses py-4">
                        <div className="row g-4">
                            {
                                courses.slice(0,4).map(course => <Course key={course.id} course={course} />)
                            }
                        </div>
                    </div>
                </div>
            </Container>
            {/* why choose us */}
            <div className="choose-us-container py-4">
                 <Container>
                    <h2 className="title pb-3">Why Choose Us?</h2>
                    <div className="row g-4 py-3">
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img src={focusIcon} className="choose-us-icon" alt="" />
                                </div>
                                <div className="text-start ms-3">
                                    <h4>Stay Motivated</h4>
                                    <p>In a world where everyone else is learning, if you don’t take your learning seriously you will fall behind.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img src={videoIcon} className="choose-us-icon" alt="" />
                                </div>
                                <div className="text-start ms-3">
                                    <h4>Free Video Content</h4>
                                    <p>We will provide you some free video content. That video content helps you to understand our course quality. It helps you to enroll in any course.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img src={learnIcon} className="choose-us-icon" alt="" />
                                </div>
                                <div className="text-start ms-3">
                                    <h4>Learn While playing</h4>
                                    <p>Enjoy living in the moment but remember that learning English will prepare you for the future.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img src={growthIcon} className="choose-us-icon" alt="" />
                                </div>
                                <div className="text-start ms-3">
                                    <h4>Improve Quickly</h4>
                                    <p>Learning any language is hard work so prepare well, put in the hours and you will achieve your goals.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                 </Container>
            </div>
            {/* best way learning */}
            <div className="best-way-learning py-4 text-start mx-md-5 shadow">
                <Container>
                    <div className="d-flex flex-column flex-column-reverse flex-md-row justify-content-center align-items-center">
                        <div className="w-100">
                            <h2 className="title">The Best New Way To Learn a Language.</h2>
                            <p>Making mistakes is a natural part of the language learning process. The key is to learn from these mistakes. Don’t be afraid to try out new things in English but always remember to reflect on them and decide what was successful and what you need to keep working on.</p>
                        </div>
                        <div className="w-75">
                            <img src={learninBG} className="w-100" alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;