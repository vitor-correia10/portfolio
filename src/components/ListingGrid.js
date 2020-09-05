import React from 'react';
import styled from 'styled-components/macro';

const ListingGrid = ({ itemList }) => {
    return (
        <>
            <Container>
                {itemList.map((item) => (
                    <ItemDetails key={item.id}>
                        <a href={`${item.url}`} target="_blank">
                            <Image
                                src={item.avatarSrc}
                                alt={item.title}
                            />
                            <ItemName> {item.title}</ItemName>
                            <hr />
                            <p> {item.description}</p>
                        </a>
                    </ItemDetails>
                ))}
            </Container>
        </>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 40px;

    a{
        text-decoration: none;
    }

    p{
        color: gray;
        font-style: italic;
    }

    hr{
        width: 30%;
        min-width: 20px;
    }
`
const ItemDetails = styled.div`
    display: inline-block;
    text-align: center;
    width: 100%;
    background: #ffffff;
    position: relative;
    margin: 10px;
    box-shadow: 3px 5px 15px #888888;
`

const Image = styled.img`
    position: relative;
    top: -10px;
    min-width: 250px;
    width: 75%;
    border-radius: 15px;
    transition: all 1s ease-in-out;

    &:hover{
        transform: scale(1.1);
    }
`

const ItemName = styled.h3`
    color: black;
    font-size: 18px;
    font-weight: 600;
`

export default ListingGrid;