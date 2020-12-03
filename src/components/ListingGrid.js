import React from 'react';
import styled from 'styled-components/macro';

import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import { THEME } from './GlobalStyle/Theme';

const ListingGrid = ({ itemList }) => {
    return (
        <>
            <Container>
                {itemList.map((item) => (
                    <ItemDetails key={item.id}>
                        <Link
                            to={`${item.id}`}
                            onClick={() => scroll.scrollToTop()}
                        >
                            <Image
                                src={item.avatarSrc}
                                alt={item.title}
                            />
                            <ItemName> {item.title}</ItemName>
                            <hr />
                            <Paragraph> {item.description}</Paragraph>
                        </Link>
                    </ItemDetails>
                ))}
            </Container>
        </>
    );
};

const Container = styled.div`
    @media (min-width: ${THEME.mobile}){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        margin: 40px;
    }

    a{
        text-decoration: none;
    }

    hr{
        width: 30%;
        min-width: 20px;
    }
`

const Paragraph = styled.p`
    color: gray;
    font-style: italic;
    padding: 15px;
`

const ItemDetails = styled.div`
    display: inline-block;
    text-align: center;
    width: 100%;
    background: #ffffff;
    position: relative;
    margin: 10px;
    box-shadow: 3px 5px 15px #888888;
    height: 560px;
    margin: 40px 0;

    @media (min-width: ${THEME.mobile}){
        height: auto;
    }
`

const Image = styled.img`
    position: relative;
    top: -10px;
    min-width: 250px;
    width: 80%;
    border-radius: 15px;
    transition: all 1s ease-in;

    &:hover{
        transform: scale(1.05);
        border: 2px solid #ed7f15;
    }
`

const ItemName = styled.h3`
    color: black;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
`

export default ListingGrid;