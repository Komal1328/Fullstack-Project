import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateRent() {
    const {id} = useParams();
    const [Name,setName]=useState('');
    const [Amount,setAmount]=useState('');
    const [Date,setDate]=useState('');
    const [User_id,setUser_id]=useState('');
    
    useEffect(()=>{
        axios.get('http://localhost:8081/rent1/edit/'+id)
        .then(res => {
            console.log(res.data);
            setName(res.data[0].Name);
            setAmount(res.data[0].Amount);
            setDate(res.data[0].Date);
            setUser_id(res.data[0].User_id);
        })
        .catch(err => console.log(err));
    },[id])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/rent1/update/'+id,{Name,Amount,Date,User_id})
        .then(res => {
            if(res.data.updated){
                console.log(res)
                navigate('/rent/')
            }else{
                console.log(res)
                alert("Not updated User_id does not exist");
            }
        })
    }

  return (
    <div className='d-flex vh-100 bg-imageR justify-content-center align-item-center'>
        <form onSubmit={handleSubmit}>
            <h2>Update Rent Details</h2>
            <div className='mb-2'>
                <label htmlFor=''><strong>Name</strong></label>
                <input type='text' className='form-control' value={Name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Amount</strong></label>
                <input type='text' className='form-control' value={Amount} onChange={e => setAmount(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Date</strong></label>
                <input type='text' className='form-control' value={Date} onChange={e => setDate(e.target.value)} placeholder='yyyy-mm-dd' required/>
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

export default UpdateRent