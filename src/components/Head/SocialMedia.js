import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

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
    padding: 10px 1.8em;

`

const Anchor = styled.a`
    padding: 5px;
    font-size: 18px;


    &:hover{
        color: ${THEME.light};
    }
`

export default SocialMedia;