import { React, useState, useEffect } from 'react';
import './Launch.scss'
import Navbar from '../../components/navbar/Navbar'
import { fetchLaunches } from '../../actions';

const Launch = () => {
    const [Data, setData] = useState([])

    useEffect(async () => {
        const data = await fetchLaunches();
        setData(data);
    }, [])

    return (
        <div>
            <Navbar />
            {Data.map((ele) =>
                <div className={ele.mission_name}>
                    <p className={"animate"}>
                        {ele.mission_name}
                        {ele.launch_year}
                        {ele.details}
                        {ele.launch_success}
                    </p>
                </div>
             ) }
        </div>
        )
}

export default Launch;