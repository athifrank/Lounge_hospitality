import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Details from './Details';

ReactDOM.render(
    <Router>
    <Switch>
        <Route path='/details/:id' component={Details} />
        <Route path='/' component={App} />
    </Switch>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
