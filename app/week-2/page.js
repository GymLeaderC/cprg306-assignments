/*
Joshua Couto - 01.22.26
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

import StudentInfo from "./StudentInfo";

// Page Function for my Week 2 Assignment

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}

/* PRACTICE: Using StudentInfo2 component (but not really)

export default function Page1() {
  return (
    <main>
        <h1>Shopping List</h1>
        <StudentInfo name="Joshua" githubURL="https://github.com/GymLeaderC/cprg306-assignments" />
    </main>
  );
}

*/