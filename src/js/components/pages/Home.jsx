import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


const Home = () => {
    return(
        <div className="container">
            <h1>Homepage</h1>
            <Link to='/about'>Goto About</Link>
        </div>
    );
}

export default Home;