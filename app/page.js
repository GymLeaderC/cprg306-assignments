/*
Joshua Couto - 01.22.26
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
Assignment 2
*/

import Link from "next/link";

// Landing Page Function for my CPRG306 Assignments
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href="/week-2">Week 2 - </Link> 
        <Link href="/week-3">Week 3</Link> 
      </div>
    </main>
  );
}
