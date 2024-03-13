import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function InsertOthers() {
    const [Item,setItem] = useState('')
    const [Amount,setAmt] = useState('')
    const [Date,setDate] = useState('')
    const [User_ID,setID] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/others1/create',{Item,Amount,Date,User_ID})
        .then(res => {
            console.log(res);
            navigate('/others/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-imageO justify-content-center align-item-center'>
        <form onSubmit={handleSubmit}>
            <h2>Insert Expenses on Other</h2>
            <div className='mb-2'>
                <label htmlFor=''><strong>Item</strong></label>
                <input type='text' className='form-control' onChange={e => setItem(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Amount</strong></label>
                <input type='text' className='form-control' onChange={e => setAmt(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Date</strong></label>
                <input type='text' className='form-control' onChange={e => setDate(e.target.value)} placeholder='yyyy-mm-dd'required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>User_ID</strong></label>
                <input type='text' className='form-control' onChange={e => setID(e.target.value)} required/>
            </div>
            <button className='btn btn-success'>Insert</button>
        </form>
    </div>
  )
}

export default InsertOthers