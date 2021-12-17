import React from 'react';
import {useState} from "react";
import {useHistory} from "react-router-dom";

function Form() {
  const history = useHistory();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const submit =()=>{
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              dbi: "1kmmEa7nGz__a2bZ__a2fBlcGUCMJa4BXB__a2fYH5auQfZz__a2fQa7v616wwDZEwQuyeTX__a2bIBltvtOl9yizwCUVAbwnXUuPCfmyQ__a3d__a3d",
              username: username,
              passwordHash: password,
              domain: "_none_",
              integrated: "N",
            }),
          };
          fetch(
            "https://demo3.eleviasoftware.com/FieldServices.BL.trigent/User/Login",
            requestOptions
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if(data.success===true){
                history.push("/dashboard")
            } else {
              alert("wrongPassword")
            }
            });
    }
    return (
        
        
                    <div className='card'>
                        <div className='card-header'>
                            <h3 className='text-center'>FSS User Login</h3>
                        </div>
                        <div className='card-body'>
                            <label>Username:</label>
                            <input
                            type="text"
                            className='form-control'
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                            <label>Password:</label>
                            <input
                            type="password"
                            className='form-control'
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                            <label>Domain:</label>
                            <input
                            type="text"
                            className="form-control"
                            />
                            <label>Windows Authentication:</label>
                            <input
                            type="checkbox"
                            className='form-check'
                            />
                            <br/>
                            <button onClick={submit} className='btn btn-info'>Submit</button>
                        </div>
                    </div>
                 
        
    )
}

export default Form
