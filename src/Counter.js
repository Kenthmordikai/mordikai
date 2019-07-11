import React from 'react';
import logo from './logo.svg';

import {connect} from 'react-redux';

const CounterApp = (prop) => {
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <p>{prop.counter}</p>
                    <button onClick={() => prop.inCrease()}>Increment</button><br/>
                    <button onClick={() => prop.deCrease()}>Decrement</button>
            </header>
        </div>
    )
};

const state = (state) => {
    return {counter:state.counter}
}

const mapDispatch = (dispatch) => {
    return {
        inCrease: () => dispatch({type:'INCREASE_TYPE'}),
        deCrease: () => dispatch({type:'DECREASE_TYPE'}),
    }
};


export default connect(state, mapDispatch)(CounterApp);