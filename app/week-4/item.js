/*
Joshua Couto - 01.24.26
Assignment 3: Components & Props
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

export default function Item({name, quantity, category}) {
  return (
    <li className="flex flex-col bg-slate-100 text-black font-bold rounded-lg p-4 mr-2 ml-2">
      <p>{name}</p> 
      <p>Quantity: {quantity}</p> 
      <p>Category: {category}</p>
    </li>
  );
}