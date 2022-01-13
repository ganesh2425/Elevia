import React from 'react';
import emailjs from "emailjs-com";

export default function Mailer() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            "service_whw81fb",
            "template_9i7uavb",
            e.target,
            "user_8HzEvYXCmoHUfa6ZU6kJV"
            ).then(res =>{
                console.log(res)
            }).catch(err=>{
                console.log(err);
            })
    }
    return (
        <>
        <div className="container-border"
        style={{marginTop:"50px",
        width:"50%",
        backgroundImage:`url("https://jooinn.com/images/abstract-background-284.jpg")`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        }}
        >
            <h1 className='text-center mt-4'>Contact Form</h1>
            <form 
            className='row' 
            style={{margin:"25px 85px 75px 100px"}} 
            onSubmit={sendEmail}>
                <label>Name</label>
                <input type="name" name="name" className='form-control'/>

                <label>Email</label>
                <input type="email" name="user_email" className='form-control'/>

                <label>Message</label>
                <textarea name="message" rows="4" className='form-control'/>

                <button className="btn btn-primary form-control mt-5">Submit</button>
            </form>
        </div>
        </>
    )
}
