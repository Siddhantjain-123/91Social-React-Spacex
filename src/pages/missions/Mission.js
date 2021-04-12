import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Mission.scss'

const Mission = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/missions')
            .then(res => {
                console.log(res.data.slice(0, 3));
                setData(res.data.slice(0, 3))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return Data.map((ele) =>
    // (<div className={ele.mission_name}>
    //     <h1 className={"animate"}>
    //         {ele.mission_name}
    //         {ele.manufactures}
    //         {ele.wikipedia}
    //         {ele.description}
    //     </h1>
    // </div>)
     (<div className={ele.mission_name}>
     <div>{ele.mission_name}</div>
     <div>{ele.manufactures}</div>
     <div>{ele.wikipedia}</div>
     <div>{ele.description}</div>
 </div>)
    );
}

export default Mission;