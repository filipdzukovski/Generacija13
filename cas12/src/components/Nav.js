import React from 'react';
import {Link} from 'react-router-dom';

export function Nav(){

    return(
        <ul id="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/comments">Comments</Link></li>
        </ul>
    )
}
