import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Rockets.scss'

const Rocket = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/rockets')
            .then(res => {
                console.log(res.data.slice(0,3));
                setData(res.data.slice(0,3))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return Data.map((ele) => 
        (<div className="first-rocket">
            <div>{ele.rocket_name}</div>
            <div>{ele.rocket_type}</div>
            <div>{ele.wikipedia}</div>
            <div>{ele.description}</div>
        </div>)
    );  
}

export default Rocket;