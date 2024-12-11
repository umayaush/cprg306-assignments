"use client";

import {useState} from "react";

import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    
    items.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
    
    const changeFilter = (value) => {
        setSortBy(value);
    };

    return (
        <div>
            <div className="flex flex-row py-3 mt-6 font-bold">
                <h2>Sort By:</h2>
                <button type="button" onClick={() => changeFilter("name")} className={`${sortBy === 'name' ? 'bg-yellow-600' : 'bg-yellow-800'} px-4 ml-4 rounded-md`}>Name</button>
                <button type="button" onClick={() => changeFilter("category")} className={`${sortBy === 'category' ? 'bg-yellow-600' : 'bg-yellow-800'} px-4 ml-4 rounded-md`}>Category</button>
            </div>
            <ul>
                {items.map((item) => (
                    <Item 
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={onItemSelect}
                    />
                ))}
            </ul>
        </div>
    );
}