import React, {createContext, useState, useContext} from 'react';

const List = ({ name, age }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{age}</p>
        </div>
    );
}

export default List;