import React from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import Portfolio from './Portfolio';
import Contact from './Contact';
import AboutProject from './AboutProject';

const ProjectList = () => {
    const itemId = useParams();
    return (
        <Wrapper>
            <AboutProject itemId={itemId} />
            <Portfolio />
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 60px 30px
`

export default ProjectList;