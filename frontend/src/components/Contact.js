import React from 'react';
import styled from 'styled-components/macro';

const Contact = () => {
    return (
        <Wrapper id="contact">
            <Header>Let's talk</Header>
            <Subtitle>
                Don't be shy. Come to say hello.
            </Subtitle>
            <Paragraph>
                Feel free to reach out if you're looking for a developer, have a question, or just want a coffee chat.
            </Paragraph>
            <Anchor href="mailto:vitorbaziliogcorreia@gmail">vitorbaziliogcorreia@gmail.com</Anchor>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 30px 0;
`

const Header = styled.h2`
    border-left: solid 5px #F1BB87;
    padding-left: 5px;
    font-size: 24px;
`

const Subtitle = styled.h6`
    margin-bottom: 10px;
`

const Paragraph = styled.p`
    margin-bottom: 40px;
`

const Anchor = styled.a`
    padding-bottom: 2px;
    border-bottom: 3px solid #07da63;
    transition: border-bottom 300ms ease-out;

    &:hover {
        border-bottom: 3px solid transparent;
    }
`

export default Contact;