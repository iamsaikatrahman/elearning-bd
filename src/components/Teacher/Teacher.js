import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const {name,image, designation, phone, address} = props.teacher;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow teacher-card">
                <img src={image} className="card-img-top teacher-image" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{designation}</p>
                    <p className="card-text"><i className="bi bi-phone-fill"></i> {phone}</p>
                    <p className="card-text"><i className="bi bi-geo-alt-fill"></i> {address}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center">
                        <i className="bi bi-facebook social-icon me-3"></i> 
                        <i className="bi bi-twitter social-icon me-3"></i> 
                        <i className="bi bi-instagram social-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;