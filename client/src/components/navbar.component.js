import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){ 
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">LifeSports</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Post New Workout</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="navbar-item">
          <Link to="/home" className="nav-link">Home</Link>
          </li>
        </ul>
        </div>
      </nav>
      </div>
    );  
}
export default Navbar