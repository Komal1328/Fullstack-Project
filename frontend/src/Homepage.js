import React from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


function Home() {
  return (
    <div className="container bg-imageL">
      <div style={{backgroundImage:'URL("E/sem2p/frontend/Budgeting.jpg")'}}>
        <Navbar/>
        <br/>
        <h1 style={{color:'black' }}id='h'><strong><center>Student Budgeting System</center></strong></h1>
          <p style={{fontSize:'20px'}}className='d-flex vh-70  justify-content-center align-items-center'><center><strong><br/>   Student  Budgeting System is an interesting concept as it helps <br/> to organise budget and save money.  <br/>Insted of maintaining and calculating Expenses on paper <br/> this website will help to store details of expenses.<br/>One can see where they spent money and it helps to cut down unnecessary expenses.<br/><br/>This system is for group of students living together <br/>and spending money on food, rent and other expenses.</strong></center></p>
      </div>
    </div>
  ) 
}

export default Home