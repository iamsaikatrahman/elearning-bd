import React from 'react';
import './PageHeader.css'

const PageHeader = (props) => {
    return (
        <div className="header-background">
            <h2 className="page-header-title">{props.title}</h2>
        </div>
    );
};

export default PageHeader;