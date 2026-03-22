/**
 * @author Joshua Couto - 03.22.26
 * Southern Alberta Institute of Technology
 * CPRG-306 - Web Development 2
 * Assignment 8: Fetching Data
*/

import Link from "next/link";

// Landing Page Function for my CPRG306 Assignments
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href="/week-2">Week 2 - </Link>
        <Link href="/week-3">Week 3 - </Link>
        <Link href="/week-4">Week 4 - </Link>
        <Link href="/week-5">Week 5 - </Link>
        <Link href="/week-6">Week 6 - </Link>
        <Link href="/week-7">Week 7 - </Link>
        <Link href="/week-8">Week 8   </Link>
      </div>
    </main>
  );
}
