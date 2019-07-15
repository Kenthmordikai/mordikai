import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Paragraph, SideBar, SideLink, Item} from '../styles/styles';


const SideNav = () => {
  return(
    <SideBar>
      <SideLink>
        <Item>
          <Link to='/'>Home</Link>
        </Item>
				<Item>
          <Link to='/about'>About</Link>
        </Item>
      </SideLink>
  	</SideBar>
  );
};

export default SideNav;