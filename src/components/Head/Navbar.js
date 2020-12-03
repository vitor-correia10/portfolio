import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

import { THEME } from '../GlobalStyle/Theme';
import MobileMenu from './MobileMenu';

import Logo from './Logo';
import SocialMedia from './SocialMedia';

const Navbar = () => {
    const [logoSize, setLogoSize] = React.useState(false);
    const [click, setClick] = React.useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const changeLogoSize = () => {
        if (window.scrollY > 30) {
            setLogoSize(true);
        } else {
            setLogoSize(false);
        }
    };
    window.addEventListener('scroll', changeLogoSize);

    return (
        <Wrapper>
            <MobileMenu />
            <Link to="about" smooth={true} duration={1000} offset={-10}>
                <Span>About</Span>
            </Link>
            <Link to="portfolio" smooth={true} duration={1000} offset={-70}>
                <Span>Portfolio</Span>
            </Link>
            <LogoAnchor href="/">
                <Logo
                    size={logoSize ? 60 : 120}
                    space={logoSize ? 5 : 55}
                />
            </LogoAnchor>
            <Link to="contact" smooth={true} duration={1000}>
                <Span>Contact</Span>
            </Link>
            <SocialMedia />
        </Wrapper >
    )
}

const Wrapper = styled.div`
    background: ${THEME.primary};
    width: 100%;
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: center;
`

const LogoAnchor = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

const Span = styled.span`
    display: none;
    font-size: 18px;

    @media (min-width: ${THEME.mobile}) {
        padding: 10px 1.5em;
        color: ${THEME.light};
        font-weight: 600;
        margin: 0;
        margin-left: 1px;
        position: relative;
        cursor: pointer;
        display: flex;
    }

    &:after{
        content: '';
        position: absolute;
        left: 0;
        width: 0; 
        height: 4px;
        display: block;
        margin-top: 10px;
        background: ${THEME.dark};
        transition: width 500ms ease-out;
        top: 20px;
    }

    &:hover:after{
        text-align: center;
        width: 100%;
        left: 0;
        top: 20px;
        background: ${THEME.dark};
    }
`

export default Navbar;