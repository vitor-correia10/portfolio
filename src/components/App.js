import React from 'react';
import GlobalStyles from './GlobalStyle/GlobalStyles';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './Home';
import ProjectList from './ProjectList';

import Header from './Header';
import Footer from './Footer';


function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/:id">
                    <ProjectList />
                </Route>
            </Switch>
            <Footer />
            <GlobalStyles />
        </Router>
    )
}


export default App;