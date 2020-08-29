import React from 'react';
import styled from 'styled-components/macro';

import logo from '../assets/vitorCorreia.png';

const About = () => {
    return (
        <Wrapper>
            <Header>Nice to meet you!</Header>
            <Container>
                <Logo src={logo} alt="logo" />
                <Text>
                    Lorem ipsum dolor sit amet, pro purto praesent in, sit te veri fabulas intellegebat. Id nulla persius per, ius ut nulla vocent. Cu graece dolores his, aeque vivendum pericula mei ut, pri nemore nusquam eu. Usu id primis honestatis. Ius an noster civibus reprehendunt. Quot postulant eum te, euismod urbanitas neglegentur no nec.

                    Atqui lucilius consulatu ut eos, id scripta dissentiet cum. No populo quidam corpora eum, eu eleifend conceptam intellegebat cum. Ius diceret percipitur disputando ea, sit ad veniam eruditi, ex choro congue soleat mel. Mei dolor tantas partiendo ei, te diam tamquam quo. Ei eum graeci everti repudiandae.
                </Text>
            </Container>
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

const Container = styled.div`
    display: flex;
    padding: 40px;
`

const Logo = styled.img`
    height: 120px;
    transform: rotate(335deg);
    border: 13px solid black;
    box-sizing: content-box;
`

const Text = styled.div`
    width: 80%;
    margin: auto;
`

export default About;