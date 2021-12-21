import React from 'react';
import { useState } from 'react';
import {Link, useRouteMatch,} from "react-router-dom";
import {useHistory, Prompt} from "react-router-dom";

export default function Projects() {
    const [projectId, setProjectId] = useState("")
    let match = useRouteMatch();
    let history = useHistory();
    const redirect =(e)=>{
        e.preventDefault();
        
        history.push(`${match.url}/${projectId}`);
    };
    return (
        <div>
            <h2>My projects</h2>
            <nav className='navbar navbar-expand-lg'>
                <Prompt 
                when={projectId.length>0}
                message="Are you want to leave this page?"
                />
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <Link to={`${match.url}/chat-application`} title='chat app' className='nav-link text-primary rounded'>
                            Chat App
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={`${match.url}/ecommerce-application`} title='chat app' className='nav-link text-info rounded'>
                            ECommerce App
                        </Link>
                    </li>
                </ul>
            </nav>
            <form onSubmit={redirect}>
               <input type='text' value={projectId} onChange={(e)=>setProjectId(e.target.value)}/>
               <button type='submit'>Submit</button> 
            </form>
        </div>
    )
}
