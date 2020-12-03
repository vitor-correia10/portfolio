import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/GlobalStyle/Theme';

const Skills = () => {
    return (
        <Wrapper>
            <Header>My Skills</Header>
            <Container>
                <Text>
                    After discovering my passion for web development, I always keep learning new technologies and adding skills, as:
                </Text>
                <StyledList>
                    <Row>
                        <List>HTML & CSS</List>
                        <List>Javascript</List>
                        <List>Git</List>
                    </Row>
                    <Row>
                        <List>React</List>
                        <List>Redux</List>
                        <List>Styled-Components</List>
                    </Row>
                    <Row>
                        <List>Node</List>
                        <List>MongoDB</List>
                        <List>SQL</List>
                    </Row>
                </StyledList>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 30px 0
`

const Header = styled.h2`
    border-left: solid 5px ${THEME.secondary};
    padding-left: 5px;
    font-size: 24px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${THEME.mobile}){
        padding: 40px;
    }
`

const Text = styled.div`
    width: 90%;
    display: block;
    text-align: center;
    margin: 30px auto 20px auto;


    @media (min-width: ${THEME.mobile}){
        margin-top: 0;
        width: 60%;
        font-size: 17px;
    }
`

const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    font-weight: 600;
    list-style: none;
`

const Row = styled.p`
    @media (max-width: ${THEME.mobile}){
        text-align: center;
    }
`

const List = styled.li`
    padding: 10px 0;

    :before{
        content: "+";
        color: ${THEME.primary};
        padding-right: 5px;
    }
`

export default Skills;