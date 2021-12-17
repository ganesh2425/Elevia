import React from 'react';
import { useState } from 'react';
import {useHistory} from "react-router-dom";

export default function Login() {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit =()=>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/JSON'},
            body: JSON.stringify({
                dbi:'1kmmEa7nGz__a2bZ__a2fBlcGUCMJa4BXB__a2fYH5auQfZz__a2fQa7v616wwDZEwQuyeTX__a2bIBltvtOl9yizwCUVAbwnXUuPCfmyQ__a3d__a3d',
                username: username,
                passwordHash: password,
                domain: '_none_',
                integrated: 'N',
            }),
        };
        fetch('https://demo3.eleviasoftware.com/FieldServices.BL.trigent/User/Login', requestOptions)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            if(data.success===true){
                history.push('/dashboard')
            }else {
                alert('wrongPassword')
            }
        })
    }
    return (
        <>
        <div className='container mt-4'>
            <div className='justify-content-center'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className='text-center'>FSS User Login</h3>
                            </div>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <label for='staticUsername'>Username:</label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    name='username'
                                    onChange={(e)=> setUsername(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='staticUsername'>Password:</label>
                                    <input
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    onChange={(e)=> setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='staticDomain'>Domain:</label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    name='domain'
                                    />
                                </div>
                                <div className='form-group'>
                                    <label for='windows authentication' className='form-check-label'>Windows Authentication:
                                    <input type='checkbox' className='form-check'/>
                                    </label>
                                </div>
                                <button onClick={submit} className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

