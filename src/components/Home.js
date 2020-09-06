import React from 'react';
import styled from 'styled-components/macro';

import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => {
    return (
        <Wrapper>
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 30px
`

export default Home;