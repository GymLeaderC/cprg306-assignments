/*
Joshua Couto - 01.24.26
Assignment 3: Components & Props
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

import Item from "./GroceryItem"

// Mapped List of all Grocery Items

const items = [
  {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
  },
 
  {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
  },
  
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  
  {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  
  {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  
  {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  
  {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  
  {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  
  {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
]

/*
ItemList Component which renders a list of grocery items using
the Item Component I've created.
*/

export default function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}