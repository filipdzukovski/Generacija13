import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

    return (
        <ul>
            <li>
                <Link to="/" >Home </Link>
            </li>
            <li>
                <Link to="/about" >About </Link>
            </li>
            <li>
                <Link to="/about/contact" >Contact </Link>
            </li>
            <li>
                <Link to="/info" >Info </Link>
            </li>
            <li>
                <Link to="/users"> Users </Link>
            </li>
            <li>
                <Link to="/user-list"> User List </Link>
            </li>
        </ul>
    )
}