import React, { Component } from 'react';
import { Header, Navigator, Container } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navigator/>
                <Container/>
            </div>
        );
    }
}

export default App;
