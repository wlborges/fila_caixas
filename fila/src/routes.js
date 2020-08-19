import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Gerador from '../src/Pages/gerador';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Gerador}/>
            </Switch>
        </BrowserRouter>
    );
}