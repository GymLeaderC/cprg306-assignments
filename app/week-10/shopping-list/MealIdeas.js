/**
 * @author Joshua Couto - 03.22.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 8: Fetching Data
*/

"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals ?? [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="m-4">
      <h2 className="text-white font-bold text-xl mb-4 mx-2">
        {ingredient ? `Meal Ideas for ${ingredient}` : "Select an item to see meal ideas"}
      </h2>
      <ul className="flex flex-col gap-2 mx-2">
        {meals.map((meal) => (
          <li key={meal.idMeal}
            className="bg-slate-100 text-black font-bold rounded-lg p-4 border-l-4 border-green-500">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}

