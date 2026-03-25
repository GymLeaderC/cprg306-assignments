/**
 * @author Joshua Couto - 03.24.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 10: Cloud Firestore
*/

import { db } from "../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];

const itemsRef = collection(db, "users", userId, "items");

const q = query(itemsRef);

const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  items.push({ id: doc.id, ...doc.data() });
});

return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");

  const docRef = await addDoc(itemsRef, item);

  return docRef.id;
}