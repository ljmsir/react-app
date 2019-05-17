import React from 'react';
import Routes from './router/router';
import { BrowserRouter } from 'react-router-dom';

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        )
    }
}
