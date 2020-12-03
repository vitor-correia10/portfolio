import React from 'react';
import styled from 'styled-components/macro';
import { FiX, FiMenu } from 'react-icons/fi'
import { THEME } from '../GlobalStyle/Theme';
import { Link } from 'react-scroll';

const MobileMenu = () => {
    const [click, setClick] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);

    const handleClick = () => {
        setClick(!click)
        setDropdown(!dropdown)
    }
    const handleClickHere = () => {
        setClick(!click)
        setDropdown(!dropdown)
    }

    return (
        <>
            <Hamburger onClick={handleClick}>
                {click ? <FiX /> : <FiMenu />}
                {dropdown &&
                    <>
                        <Nav>
                            <Item>
                                <Link to="about" smooth={true} duration={1000} offset={-10}>
                                    <Anchor onClick={handleClickHere}>
                                        About
                                    </Anchor>
                                </Link>
                            </Item>
                            <Item>
                                <Link to="portfolio" smooth={true} duration={1000} offset={-70}>
                                    <Anchor onClick={handleClickHere}>
                                        Portfolio
                        </Anchor>
                                </Link>
                            </Item>
                            <Item>
                                <Link to="contact" smooth={true} duration={1000}>
                                    <Anchor onClick={handleClickHere}>
                                        Contact
                        </Anchor>
                                </Link>
                            </Item>
                        </Nav>
                    </>
                }
            </Hamburger>
        </ >
    )
}

const Hamburger = styled.div`
    position: absolute;
    left: 25px;
    top: 20px;

    @media (min-width: ${THEME.mobile}){
        display: none;
    }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  color: ${THEME.light};
  height: auto;
  text-align: left;
  position: absolute;
  top: 40px;
  padding: 0 15px;
  left: -25px;
  width: 100px;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

const Item = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Anchor = styled.a`
    font-size: 18px;
`


export default MobileMenu;