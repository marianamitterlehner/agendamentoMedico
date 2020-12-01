import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Pages/Menu';
import Scheduling from './Pages/Scheduling';
import List from './Pages/List';

function Routes() {
    return(
        <BrowserRouter> 
            <Switch>
                <Route path='/' component={Menu} exact />
                <Route path='/scheduling' component={Scheduling} />
                <Route path='/list' component={List} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;