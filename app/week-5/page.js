/*
Joshua Couto - 02.12.26
Assignment 5: Basic Interactivity
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

import NewItem from "./NewItem"
import Link from "next/link"


// Defining How the Page Component Renders

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold mt-4 mb-4 ml-4 mr-2">Grocery List</h1>
      <NewItem/>
      <Link className="block text-2xl font-bold text-right mt-4 mr-4 mb-4"
        href="/">Return to Home Page {'\u003e'}{'\u003e'}</Link>
    </main>
  )
}
