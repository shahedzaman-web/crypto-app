import React from 'react';
import {Link} from "react-router-dom";

import {logo} from "../assets/index"
const AppNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img width="100" height="40" src={logo} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-5 d-flex justify-content-center align-items-center">
              <Link className="nav-a btn active text-white" aria-current="page" to="/">Home</Link>
              <Link className="nav-a btn text-white" to="/">About</Link>
              <Link className="nav-a btn text-white" to="/">Service</Link>
              <Link className="nav-a btn text-white" to="/">Crypto Calculator</Link>
              <Link className="nav-a btn text-white" to="/">Token Sale</Link>
              <Link className="nav-a btn text-white" to="/">Road Map</Link>
              <Link className="nav-a btn text-white" to="/">Team </Link>
              <Link className="nav-a btn text-white" to="/">Pages </Link>
              <Link className="nav-a btn text-white" to="/">Blog </Link>
              <Link className="nav-a  btn-pink" to="/">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default AppNavbar;