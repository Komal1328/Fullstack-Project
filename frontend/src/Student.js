import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './app.css'

function Student(){

    const  [Student,setStudent ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/student1/')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err));
    },[])

    // const handleDelete = async (id) => {
    //     try
    //     {
    //         await axios.delete('http://localhost:8081/student1/Student/'+id)
    //         window.location.reload()
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    return(
        <div><Navbar/>
        <div className='d-flex vh-100 bg-imageS justify-content-center align-items-center'>
            <div className='w-90 bg-white rounded p-3'>
                <h2>Student Details</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>User_ID</th>
                            <th>Name</th>
                            <th>Income Source</th>
                            <th>Amount at start</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Student.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Income}</td>
                                    <td>{data.startAmount}</td>
                                    <td>
                                        <Link to={`/student/update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        {/* <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* <Link to="/student/create" className='btn btn-success'>INSERT</Link> */}
            </div>
        </div>
        </div>
    )
}

export default Student