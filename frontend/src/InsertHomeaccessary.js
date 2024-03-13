import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function InsertHomeaccessary() {
    const [Item,setItem] = useState('')
    const [Amount,setAmt] = useState('')
    const [Date,setDate] = useState('')
    const [User_id,setID] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/homeaccessary1/homeaccessary/create',{Item,Amount,Date,User_id})
        .then(res => {
            console.log(res);
            navigate('/homeaccessary/');
        }).catch(err => console.log("Error1",err));
    }

  return (
    <div className='d-flex vh-100 bg-imageH justify-content-center align-item-center'>
        <form onSubmit={handleSubmit}>
            <h2>Insert Expenses On Home accessories</h2>
            <div className='mb-2 align-item'>
                <label htmlFor=''><strong>Item</strong></label>
                <input type='text' className='form-control' onChange={e => setItem(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Amount</strong></label>
                <input type='text' className='form-control' onChange={e => setAmt(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Date</strong></label>
                <input type='text' className='form-control' id='date' onChange={e => setDate(e.target.value)} placeholder='yyyy-mm-dd' required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>User_Id</strong></label>
                <input type='text' className='form-control' onChange={e => setID(e.target.value)} required/>
            </div>
            <button className='btn btn-success'>Insert</button>
        </form>
    </div>
  )
}

export default InsertHomeaccessary