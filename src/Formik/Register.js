import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

let validationSchema = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email('the email address is not invalid').required(),
    gender:yup.string().required(),
    country:yup.string().required()
})

export default function Register() {
    return (
        <>
        <Formik
        initialValues={{
            name:"",
            email:"",
            isMarried: false,
            gender:"",
            country:"",
        }}

        validationSchema={validationSchema}
        onSubmit={(data)=>{
            console.log(data)
        }}
        >
        {({values, errors, touched})=>(
            <Form>
                <div className='form-group'>
                <Field 
                name="name" 
                type="input" 
                placeholder="Name"
                className="form-control"
                />
                {touched.name && errors.name ? (
                    <small className='text-danger'>{errors.name}</small>
                ): null}
                
                </div>
                <div className='form-group'>
                <Field 
                name="email" 
                type="input" 
                placeholder="Email"
                className="form-control"
                />
                {touched.email && errors.email ? (
                    <small className='text-danger'>{errors.email}</small>
                ): null}
                </div>
                <div className='form-group'>
                <Field name="country" as="select" className="form-control">
                    <option value=''>Select your country</option>
                    <option value='india'>India</option>
                    <option value='England'>England</option>
                    <option value='austalia'>Austalia</option>
                    <option value='afrika'>Afrika</option>
                </Field>
                {touched.country && errors.country ? (
                    <small className='text-danger'>{errors.country}</small>
                ): null}
                </div>

                <div className='form-check'>
                <Field name="isMarried" type="checkbox" className="form-check-inpu"/>
                <label>Married</label>
                </div>

                <label>Gender</label>
                <div className='form-check'>
                <Field name="gender" type="radio" value="Male"/>
                <label>Male</label>
                </div>
                <div className='form-check'>
                <Field name="gender" type="radio" value="Female"/>
                <label>Female</label>
                </div>
                <div className='form-check'>
                <Field name="gender" type="radio" value="Other"/>
                <label>Other</label>
                {touched.gender && errors.gender ? (
                    <small className='text-danger'>{errors.gender}</small>
                ): null}
                </div>

                <div className='form-group'>
                <button type='submit' className='btn btn-primary float-right'>Submit</button>
                </div>
                
                <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
        )}
        </Formik>   
        </>
    )
}
