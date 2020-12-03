import React from 'react';
import styled from 'styled-components/macro';

import { FiGithub, FiLinkedin, FiTwitter, FiX, FiMenu } from 'react-icons/fi'
import { THEME } from '../GlobalStyle/Theme';

const SocialMedia = () => {
    return (
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
    )
}

const Social = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;

    @media (min-width: ${THEME.mobile}){
        display: block;
        padding: 10px 1.8em;
    }
`

const Anchor = styled.a`
    padding: 5px;
    font-size: 18px;


    &:hover{
        color: ${THEME.light};
    }
`

export default SocialMedia;