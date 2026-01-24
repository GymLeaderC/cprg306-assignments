/*
Joshua Couto - 01.24.26
Assignment 3: Components & Props
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

import ItemList from "./GroceryItemList"

/* 
Page Function which returns a main element wrapped around an 
h1 "Shopping List" header and the ItemList Component 
*/

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <ItemList/>
    </main>
  );
}

