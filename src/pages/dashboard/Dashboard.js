import React from 'react';
import './Dashboard.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import Navbar from '../../components/navbar/Navbar';
const Dashboard = () => {
  return (
    <div>
      <div className="background">
        <div>
          <Navbar/>
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