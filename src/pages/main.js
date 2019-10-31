import React from 'react';
import { Switch, Route } from 'react-router-dom';
import APUSupport from './APUSupport';
import WEPASupport from './WEPASupport';
import testPage from './testPage';
import home from './home';

const Main = () => (
    <Switch>
        <Route exact path="/" component={home}/>
        <Route path="/APUSupport" component={APUSupport}/>
        <Route path="/WEPASupport" component={WEPASupport}/>
        <Route path="/test" component={testPage}/>
    </Switch>
)

export default Main;