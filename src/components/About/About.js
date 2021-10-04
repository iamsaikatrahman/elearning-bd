import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import Teacher from '../Teacher/Teacher';


const About = () => {
    const [ourteachers, setOurTeachers] = useState([]);
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setOurTeachers(data.teachers));
    },[])
    return (
        <div>
           <PageHeader title={"About Us"} />
           <div className="our-teacher-container py-5">
               <Container>
                   <h2 className="title">Our Teachers</h2>
                    <div className="row g-4 py-5">
                        {
                            ourteachers.map(teacher => <Teacher key={teacher.id} teacher={teacher} />)
                        }
                    </div>
               </Container>
           </div>   
        </div>
    );
};

export default About;