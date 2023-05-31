import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <>
     <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg position-sticky-md-top navbar-light bg-dark text-warning">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse   " id="navbarSupportedContent">
        {/* Navbar brand */}
        <Link className="navbar-brand text-white mt-2 mt-lg-0 shadow-lg" to="/Home">
         RAO'S TECHNOLOGY
        </Link>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/">
             HOME
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/About">
             ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/Service">
          SERVICE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/Contact">
             CONTACT
            </Link>
          </li>


          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/Projects">
             PROJECTS 
            </Link>
          </li>




          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/Howitworks">
            HOWITWORKS

            </Link>
          </li>
          
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}


    



      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </>
  );
};

export default Navbar;
