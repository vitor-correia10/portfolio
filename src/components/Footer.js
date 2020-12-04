import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/GlobalStyle/Theme';

import Logo from './Head/Logo';
import { animateScroll as scroll } from "react-scroll";
import ResumePDF from '../assets/VitorCorreia-Resume.pdf';

const Footer = () => {
    return (
        <Wrapper id="footer">
            <LogoAnchor onClick={() => scroll.scrollToTop()}>
                <Logo
                    size={80}
                />
            </LogoAnchor>
            <div>
                <Anchor href="https://github.com/vitor-correia10" target="_blank">
                    github
                </Anchor>
                <Anchor href="https://www.linkedin.com/in/vitor-correia" target="_blank">
                    linkedin
                </Anchor>
                <Anchor href="https://twitter.com/correia10_vitor" target="_blank">
                    twitter
                </Anchor>
                <Anchor href={ResumePDF} target="_blank">
                    resume
            </Anchor>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 60px 30px 30px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoAnchor = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

const Anchor = styled.a`
    margin: 5px;
    cursor: pointer;

    &:hover{
        color: ${THEME.secondary};
    }
`

export default Footer;