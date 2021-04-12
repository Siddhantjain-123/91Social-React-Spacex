
import './Button.scss';
import PropTypes from 'prop-types';
import React from "react";

const Button = (props) => {
    console.log("props in button", props);
    const className = `button ${props.type}`;
    return (
      <div>
        <button className={className} onClick={props.click}>
          {props.label}
        </button>
      </div>
    );
  };

export default Button;