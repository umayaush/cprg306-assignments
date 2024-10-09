"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="bg-white w-40 flex justify-between m-4 p-3 rounded-lg">
            <p className="text-black text-xl ">{quantity}</p>
            <div>
                <button onClick={decrement} disabled={quantity === 1} className="bg-sky-500 hover:bg-sky-700 font-bold w-9 h-7 rounded-lg mr-2 disabled:bg-gray-400 focus:ring-sky-200 focus:ring text-white">-</button>
                <button onClick={increment} disabled={quantity === 20} className="bg-sky-500 hover:bg-sky-700 font-bold w-9 h-7 rounded-lg disabled:bg-gray-400 focus:ring-sky-200 focus:ring text-white">+</button>
            </div>
        </div>
    );
} 