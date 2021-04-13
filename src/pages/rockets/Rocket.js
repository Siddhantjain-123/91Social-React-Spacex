import { React, useEffect } from 'react';
import './Rockets.scss';
import Navbar from '../../components/navbar/Navbar';
import { getRockets } from '../../store/actions/rockets';
import {connect} from 'react-redux'


const Rocket = ({ rockets, getRockets }) => {

    useEffect(async () => {
        getRockets();
    }, [])

    return (<div>
        <Navbar />
        { rockets &&
            rockets.map((ele) =>
                <div className="first-rocket">
                    <div>{ele.rocket_name}</div>
                    <div>{ele.rocket_type}</div>
                    <div>{ele.wikipedia}</div>
                    <div>{ele.description}</div>
                </div>)}
    </div>
    );
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
      rockets: state.rockets.data
    }
  }
  
  const mapDispatchToProps = {
    getRockets
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Rocket);
