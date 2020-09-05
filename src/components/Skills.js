import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/GlobalStyle/Theme';

const Skills = () => {
    return (
        <Wrapper>
            <Header>My Skills</Header>
            <Container>
                <Text>
                    Lorem ipsum dolor sit amet, pro purto praesent in, sit te veri fabulas intellegebat. Id nulla persius per, ius ut nulla vocent. Cu graece dolores his, aeque vivendum pericula mei ut, pri nemore nusquam eu. Usu id primis honestatis. Ius an noster civibus reprehendunt. Quot postulant eum te, euismod urbanitas neglegentur no nec.

                    Atqui lucilius consulatu ut eos, id scripta dissentiet cum. No populo quidam corpora eum, eu eleifend conceptam intellegebat cum. Ius diceret percipitur disputando ea, sit ad veniam eruditi, ex choro congue soleat mel. Mei dolor tantas partiendo ei, te diam tamquam quo. Ei eum graeci everti repudiandae.
                </Text>
                <StyledList>
                    <Row>
                        <List>HTML & CSS</List>
                        <List>Javascript ES6</List>
                    </Row>
                    <Row>
                        <List>React</List>
                        <List>Node</List>
                    </Row>
                    <Row>
                        <List>SASS</List>
                        <List>Styled-Components</List>
                    </Row>
                    <Row>
                        <List>SQL</List>
                        <List>Git</List>
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
    padding: 40px;
`

const Text = styled.div`
    width: 60%;
    display: block;
    margin-bottom: 20px;
`

const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    list-style: none;
`

const Row = styled.p`
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