/**
 * @author Joshua Couto - 03.24.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 10: Cloud Firestore
*/

"use client"

import { useState } from "react";

const initialState = { name: "", quantity: 1, category: "Produce" };

// Defining New Item Functional Compononent

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState(initialState);
  
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setItem((prev) => 
      ({ ...prev, [name]: type === "number" ? Number(value) : value 
    }));
  }

  // Defining the handleSubmit Function

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { ...item, id: crypto.randomUUID() };
    onAddItem(newItem);

    setItem(initialState);
  };

  // Defining How the Form UI Renders

  return (
    <form onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 m-4">
      <label className="text-black font-bold block mb-1">Product</label>
      <input className="w-full p-2 rounded-md border-2 border-black text-black mb-4"
        type="text"
        name="name"
        value={item.name}
        onChange={handleChange}
        required
      />
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="text-black font-bold block mb-1">Quantity</label>
          <input className="w-full h-[42px] p-2 rounded-md border-2 border-black text-black"
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            min="1"
            max="99"
          />
        </div>
        <div className="w-1/2">
          <label className="text-black font-bold block mb-1">Department</label>
          <select className="w-full h-[42px] p-2 rounded-md border-2 border-black text-black"
            name="category"
            value={item.category}
            onChange={handleChange}>
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
