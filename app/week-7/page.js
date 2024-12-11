"use client";
import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsJson from "./items.json";

export default function Page() {
    const [items, setItems] = useState([...itemsJson]);

    // Add new item to items
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className="p-5 bg-indigo-950 min-w-screen min-h-screen">
            <h1 className="text-4xl font-bold ">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
}