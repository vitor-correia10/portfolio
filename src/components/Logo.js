
import React from 'react';
import styled from 'styled-components/macro';
import logo from '../assets/vitorCorreia.png';

import { animateScroll as scroll } from "react-scroll";

const Logo = ({ size, space }) => {
    return (
        <Anchor onClick={() => scroll.scrollToTop()}>
            <img
                src={logo}
                style={{ width: size, marginTop: space }}
                alt="logo"
            />
        </Anchor>
    )
}

const Anchor = styled.a`
  text-decoration: none;
`;

export default Logo;