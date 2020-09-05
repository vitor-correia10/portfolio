import React from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from './GlobalStyle/GlobalStyles';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
    return (
        <Wrapper>
            <Header />
            <Body />
            <Footer />
            <GlobalStyles />
        </Wrapper>
    )
}

const Wrapper = styled.div`
`
export default App;