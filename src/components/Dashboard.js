import React from 'react';
import eleviaLogo from "./Assets/eleviaLogo.png";
import { useHistory } from 'react-router-dom';


export default function Dashboard() {
    const history = useHistory();

    const submitHandler =()=>{
        const requestOptions ={
            method: 'POST',
            headers:{'Content-Type':'application/JSON'},
            body: JSON.stringify({
                "dbi":"1kmmEa7nGz__a2bZ__a2fBlcGUCMJa4BXB__a2fYH5auQfZz__a2fQa7v616wwDZEwQuyeTX__a2bIBltvtOl9yizwCUVAbwnXUuPCfmyQ__a3d__a3d",
                "username":"Lfbxg1ffszI9XrfSdoC__a2bzw__a3d__a3d",
                "start":0,
                "limit":50,
                "empId":"00001",
                "startDate":"",
                "isPreparer":"null",
                "isScheduler":false,
            }),
        };
        fetch('https://demo3.eleviasoftware.com/FieldServices.BL.trigent/Fwa/GetList', requestOptions)
        .then((response)=>response.JSON)
        .then((data)=>{
            console.log(data);
            
                history.push('/greet')
            
        })
    }
    return (
        <div>
            <h2>Welcome to Elevia</h2>
            <img src={eleviaLogo} alt=""/>
            <div className='cntainer m-5'>
                <div className='row'>
                    <div className='col md-5'>
                        <button 
                        className='btn btn-primary'
                        onClick={submitHandler}><h3>Field Work Assignments</h3></button>
                    </div>
                    <div className='col-md-5'>
                        <button 
                        className='btn btn-primary'
                        ><h3>Timesheets</h3></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
