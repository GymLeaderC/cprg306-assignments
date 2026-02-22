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
    <main className="bg-black min-h-screen">
      <div className="flex justify-between items-center bg-green-500 p-4">
        <h1 className="text-2xl font-bold text-white">Shopping List</h1>
        <Link className="text-sm font-bold text-white" 
          href="/">Return to Home Page {'\u003e'}{'\u003e'}</Link>
      </div>
      <NewItem />
    </main>
  )
}
