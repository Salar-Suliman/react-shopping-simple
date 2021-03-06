import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import Header from './Header';
const Router = props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/salarID" component={Header} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);
export default Router;
