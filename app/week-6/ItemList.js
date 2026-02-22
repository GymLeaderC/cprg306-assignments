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
    <div>
      <button onClick={() => setSortBy("name")}>Name</button>
      <button onClick={() => setSortBy("category")}>Category</button>
      <ul className="space-y-4 mb-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}