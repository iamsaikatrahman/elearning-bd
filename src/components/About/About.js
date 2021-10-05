import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import PageHeader from '../PageHeader/PageHeader';
import Teacher from '../Teacher/Teacher';
import './About.css'


const About = () => {
    const [ourteachers, setOurTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setOurTeachers(data.teachers));
    },[]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setStudents(data.students));
    },[]);
    return (
        <div>
           <PageHeader title={"About Us"} />
           <div className="our-teacher-container py-5">
               <Container>
                   <h2 className="title">Our Teachers</h2>
                   <p className="pb-3" style={{fontWeight:'500'}}>We have lot of expert teachers team. <br className="d-none d-md-block" /> There are few teachers of them.</p>
                    <div className="row g-4 py-5">
                        {
                            ourteachers.map(teacher => <Teacher key={teacher.id} teacher={teacher} />)
                        }
                    </div>
               </Container>
           </div>
            {/* Student FeedBack */}
            <div className="feedback-container py-5">
                <Container>
                    <h2 className="title">Testimonials</h2>
                    <p className="pb-3" style={{fontWeight:'500'}}>See what our students are saying.</p>
                    <Carousel className="testimonial-carousle">
                        {
                            students.map(student => 
                                <Carousel.Item key={student.id} className="carousle-bg">
                                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                                        <div className="w-100">
                                            <div className="student-img-full-container">
                                                <div className="first-container"></div>
                                                <img className="image-container" src={student.image} alt="" />
                                                <div className="last-container"></div>
                                            </div>
                                        </div>
                                        <div className="w-100 text-center text-md-start px-3">
                                            <p style={{fontWeight:'500'}}>{student.feedback}</p>
                                            <h5 style={{fontWeight: '700'}}>{student.name}</h5>
                                            <Rating
                                                initialRating={student.rating}
                                                readonly
                                                emptySymbol={<i className="bi bi-star rating-icon"></i>}
                                                fullSymbol={<i className="bi bi-star-fill rating-icon"></i>}
                                            />
                                        </div>
                                    </div>
                                </Carousel.Item>)
                        }
                    </Carousel>
                </Container>       
            </div>
        </div>
    );
};

export default About;