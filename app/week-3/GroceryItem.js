/*
Joshua Couto - 01.24.26
Assignment 3: Components & Props
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

/* 
Item Component which accepts name, quantity, and category as props and then
displays them in a list item element.
*/

export default function Item({name, quantity, category}) {
  return (
    <li>
      Product Name: {name} Quantity: {quantity} Category: {category}
    </li>
  );
}