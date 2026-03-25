/**
 * @author Joshua Couto - 03.24.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 10: Cloud Firestore
*/

"use client"

import ItemList from "./ItemList"
import NewItem from "./NewItem"
import MealIdeas from "./MealIdeas"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useUserAuth } from "../../contexts/AuthContext"
import { getItems, addItem } from "../_services/shopping-list-service"

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  
  const loadItems = async () => {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-white text-xl">
          Please{" "}
          <a href="/week-10" className="text-green-500 underline">
            log in
          </a>{" "}
          to view the shopping list.
        </p>
      </main>
    );
  }

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
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