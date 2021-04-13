import { React, useState, useEffect } from 'react';
import './Launch.scss'
import Navbar from '../../components/navbar/Navbar'
import { getLaunches } from '../../store/actions/launch';
import { connect } from 'react-redux'

const Launch = ({ launches, getLaunches }) => {

  useEffect(async () => {
    getLaunches();
  }, [])

  return (
    <div>
      <Navbar />
      {launches.map((ele) =>
        <div className={ele.mission_name}>
          <div>{ele.mission_name}</div>
          <div>{ele.launch_year}</div>
          <div>{ele.details}</div>
          <div>{ele.launch_success}</div>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    launches: state.launches.data
  }
}

const mapDispatchToProps = {
  getLaunches
};

export default connect(mapStateToProps, mapDispatchToProps)(Launch);
