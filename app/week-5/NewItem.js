/*
Joshua Couto - 02.12.26
Assignment 5: Basic Interactivity
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

"use client"

import { useState } from "react";

// Defining New Item Functional Compononent

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Defining the handleSubmit Function

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item)
    alert(`New Item Added: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  // Defining How the Form UI Renders

  return (
    <form onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 m-4 max-w-md">
      <label className="text-black font-bold block mb-1">Product</label>
      <input className="w-full p-2 rounded-md border-2 border-black text-black mb-4"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="text-black font-bold block mb-1">Quantity</label>
          <input className="w-full h-[42px] p-2 rounded-md border-2 border-black text-black"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            max="99"
          />
        </div>
        <div className="w-1/2">
          <label className="text-black font-bold block mb-1">Department</label>
          <select className="w-full h-[42px] p-2 rounded-md border-2 border-black text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="w-10 h-10 rounded-full border-2 border-green-500 bg-green-500 text-white font-bold text-xl" type="submit">+</button>
      </div>
    </form>
  );
}
