import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import './app.css'

function Fetch(){

    const  [Fetch,setFetch ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/total1/fetch/')
        .then(res => setFetch(res.data))
        .catch(err => console.log(err));
    },[])

    return(
        <div> <Navbar/>
        <div className='d-flex vh-100 bg-imageL justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
            <h2>Total Expenses</h2>
                <table className='table bg-transparent' border={0} style={{ background: 'transparent' }}>
                    <thead>
                        <tr style={{ background: 'transparent' }}>
                            <th>Expense On</th>
                            <th>Spent Amount</th>
                        </tr>
                    </thead>
                    <tbody style={{ background: 'transparent' }}>
                        {
                            Fetch.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ExpenseType}</td>
                                    <td>{data.Amount}</td>
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

export default Fetch