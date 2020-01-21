import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item';

const MenuItem = (props) => (
    <div className={`${props.size} menu-item`} onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
    <div className="background-image" style={{ backgroundImage: `url(${props.imageUrl})`}} /> 
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="sub-title">{props.subtitle}</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
