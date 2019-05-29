import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './../pages/Login/index';
import Home from './../pages/Home/index';
import TestComponent from '../pages/higherComponents/index';
import LifeStyle from './../pages/lifeStyle/index';
import ReduxTest from './../pages/reduxPage/index';

export default class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/higherComponents" component={TestComponent}></Route>
                <Route path="/lifeStyle" component={LifeStyle}></Route>
                <Route path="/reduxTest" component={ReduxTest}></Route>
            </Switch>
        )
    }
}