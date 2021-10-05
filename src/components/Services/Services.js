import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import PackageCard from '../PackageCard/PackageCard';
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
                    <p className="pb-3" style={{fontWeight:'500'}}>There are most popular courses.</p>
                    <div className="row g-4 py-5">
                            {
                                courses.map(course => <Course key={course.id} course={course} />)
                            }
                    </div>
                </Container>
            </div>
            <div className="our-package-container py-5">
                <Container>
                    <h2 className="title">Choose Our Package</h2>
                    <p className="pb-3" style={{fontWeight:'500'}}>Select the package of your choice. <br className="d-none d-md-block" /> This helps us to give you better service.</p>
                    <div className="row g-4">
                        <PackageCard packageName={"STANDARD"} packagePrice={"49"} packageDuration={"FOR SIX MONTHS"} />
                        <PackageCard packageName={"PREMIUM"} packagePrice={"99"} packageDuration={"FOR ONE YEAR"} />
                        <PackageCard packageName={"FREE"} packagePrice={"0"} packageDuration={"FOR LIFE TIME"} />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Services;