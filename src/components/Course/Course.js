import React from 'react';
import Rating from 'react-rating';
import './Course.css'

const Course = (props) => {
    // Destructuring
    const {name, price, student, rating, createdBy, thumbnail, lectures, duration, skillLevel} = props.course;

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
           <div className="card h-100 text-start shadow">
                <img src={thumbnail} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex justify-content-between pt-2">
                        <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<i className="bi bi-star rating-icon"></i>}
                        fullSymbol={<i className="bi bi-star-fill rating-icon"></i>}
                        />
                        <p className={(skillLevel === 'Beginner' ? 'skill-beginner' : skillLevel === 'Intermediate' ? 'skill-intermediate' : skillLevel === 'Advanced' ? 'skill-advanced' : 'skill-all')}>{skillLevel}</p>
                    </div>
                    <p className="highlight-text">{createdBy.map((creatorName, index) => <span key={creatorName}>{(index ? ', ' : '')+creatorName}</span>)}</p>
                    <p><i className="bi bi-clock"></i> {lectures} Lectures, {duration} hrs</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between">
                        <p>{student}+ Students</p>
                        <p>$ {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;