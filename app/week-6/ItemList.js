/**
 * @author Joshua Couto - 02.22.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 6: Interactivity w/ Forms
*/

"use client"

import { useState } from "react";
import Item from './Item.js';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  return (
    <div className="m-4">
      <div className="flex gap-2 mb-4 mx-2">
        <button
          className={`flex-1 px-4 py-2 rounded-lg font-bold ${
            sortBy === "name"
              ? "bg-green-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setSortBy("name")}>Name
        </button>
        <button
          className={`flex-1 px-4 py-2 rounded-lg font-bold ${
            sortBy === "category"
              ? "bg-green-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setSortBy("category")}>Category
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-2 mx-2 mb-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id} {...item} 
          />
        ))}
      </ul>
    </div>
  );
}