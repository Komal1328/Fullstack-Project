import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateBills() {
    const {id} = useParams();
    const [Name,setName]=useState('');
    const [Income,setIncome]=useState('');
    const [startAmount,setstartAmount]=useState('');

    
    useEffect(()=>{
        axios.get('http://localhost:8081/student1/edit/'+id)
        .then(res => {
            setName(res.data[0].Name);
            setIncome(res.data[0].Income);
            setstartAmount(res.data[0].startAmount);
        })
        .catch(err => console.log(err));
    },[id])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/student1/update/'+id,{Name,Income,startAmount})
        .then(res => {
            if(res.data.updated){
                console.log(res)
                navigate('/student/')
            }else{
                console.log(res)
                alert("Not updated");
            }
        })
    }

  return (
    <div className='d-flex vh-100 bg-imageS justify-content-center align-item-center'>
        <form onSubmit={handleSubmit}>
            <h2>Update Student Details</h2>
            <div className='mb-2'>
                <label htmlFor=''><strong>Name</strong></label>
                <input type='text' id='name' className='form-control' value={Name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Income source</strong></label>
                <input type='text' id='income' className='form-control' value={Income} onChange={e => setIncome(e.target.value)} required/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''><strong>Amount</strong></label>
                <input type='text' id='amt' className='form-control' value={startAmount} onChange={e => setstartAmount(e.target.value)} required/>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default UpdateBills