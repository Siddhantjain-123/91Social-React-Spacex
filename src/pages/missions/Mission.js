import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Mission.scss';
import { getMissions } from '../../store/actions/missions';
import Navbar from '../../components/navbar/Navbar';
import { connect } from 'react-redux';


const Mission = ({
    user, missions, getMissions
}) => {

    useEffect(async () => {
        getMissions();
    }, [])

    return (
        <div>
            <Navbar />
            {missions && missions.map((mission) =>
                <div className={mission.mission_name}>
                    <div>{mission.mission_name}</div>
                    <div>{mission.manufactures}</div>
                    <div>{mission.wikipedia}</div>
                    <div>{mission.description}</div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      missions: state.missions.data
    }
  }
  
  const mapDispatchToProps = {
    getMissions
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Mission);