import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateBills() {
    const {id} = useParams();
    const [Type,setType]=useState('');
    const [Amount,setAmount]=useState('');
    const [Date,setDate]=useState('');
    const [User_id,setUser_id]=useState('');
    
    useEffect(()=>{
        axios.get('http://localhost:8081/bills1/edit/'+id)
        .then(res => {
            setType(res.data[0].Type);
            setAmount(res.data[0].Amount);
            setDate(res.data[0].Date);
            setUser_id(res.data[0].User_id);
        })
        .catch(err => console.log(err));
    },[id])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/bills1/update/'+id,{Type,Amount,Date,User_id})
        .then(res => {
            if(res.data.updated){
                console.log(res)
                navigate('/bills/')
            }else{
                console.log(res)
                alert("No User id matches");
            }
        })
    }

  return (
    <div className='d-flex vh-100 bg-imageB justify-content-center align-item-center'>
        <form onSubmit={handleSubmit}>
            <h2>Update Bill Details</h2>
            <div className='mb-2'>
                <label htmlFor=''><strong>Type</strong></label>
                <input type='text' className='form-control' value={Type} onChange={e => setType(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Amount</strong></label>
                <input type='text' className='form-control' value={Amount} onChange={e => setAmount(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Date</strong></label>
                <input type='text' className='form-control' value={Date} onChange={e => setDate(e.target.value)} placeholder='yyyy-mm-dd'required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>User_ID</strong></label>
                <input type='text' className='form-control' value={User_id} onChange={e => setUser_id(e.target.value)} required/>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default UpdateBills