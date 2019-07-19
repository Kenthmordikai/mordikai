import React, {createContext, useState, useContext} from 'react';
import List from './List';
import { listContext } from './ItemListContext';

const ItemList = () => {
    const [list, setList] = useContext(listContext);

    return (
        <div>
        {
            list.map(item => (
                <List name={item.name} age={item.age}/>
            ))
        }
        </div>
    );
}

export default ItemList;