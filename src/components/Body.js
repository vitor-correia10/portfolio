import React from 'react';
import styled from 'styled-components/macro';

import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Body = () => {
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
    margin: 60px 30px
`

export default Body;