import React from 'react';
import styled from 'styled-components/macro';

import logo from '../assets/vitorCorreia.png';

import Navbar from './Navbar';

const Header = () => {
    return (
        <Wrapper>
            <Navbar />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    position: sticky;
    top: 0;
`

const Head = styled.h1`
    font-size: 28px;
    margin: 20px auto;
`

export default Header;