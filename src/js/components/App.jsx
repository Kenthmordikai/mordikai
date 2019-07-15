import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SideNav from './layouts/SideNav';
import Master from './layouts/Master';
import {MainWrapper} from './styles/styles';

const App = () => {
  return (
    <MainWrapper>
      <SideNav />
      <Master />
    </MainWrapper>
  );
};

export default App;


