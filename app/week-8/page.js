"use client";
import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsJson from "./items.json";

export default function Page() {
    const [items, setItems] = useState([...itemsJson]);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Add new item to items
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const itemName = (item.name && typeof item.name === 'string') 
        ? item.name.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') 
        : '';
        setSelectedItemName(itemName);
    };

    return (
        <main className="flex flex-row p-5 bg-indigo-950 min-w-screen min-h-screen">
            <div className="flex flex-col w-1/2 p-5">
                <h1 className="text-4xl font-bold">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} /> 
            </div>
            <div className="flex flex-col w-1/2 p-5">
                <MealIdeas ingredient={selectedItemName} /> 
            </div>
        </main>
    );
}