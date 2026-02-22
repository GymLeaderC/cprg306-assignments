/**
 * @author Joshua Couto - 02.22.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 6: Interactivity w/ Forms
*/

import Item from './Item';
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