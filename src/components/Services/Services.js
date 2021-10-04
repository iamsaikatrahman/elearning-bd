import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import PageHeader from '../PageHeader/PageHeader';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data.courses));
    },[])
    return (
        <div>
            <PageHeader title={"Our Services"} />
            <div className="services-container py-5">
                <Container>
                    <h2 className="title">Explore Our Courses</h2>
                    <div className="row g-4 py-5">
                            {
                                courses.map(course => <Course key={course.id} course={course} />)
                            }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Services;