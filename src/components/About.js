import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/GlobalStyle/Theme';

import picture from '../assets/picture.jpeg';

const About = () => {
    return (
        <Wrapper id="about">
            <Header1>Hello! I am Vitor, <Gold>a Web Developer </Gold>& Bootcamp Graduate at Concordia University. </Header1>
            <Header>Nice to meet you!</Header>
            <Container>
                <Picture src={picture} alt="Vitor Correia Picture" />
                <Text>
                    My name is Vitor Correia. I have been started working at at Retrigo 4 years ago as an Operations Director, where I could work close to developers and discover my passion for technology. I decided to take some web development courses, then I joined a bootcamp at Concordia. My final project was an app to connect startups to junior developers. My idea is to help developers to continue honing their skills and small companies making their first app. Since I have previous experience with startups, I know how difficult is to start a business. When I moved to Tailbase 2 years ago, as an e-commerce company, I knew a could have more opportunities to keep learning and improve my technology skills. I have been working at Tailbase for 2 years and +1 year as a web developer. In that time, I have already been promoted 2 times.
                </Text>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 90px 0 40px 0;
`

const Header1 = styled.h1`
        font-size: 28px;
        text-align: center;
        margin-bottom: 50px;

    @media (min-width: ${THEME.mobile}){
        padding: 0 50px;
    }
`

const Gold = styled.span`
    color: ${THEME.secondary}
`

const Header = styled.h2`
    border-left: solid 5px ${THEME.secondary};
    padding-left: 5px;
    font-size: 24px;
`

const Container = styled.div`
    display: block;
    text-align: center;

    @media (min-width: ${THEME.mobile}){
        display: flex;
        padding: 40px;
    }
`

const Picture = styled.img`
        border: 12px double black;
        box-sizing: content-box;
        height: 140px;
        margin: 30px 0;

    @media (min-width: ${THEME.mobile}){
        height: 120px;
        transform: rotate(340deg);
    }

    @media (min-width: 1024px){
        height: 140px;
    }
`

const Text = styled.div`
    width: 90%;
    margin: auto;

    @media (min-width: ${THEME.mobile}){
        width: 60%;
    }

    @media (min-width: 1024px){
        width: 70%;
    }
`

export default About;