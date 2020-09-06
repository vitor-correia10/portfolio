import React from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

import Portfolio from './Portfolio';
import { projects } from '../data';
import Contact from './Contact';


const items = Object.values(projects);

const ProjectList = () => {
    const itemId = useParams();

    const project = items.find((element) => element.id === itemId.id);

    return (
        <Wrapper>
            <Header>{project.title}</Header>
            <Portfolio />
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 60px 30px
`

const Header = styled.h1`
    
`

export default ProjectList;