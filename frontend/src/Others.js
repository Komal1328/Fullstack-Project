import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './app.css'

function Others(){

    const  [Others,setothers ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/others1/')
        .then(res => setothers(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async (id) => {
        try
        {
            await axios.delete('http://localhost:8081/others1/Others/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div> <Navbar/>
        <div className='d-flex vh-200 container bg-imageO justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
                <h2>Others Expenses</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>User_ID</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Others.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Item}</td>
                                    <td>{data.Amount}</td>
                                    <td>{data.Date}</td>
                                    <td>{data.User_id}</td>
                                    <td>
                                        <Link to={`/others/update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to="/others/create" className='btn btn-success'>INSERT</Link>
            </div>
        </div>
        </div>
    )
}

export default Others