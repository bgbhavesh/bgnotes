import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from "../../ui/App";
import NotFound from "../../ui/Pages/NotFound";
export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/app" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

);