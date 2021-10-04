import React from 'react';
import { Container } from 'react-bootstrap';
import notFoundImage from '../../images/not-found.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <Container className="notFound-container">
            <img src={notFoundImage} className="not-found-img" alt="" />
            <h3 className="title py-5" >Sorry, We cannot find <br className="d-none d-md-block" /> the page you are looking for.</h3>
        </Container>
    );
};

export default NotFound;