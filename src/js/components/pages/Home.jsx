import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Paragraph} from '../styles/styles';
import {Tabs, Tab, TabPanel} from '../Tabs';
import ItemList from '../test/ItemList';
import Nav from '../test/Nav';
import {ItemProvider} from '../test/ItemListContext';


const Home = () => {
  
  return(
    <div className="container">
      <h1>Homepage</h1>
      <Tabs initialValue="tab-react1">
        <Tab name="tab-react1">
          Tab1
        </Tab>
        <Tab name="tab-react2">
          Tab2
        </Tab>
        <TabPanel name="tab-react1">
          <ItemProvider>
            <Nav />
            <ItemList />
          </ItemProvider>
        </TabPanel>
        <TabPanel name="tab-react2">
          Tab2 Content
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Home;