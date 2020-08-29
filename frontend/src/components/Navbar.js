import React from 'react';
import styled from 'styled-components/macro';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

import logo from '../assets/vitorCorreia.png';

const Navbar = () => {
    return (
        <Wrapper>
            <Span>About</Span>
            <Span>Skills</Span>
            <Logo src={logo} alt="logo" />
            <Span>Portfolio</Span>
            <Social>
                <Anchor href="https://github.com/vitor-correia10" target="_blank">
                    <FiGithub />
                </Anchor>
                <Anchor href="https://www.linkedin.com/in/vitor-correia" target="_blank">
                    <FiLinkedin />
                </Anchor>
                <Anchor href="https://twitter.com/correia10_vitor" target="_blank">
                    <FiTwitter />
                </Anchor>
            </Social>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #07da63;
    width: 100%;
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: center;
`

const Span = styled.span`
    padding: 10px 2em;
    color: #ffffff;
    font-weight: 600;
    border-bottom: 2px solid transparent;

    &:hover{
        color: black;
        border-bottom: 2px solid black;
        cursor: pointer;
    }
`

const Logo = styled.img`
    height: 120px;
    margin-top: 55px;
`

const Social = styled.div`
    padding: 10px 2em;

`

const Anchor = styled.a`
    padding: 5px;
    font-size: 18px;
`

export default Navbar;