import React from 'react';
import { Switch, Route } from 'react-router-dom';
import APUSupport from './APUSupport';
import WEPASupport from './WEPASupport';
import home from './home';

const Main = () => (
    <Switch>
        <Route exact path="/" component={home}/>
        <Route path="/APUSupport" component={APUSupport}/>
        <Route path="/WEPASupport" component={WEPASupport}/>
    </Switch>
)

export default Main;