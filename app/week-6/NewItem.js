/**
 * @author Joshua Couto - 02.22.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 6: Interactivity w/ Forms
*/

"use client"

import { useState } from "react";

// Defining New Item Functional Compononent

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  
  const categories = [
    "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods",
    "Canned Goods", "Dry Goods", "Beverages", "Snacks",
    "Household", "Other"
  ]

  // Defining the handleSubmit Function

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const item = { id, name, quantity, category };
    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  // Defining How the Form UI Renders

  return (
    <form onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 m-4">
      <label htmlFor="name" className="text-black font-bold block mb-1">Product</label>
      <input id="name" className="w-full p-2 rounded-md border-2 border-black text-black mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="mb-4">
        <label htmlFor="quantity" className="text-black font-bold block mb-1">Quantity</label>
        <input id="quantity" className="w-full h-[42px] p-2 rounded-md border-2 border-black text-black"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="99"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="text-black font-bold block mb-1">Department</label>
        <select id="category" className="w-full h-[42px] p-2 rounded-md border-2 border-black text-black"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </div>
      <div className="flex justify-end mt-6">
        <button className="w-16 h-16 rounded-xl border-2 border-green-500 bg-green-500 text-white font-bold text-2xl" type="submit">+</button>
      </div>
    </form>
  );
}
