import React from 'react';
import {useState} from "react"; 
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedin, setIsLoggedIn] = useState(localStorage.getItem("loggedin"))
    const login =(e)=>{
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            localStorage.setItem("loggedin",1);
            setIsLoggedIn(1);
        } else{
            alert("wrong username/password");
        }
    }
    return (
        <div>
            <h1 className='mt-5 ml-5'>Login:</h1>
            <form onSubmit={login}>
            <input
            type="text"
            placeholder="Username"
            className='form-control-lg m-4 border'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder="Password"
            className='form-control-lg m-4 border'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br/>
            <button type='submit' className="btn btn-primary ml-5">Login</button>
            {isLoggedin !== null && <Redirect to="/dashboard"/>}
            </form>
        </div>
    )
}