import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoContainer from '../components/TodoContainer';
import Home from '../components/Home';

export default (
    <Switch>
        <Route path = '/todos' component = {TodoContainer}/>
        <Route path = '/' component = {Home}/>
    </Switch>
)