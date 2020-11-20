import React from 'react';
import logo from '../../assets/vitorCorreia.png';

const Logo = ({ size, space }) => {
    return (
        <img
            src={logo}
            style={{ width: size, marginTop: space }}
            alt="logo"
        />
    )
}

export default Logo;