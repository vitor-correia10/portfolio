import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/GlobalStyle/Theme';
import { projects } from '../data';

const items = Object.values(projects);

const AboutProject = ({ itemId }) => {
    const project = items.find((element) => element.id === itemId.id);
    return (
        <>
            <Header>{project.title}</Header>
            <Container>
                <Text>

                </Text>
            </Container>
        </>
    )
}

const Header = styled.h1`
    font-size: 28px;
    border-left: solid 5px ${THEME.secondary};
    padding-left: 5px;
`

const Container = styled.div`
    display: block;
    text-align: center;

    @media (min-width: ${THEME.mobile}){
        display: flex;
        padding: 40px;
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

export default AboutProject;