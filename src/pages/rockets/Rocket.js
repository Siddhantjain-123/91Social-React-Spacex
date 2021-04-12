import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Rockets.scss';
import Navbar from '../../components/navbar/Navbar';
import { fetchRockets } from '../../actions';

const Rocket = () => {
    const [Data, setData] = useState([])

    useEffect(async () => {
        const data = await fetchRockets();
        setData(data);
    }, [])

    return (<div>
        <Navbar/>
        {
        Data.map((ele) =>
            <div className="first-rocket">
                <div>{ele.rocket_name}</div>
                <div>{ele.rocket_type}</div>
                <div>{ele.wikipedia}</div>
                <div>{ele.description}</div>
            </div>)}
    </div>
    );
}

export default Rocket;