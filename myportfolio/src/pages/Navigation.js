import {  Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Navigation = () => {
    return (
        <>
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active">

                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">

                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">

                <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">

                <Link to="/contact" className="nav-link" >Contact</Link>
            </li>
      
            </ul>
        </div>
        </nav>
        </>
        );
};
  
export default Navigation;