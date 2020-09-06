import React from 'react';
import styled from 'styled-components/macro';
import { THEME } from '../components/GlobalStyle/Theme';
import { projects } from '../data';
import ListingGrid from './ListingGrid';

const Portfolio = () => {
    return (
        <Wrapper id="portfolio">
            <Header>My work...</Header>
            <ListingGrid itemList={Object.values(projects)} />
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

export default Portfolio;