import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom";
import Validation from './RegisterValidation';


function Register() {
    const [values, setValues] = useState({
        Name:'',
        Income:'',
        Gender:'',
        Pno:'',
        Email: '',
        Password: ''
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        console.log('From values',values)

        if(errors.Name ==="" && errors.Income==="" &&  errors.Gender===""  && errors.Pno==="" && errors.Email===""  && errors.Password==="" ){
        axios.post('http://localhost:8081/register',values)
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
    }
    
  return (
    <div className='d-flex vh-100 bg-imageS justify-content-center align-item-center'>
        <form action="" onSubmit={handleSubmit}>
            <h2>Student Details</h2>
            <div className='mb-2'>
                <label htmlFor=''><strong>Name</strong></label>
                <input type='text'name='Name' id='Name' className='form-control' onChange={handleInput} placeholder='Name'/>
                {errors.Name && <span className='text-danger'>{errors.Name}</span>}
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Income source</strong></label>
                <input type='text' name='Income' id='Income' className='form-control' onChange={handleInput} placeholder='Income' />
                {errors.Income && <span className='text-danger'>{errors.Income}</span>}
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Gender</strong></label>
                <input type='text' name='Gender' className='form-control' id='Gender' onChange={handleInput} placeholder='Gender'/>
                {errors.Gender && <span className='text-danger'>{errors.Gender}</span>}
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Contact Number</strong></label>
                <input type='text' name='Pno' id='Pno' className='form-control' onChange={handleInput} placeholder='9874561203' />
                {errors.Pno && <span className='text-danger'>{errors.Pno}</span>}
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Email</strong></label>
                <input type='text' name='Email' id='Email' className='form-control' onChange={handleInput} placeholder='abc@gmail.com' />
                {errors.Email && <span className="text-danger">{errors.Email}</span>}
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Password</strong></label>
                <input type='Password' name='Password' id='Password' className='form-control' onChange={handleInput} placeholder='should be 8char'/>
                {errors.Password && <span className="text-danger">{errors.Password}</span>}
            </div>
            <button type="submit" className="btn btn-success  w-100">Register</button>
                    <p></p>
            <Link to={"/"}  className="btn btn-default border w-100 bg-light">Login</Link>
        </form>
    </div>
  )
}

export default Register

// DELETE FROM total WHERE Name = "Yamuna";