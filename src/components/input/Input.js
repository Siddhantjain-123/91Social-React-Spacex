import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

import './Input.scss';


const   Input = (props) => {

    console.log(props);

    var logopath = "";
    var alt = "";
    if (props.logo) {
        logopath = props.logo;
        alt = props.alt;

    }

    const inputElement = {
        id: props.id,
        type: props.type,
        placeholder: props.placeholder,
        value: props.value,
        onChange: props.change
    }

    return (
        <div className="inputfields-wrapper">
            <img src={logopath} alt={alt} />
            <input {...inputElement} />
        </div>

    );
}

Input.propTypes = {
    /**
    Displays a logo corresponding to the related Button
     */
    logo: PropTypes.string,
    /**
    Displays an alternative message when the logo cannot be loaded or displayed
     */
    alt: PropTypes.string,
    /**
    Peforms the corresponding function when clicked
     */
    change: PropTypes.func,
    /**
    Can be named according to the requirement
     */
    value: PropTypes.string
}

Input.defaultProps = {
    logo : "Logo",
    alt : "Logo",
    value : "Input"
}

export default Input;