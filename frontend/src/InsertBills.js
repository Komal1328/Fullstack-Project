import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function InsertBills() {
    const [Type,setType] = useState('')
    const [Amount,setAmt] = useState('')
    const [Date,setDate] = useState('')
    const [User_id,setUser_id] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/bills1/bills/create',{Type,Amount,Date,User_id})
        .then(res => {
            console.log(res);
            navigate('/bills/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-imageB justify-content-center align-item-center'>
        <form onSubmit={handleSubmit}>
            <h2>Insert Expenses on Bills</h2>
            <div className='mb-2'>
                <label htmlFor=''><strong>Type</strong></label>
                <input type='text' className='form-control' onChange={e => setType(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Amount</strong></label>
                <input type='text' className='form-control' onChange={e => setAmt(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Date</strong></label>
                <input type='text' className='form-control' onChange={e => setDate(e.target.value)} placeholder='yyyy-mm-dd' required />
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>User_ID</strong></label>
                <input type='text' className='form-control' onChange={e => setUser_id(e.target.value)} required/>
            </div>
            <button className='btn btn-success'>Insert</button>
        </form>
    </div>
  )
}

export default InsertBills