import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Mission.scss';
import { fetchMissions } from '../../actions';
import Navbar from '../../components/navbar/Navbar';

const Mission = () => {
    const [missions, setMissions] = useState([])

    useEffect(async () => {
        const data = await fetchMissions();
        setMissions(data);
    }, [])

    return (
        <div>
            <Navbar />
            {missions.map((mission) =>
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

export default Mission;