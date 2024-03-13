import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './app.css'

function Bills(){

    const  [Bills,setbills ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/bills1/')
        .then(res => setbills(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async (id) => {
        try
        {
            await axios.delete('http://localhost:8081/bills1/Bills/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div><Navbar/>
        <div className='d-flex vh-100 bg-imageB justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
                <h2>Expencess on Bills</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Bill_ID</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>User_ID</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Bills.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Type}</td>
                                    <td>{data.Amount}</td>
                                    <td>{data.Date}</td>
                                    <td>{data.User_id}</td>
                                    <td>
                                        <Link to={`/bills/update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to="/bills/create" className='btn btn-success'>INSERT</Link>
            </div>
        </div>
        </div>
    )
}

export default Bills