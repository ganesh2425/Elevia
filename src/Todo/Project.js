import React from 'react';
import {Link, useParams} from "react-router-dom";

export default function Project() {
    const id = useParams();
    return (
        <div>
            <h3>Myprojects::</h3>
            <nav className='navbar navbar-expand-lg'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <Link to="/" className='nav-link text-info rounded'>Home</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to="/projects" className='nav-link text-info rounded'>Projects</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to={`/projects/${id}`} className='nav-link text-info rounded'>{id}</Link>
                    </li>
                </ul>
            </nav>
            <h2>Project ID:{id}</h2>
        </div>
    )
}
