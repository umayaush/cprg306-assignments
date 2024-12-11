"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
};

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-2xl mt-12 font-bold">Meal Ideas</h2>
            {!ingredient ? (
                <p>Select an item to see meal ideas.</p>
            ) : (
                <>
                    <p>Here are some meal ideas using {ingredient}:</p>
                    <ul>
                        {meals.length > 0 ? (
                            meals.map((meal) => (
                                <li key={meal.idMeal} className="bg-indigo-900 my-5 p-3 max-w-[500px]">
                                    <p>{meal.strMeal}</p>
                                </li>
                            ))
                        ) : (
                            <p>No meal ideas found for {ingredient}</p>
                        )}
                    </ul>
                </>
            )}
        </div>
    );
}

