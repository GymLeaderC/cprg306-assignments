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

  // Defining the Form UI 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        max="99"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
      <button type="submit">+</button>
    </form>
  );
}
