/*
Joshua Couto - 01.24.26
Assignment 3: Components & Props
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

import ItemList from "./GroceryItemList"
import Link from "next/link"

/* 
Page Function which returns a main element wrapped around an 
h1 "Shopping List" header and the ItemList Component 
*/

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold mt-4 mb-4 ml-4 mr-2">Shopping List</h1>
      <ItemList />
      <Link className="text-2xl font-bold text-right"
        href="/cprg306-assignments/app/page.js">Home Page</Link>
    </main>
  );
}

