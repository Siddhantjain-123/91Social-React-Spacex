import React from 'react';
import space from '../navbar/space.png';

const Navbar = () => {
    return(
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
    );
}
export default Navbar;