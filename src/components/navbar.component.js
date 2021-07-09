import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
export default class Navbar extends Component{
    render(){
        return(
            // <Router>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">  Users</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="navbar-item">
                    <Link to="/" className="nav-link">Users</Link>
                    </li> */} 
                    <li className="navbar-item">
                    <Link to="/adduser" className="nav-link">Add</Link>
                    </li>
                </ul>
                </div>
               </nav>
            // </Router>
            
        );
    }
}