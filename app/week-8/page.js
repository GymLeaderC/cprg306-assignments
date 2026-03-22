/**
 * @author Joshua Couto - 03.22.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 8: Fetching Data
*/

"use client"

import ItemList from "./ItemList"
import NewItem from "./NewItem"
import MealIdeas from "./MealIdeas"
import itemsData from "./items.json"
import Link from "next/link"
import { useState } from "react"

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
      const cleanName = item.name
        .split(",")[0]
        .replace(/\p{Emoji}/gu, "")
        .trim();

      setSelectedItem(cleanName);
    };

  return (
    <main className="bg-black min-h-screen">
      <div className="flex justify-between items-center bg-green-500 p-4">
        <h1 className="text-2xl font-bold text-white">Shopping List</h1>
        <Link className="text-sm font-bold text-white"
          href="/">Return to Home Page {'\u003e'}{'\u003e'}</Link>
      </div>
      <div className="flex">
        <div className="flex-1 min-w-0">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 min-w-0">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  )
}