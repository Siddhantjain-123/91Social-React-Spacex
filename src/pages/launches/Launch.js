import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Launch.scss'

const Launch = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                console.log(res.data.slice(0, 1));
                setData(res.data.slice(0, 3))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return Data.map((ele) =>
    (<div className={ele.mission_name}>
        <p className={"animate"}>
            {ele.mission_name} 
            {ele.launch_year} 
            {ele.details}
            {ele.launch_success}
        </p>
    </div>)
    );
}

export default Launch;