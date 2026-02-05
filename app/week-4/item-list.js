/*
Joshua Couto - 01.24.26
Assignment 3: Components & Props
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

import Item from './item';
import items from './items.json';

export default function ItemList() {
  return (
    <ul className="space-y-4 mb-2">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}