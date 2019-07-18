import React, {useState, createContext} from 'react';
import ItemList from './ItemList';


export const listContext = createContext();


export const ItemProvider = props => {
    const [list, setList] = useState([
        {
            name: 'Tucker',
            age: 10,
            id: 12
        },
        {
            name: 'Richard',
            age: 20,
            id: 15
        },
        {
            name: 'Simmons',
            age: 15,
            id: 11
        },
    ]);

    return(
        <listContext.Provider value={[list,setList]}>
            {props.children}
        </listContext.Provider>
    )

}