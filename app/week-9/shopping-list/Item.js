/**
 * @author Joshua Couto - 03.22.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 9: Firebase Auth
*/

export default function Item({name, quantity, category, onSelect}) {
  return (
    <li className="flex flex-col bg-slate-100 text-black font-bold rounded-lg p-4" onClick={onSelect}>
      <p>{name}</p> 
      <p>Quantity: {quantity}</p> 
      <p>Category: {category}</p>
    </li>
  );
}