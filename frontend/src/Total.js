import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './app.css'

function Total(){

    const  [Total,setTotal ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/total1/')
        .then(res => setTotal(res.data))
        .catch(err => console.log(err));
    },[])

    // const handleDelete = async (id) => {
    //     try
    //     {
    //         await axios.delete('http://localhost:8081/rent1/Rent/'+id)
    //         window.location.reload()
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    return(
        <div> <Navbar/>
        <div className='d-flex vh-100 bg-imageO justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
            <h2>Total Expenses</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>User_ID</th>
                            <th>User_name</th>
                            <th>Amount_Spent</th>
                            {/* <th>Operation</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Total.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Amount}</td>
                                    {/* <td>
                                        <Link to={`/rent/update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                                    </td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* <Link to="/total/get" className='btn btn-success'>get</Link>  */}
            </div>
        </div>
        </div>
    )
}

export default Total