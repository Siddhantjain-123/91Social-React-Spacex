import React, { useState } from 'react';
import './Login.scss';
import Input from '../../components/input';
import userimg from '../login/userimg.png';
import Button from '../../components/button/Button';
import lock from '../login/lock.png';
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router'
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions/auth'

const Login = ({ user, authenticateUser }) => {
  console.log(user)
  const history = useHistory();
  const rendercontent = () => {
    if (user.isLoggedIn) {
      return <Redirect to={'/dashboard'} />
    }
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (!username || !password) {
      alert("Fields cannot be empty");
    } else {
      authenticateUser({
        username,
        password
      });
    }
  };

  return (
    <div className="login-container">
      {rendercontent()}
      <div className="loginbox">
        <span className="login">
          Login
                    </span>
        <Input id="1" type="textbox" value={username} placeholder="User Name" logo={userimg} alt="logos" change={e => setUsername(e.target.value)} />
        <Input id="2" type="textbox" value={password} placeholder="Password" logo={lock} change={e => setPassword(e.target.value)}></Input>
        <Button className="Wrapper-Button" label="Login" click={handleClick} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  authenticateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);