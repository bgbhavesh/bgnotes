import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from "../../ui/App";
import Test from "../../ui/Test";
import NotFound from "../../ui/Pages/NotFound/index";
import HomePage from "../../ui/Pages/HomePage/index";
export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/app" component={App} />
            <Route path="/test" component={Test} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

);