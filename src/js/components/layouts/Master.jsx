import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import {MainWrapper} from '../styles/styles';


const Master = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </MainWrapper>
  );
};
  
export default Master;