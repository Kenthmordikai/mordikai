import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


const About = () => {
    return(
        <div className="container">
            <h1>About</h1>
            <p>
                <Link to='/'>Goto Home Page</Link>
            </p>
        </div>
    );
}

export default About;