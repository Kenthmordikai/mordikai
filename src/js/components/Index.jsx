import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const Index = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Index;
ReactDOM.render(<Index />, document.getElementById('app'));
