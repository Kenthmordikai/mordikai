import React, {createContext, useState, useContext} from 'react';
import List from './ItemList';
import { listContext } from './ItemListContext';

const ItemList = () => {
    const [list, setList] = useContext(listContext);

console.log(list);

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