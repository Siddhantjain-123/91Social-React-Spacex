import React from 'react';
import './Dashboard.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import space from '../dashboard/space.png';
const Dashboard = () =>{
    return(
      <div>
        <div className="background">
            <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a href="#" className="navbar-brand">
            <img src={space} height="28" alt="" />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="/missions" className="nav-item nav-link active">
                Missions
              </a>
              <a href="/rockets" className="nav-item nav-link">
                Rockets
              </a>
              <a href="/launches" className="nav-item nav-link">
                Launch  
              </a>
              <a href="https://www.spacex.com/mission/" className="nav-item nav-link " tabindex="-1">
                Info
              </a>
            </div>
            <div className="navbar-nav mr-auto justify-content-between">
              <a href="/login" className="nav-item nav-link">
                Logout
              </a>
            </div>
          </div>
        </nav>
          <h1 className="animate"> human spaceflight </h1>
        </div>
    </div>
     <div className="second-page">
      <h1 className="animate-two">Missions</h1>
 </div>
 </div>
    );
}

export default Dashboard;