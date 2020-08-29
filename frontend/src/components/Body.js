import React from 'react';
import styled from 'styled-components/macro';

import About from './About';
import Skills from './Skills';

const Body = () => {
    return (
        <Wrapper>
            <About />
            <Skills />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 20px;
`


export default Body;