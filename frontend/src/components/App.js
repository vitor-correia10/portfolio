import React from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Body from './Body';

function App() {
    return (
        <Wrapper>
            <Header />
            <Body />
            <GlobalStyles />
        </Wrapper>
    )
}

const Wrapper = styled.div`
`
export default App;