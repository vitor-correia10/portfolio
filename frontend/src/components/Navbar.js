import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

import Logo from './Logo';

const Navbar = () => {
    return (
        <Wrapper>
            <Link to="about" smooth={true} duration={1000} offset={-70}>
                <Span>About</Span>
            </Link>
            <Link to="portfolio" smooth={true} duration={1000}>
                <Span>Portfolio</Span>
            </Link>
            <Logo
                size={120}
                space={55}
            />
            <Link to="contact" smooth={true} duration={1000}>
                <Span>Contact</Span>
            </Link>
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
        </Wrapper >
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
    margin: 0;
    margin-left: 1px;
    position: relative;
    cursor: pointer;

    &:after{
        content: '';
        position: absolute;
        left: 0;
        width: 0; 
        height: 4px;
        display: block;
        margin-top: 10px;
        background: #000000;
        transition: width 500ms ease-out;
    }

    &:hover:after{
        text-align: center;
        width: 100%;
        left: 0;
        background: #000000;
    }
`

const Social = styled.div`
    padding: 10px 1.8em;

`

const Anchor = styled.a`
    padding: 5px;
    font-size: 18px;


    &:hover{
        color: #ffffff;
    }
`

export default Navbar;