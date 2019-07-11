import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div id="page-wrapper">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    </div>
  );
};

export default App;


