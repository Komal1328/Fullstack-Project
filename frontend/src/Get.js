import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import './app.css'

function Get(){

    const  [Get,setGet ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/total1/get/')
        .then(res => setGet(res.data))
        .catch(err => console.log(err));
    },[])

    return(
        <div> <Navbar/>
        <div className='d-flex vh-100 bg-imageL justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
            <h2>Total Expenses and Savings</h2>
                <table className='table bg-transparent' border={0} style={{ background: 'transparent' }}>
                    <thead>
                        <tr style={{ background: 'transparent' }}>
                            <th>User_ID</th>
                            <th>User_name</th>
                            <th>Total Amount</th>
                            <th>Spent Amount</th>
                            <th>Amount Saved</th>
                        </tr>
                    </thead>
                    <tbody style={{ background: 'transparent' }}>
                        {
                            Get.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.startamount}</td>
                                    <td>{data.Amount}</td>
                                    <td>{data.saveamt}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Get