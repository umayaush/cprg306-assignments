"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    
    const [quantity, setQuantity] = useState(1);

    const [category, setCategory] = useState("produce");
   
    // Submit Function
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name, quantity, category};
        console.log(item);
        alert(`Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);
        setName("");
        setQuantity(1);
        setCategory("produce")
    };
    
    // Name Field Function
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Quantity Functions
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Category Field Functions
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <input className="bg-white w-96 flex m-4 p-3 rounded-lg text-black text-nd"
                    id="name" 
                    type="text" 
                    placeholder="Item Name"
                    value={name} 
                    onChange={(e) => handleNameChange(e)} 
                    required
                />

                <div className="flex justify-between">
                    {/* Quantity */}
                    <div className="bg-white w-40 flex justify-between mx-4 p-3 rounded-lg">
                        <p className="text-black text-xl ">{quantity}</p>
                        <div>
                            <button type="button" onClick={decrement} disabled={quantity === 1} className="bg-sky-500 hover:bg-sky-700 font-bold w-9 h-7 rounded-lg mr-2 disabled:bg-gray-400 focus:ring-sky-200 focus:ring text-white">-</button>
                            <button type="button" onClick={increment} disabled={quantity === 20} className="bg-sky-500 hover:bg-sky-700 font-bold w-9 h-7 rounded-lg disabled:bg-gray-400 focus:ring-sky-200 focus:ring text-white">+</button>
                        </div>
                    </div>

                    {/* Category Field */}
                    <select className="bg-white w-40 h-[3.25rem] flex mx-4 p-3 rounded-lg text-black text-md"
                    id="category" 
                    value={category} 
                    onChange={(e) => handleCategoryChange(e)}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-sky-500 hover:bg-sky-700 font-bold w-96 justify-center m-4 p-3 rounded-lg focus:ring-sky-400 focus:ring text-white flex">+</button>
            </form>
            
        </div>
        
    );

} 