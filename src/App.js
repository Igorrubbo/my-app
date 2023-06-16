import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login.js';
import ImagesPage from './ImagesPage.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/images" component={ImagesPage} />
      </Switch>
    </Router>
  );
};

export default App;
