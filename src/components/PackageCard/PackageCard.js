import React from 'react';
import { Button } from 'react-bootstrap';
import './PackageCard.css';

const PackageCard = (props) => {
    return (
        <div className="col-12 col-lg-4 text-start">
            <div className ="card shadow package-card ">
                <p><span className="package-name">{props.packageName}</span></p>
                <p><span className="price">{props.packagePrice}</span> <span className="price-symbol">$</span> / {props.packageDuration}</p>
                <hr />
                <div className="d-flex justify-content-between">
                    <p>Review Your Question</p>
                    <p>✔</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Work with Resources</p>
                    <p>✔</p>
                </div>
                <div className={"d-flex justify-content-between " + (props.packageName === "FREE" ? "text-muted" : '') }>
                    <p>Analysis of Your Home Work</p>
                    <p>✔</p>
                </div>
                <div className={"d-flex justify-content-between " + (props.packageName === "STANDARD" ? "text-muted" : props.packageName === "FREE" ? "text-muted" : '') }>
                    <p>Analysis What you want</p>
                    <p>✔</p>
                </div>
                <div className={"d-flex justify-content-between " + (props.packageName === "STANDARD" ? "text-muted" : props.packageName === "FREE" ? "text-muted" : '') }>
                    <p>Support and Mentoring</p>
                    <p>✔</p>
                </div>
                <div className="d-grid mt-3 ">
                    <Button variant="primary" size="lg">
                        CHOOSE PACKAGE
                    </Button>                                                           
                </div>
            </div>
        </div>
    );
};

export default PackageCard;