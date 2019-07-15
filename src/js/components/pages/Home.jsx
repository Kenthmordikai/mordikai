import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Paragraph} from '../styles/styles';
import {Tabs, Tab, TabPanel} from '../Tabs';


const Home = () => {
  return(
    <div className="container">
      <h1>Homepage</h1>
      <Tabs initialValue="tab-react">
        <Tab name="tab-react1">
          Tab1
        </Tab>
        <Tab name="tab-react2">
          Tab2
        </Tab>
        <TabPanel name="tab-react1">
          Tab1 Content
        </TabPanel>
        <TabPanel name="tab-react2">
          Tab2 Content
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Home;