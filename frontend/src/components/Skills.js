import React from 'react';
import styled from 'styled-components/macro';

const Skills = () => {
    return (
        <Wrapper>
            <Header>My Skills</Header>
            <Container>
                <Text>
                    Lorem ipsum dolor sit amet, pro purto praesent in, sit te veri fabulas intellegebat. Id nulla persius per, ius ut nulla vocent. Cu graece dolores his, aeque vivendum pericula mei ut, pri nemore nusquam eu. Usu id primis honestatis. Ius an noster civibus reprehendunt. Quot postulant eum te, euismod urbanitas neglegentur no nec.

                    Atqui lucilius consulatu ut eos, id scripta dissentiet cum. No populo quidam corpora eum, eu eleifend conceptam intellegebat cum. Ius diceret percipitur disputando ea, sit ad veniam eruditi, ex choro congue soleat mel. Mei dolor tantas partiendo ei, te diam tamquam quo. Ei eum graeci everti repudiandae.
                </Text>
                <List>
                    <li>HTML & CSS</li>
                </List>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`
const Header = styled.h2`
    border-left: solid 5px #F1BB87;
    padding-left: 5px;
    font-size: 22px;
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

const List = styled.ul`
    display: block;
`

export default Skills;