import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './app.css'

function Food(){

    const  [Food,setfood ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/food1/')
        .then(res => setfood(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async (id) => {
        try
        {
            await axios.delete('http://localhost:8081/food1/Food/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div> <Navbar/>
        <div className='d-flex vh-200 container bg-imageF justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
            <h2>Expenses on Food</h2>
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
                            Food.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Item}</td>
                                    <td>{data.Amount}</td>
                                    <td>{data.Date}</td>
                                    <td>{data.User_id}</td>
                                    <td>
                                        <Link to={`/food/update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to="/food/create" className='btn btn-success '>INSERT</Link>
            </div>
        </div>
        </div>
    )
}

export default Food