import React from 'react';
import styled from 'styled-components/macro';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { THEME } from '../GlobalStyle/Theme';
import ResumePDF from '../../assets/VitorCorreia-Resume.pdf';

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
            <Anchor href={ResumePDF} target="_blank">
                <HiOutlineDocumentDownload />
            </Anchor>
        </Social>
    )
}

const Social = styled.div`
    position: absolute;
    right: 12px;
    top: 20px;

    @media (min-width: ${THEME.mobile}){
        display: contents;
        padding: 10px 1.8em;
        top: 0;
    }
`

const Anchor = styled.a`
    padding: 5px;
    font-size: 18px;

    &:last-child{
        font-size: 21px;
    }

    &:hover{
        color: ${THEME.light};
    }
`

export default SocialMedia;