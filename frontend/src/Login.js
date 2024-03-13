import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
    const [values,setValues] = useState({
        Email:'',
        Password:''
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if(errors.Email === "" && errors.Password === ""){   
            axios.post('http://localhost:8081/login',values)
        .then(res => {
            console.log(res)
            if(res.data === "Success"){
                navigate('/home');
            }else{
                alert("No user");
            }
        }).catch(err => console.log(err));  
        }  
    }

    return(
        <div className='d-flex vh-100 bg-imageS justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
            <div>
                <h1>Welcome to <br/>Student Budgeting <br/>System</h1>
            </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email ID</strong></label>
                        <input type="text" name="Email" placeholder='abc@gmail.com' className='form-control' id="Email"  onChange={handleInput}/>
                        {errors.Email && <span className="text-danger">{errors.Email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="Password" name="Password" placeholder="Enter 8 char password" className='form-control' id="Password" onChange={handleInput}/>
                        {errors.Password && <span className="text-danger">{errors.Password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success  w-100">Login</button>
                    <p></p>
                    <Link to={"/Register"}  className="btn btn-default border w-100 bg-light">Register</Link>
                </form>
            </div>
        </div>
    )
}
export default Login