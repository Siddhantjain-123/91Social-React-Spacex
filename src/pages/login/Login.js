import React, { useState } from 'react';
import './Login.scss';
import Input from '../../components/input';
import user from '../login/user.png';
import Button from '../../components/button/Button';
import lock from '../login/lock.png';
import { Redirect } from "react-router-dom";
import axios from "axios";
import {useHistory} from 'react-router'

const Login = ({login,loggedIn}) => {
  const history=useHistory();
    const rendercontent= ()=>{
        if(loggedIn)
        {
            return <Redirect to={'/dashboard'} />
        }
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        if (!username || !password) {
          console.log("Field empty");
          alert("Fields cannot be empty");
        } else {
          let body = { username, password };
          loggin(body);
        }
      };
        const loggin = async (body) => {
          let res = await axios.post  (
            "https://run.mocky.io/v3/0c9d7db1-d98d-4871-afc7-46f3dd9878c7",
            {
              config: {},
              headers: {},
              body,
            }
          );
    
          if (res.status === 200) {
            console.log(res);
            if(username==='elon'||username==='91Social')
              {
                  // console.log(username);
              history.push("/dashboard");}
            else
              alert("Not authorised");
          }
        };
      

    return (
        <div className="login-container">
            {rendercontent()}
                <div className="loginbox">
                    <span className="login">
                        Login
                    </span>
                    <Input id="1" type="textbox" value={username} placeholder="User Name" logo={user} alt="logos" change={e => setUsername(e.target.value)} />
                    <Input id="2" type="textbox" value={password} placeholder="Password" logo={lock} change={e => setPassword(e.target.value)}></Input>
                    <Button className="Wrapper-Button" label="Login" click={handleClick} />
                </div>
            </div>
    );
}
export default Login;