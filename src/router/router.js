import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './../pages/Login/index';
import Home from './../pages/Home/index';

class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
            </Switch>
        )
    }
}

export default Routes;