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
      <Link className="block text-2xl font-bold text-right mt-4 mr-4 mb-4"
        href="/">Return to Home Page {'\u003e'}{'\u003e'}</Link>
    </main>
  );
}