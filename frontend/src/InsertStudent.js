import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function InsertStudent() {
    const [Name,setName] = useState('')
    const [Income,setIncome] = useState('')
    const [startAmount,setstartAmount] = useState('')

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/student1/student/create',{Name,Income,startAmount})
        .then(res => {
            console.log(res);
            navigate('/student/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-imageS justify-content-center align-item-center'>
        <form onSubmit={handleSubmit}>
            <h2>Student Details</h2>
            <div className='mb-2'>
                <label htmlFor=''><strong>Name</strong></label>
                <input type='text' className='form-control' onChange={e => setName(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Income source</strong></label>
                <input type='text' className='form-control' onChange={e => setIncome(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Amount</strong></label>
                <input type='text' className='form-control' onChange={e => setstartAmount(e.target.value)} required/>
            </div>
            <button className='btn btn-success'>Insert</button>
        </form>
    </div>
  )
}

export default InsertStudent