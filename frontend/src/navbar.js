import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link"  href="/"><strong>Login</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="/home"><strong>Home</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/student" ><strong>Student</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rent" ><strong>Rent</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/food" ><strong>Food</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bills" ><strong>Bills</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/homeaccessary" ><strong>Home accessary</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/others" ><strong>Others Expenses</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/total" ><strong>Total Expenses</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get" ><strong>Savings</strong></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/fetch" ><strong>Expenses</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
