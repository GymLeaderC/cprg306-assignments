/*
Joshua Couto - 01.22.26
Southern Alberta Institute of Technology
CPRG306 - Web Development 2
*/

import Link from "next/link";

// React Component which displays my name and GitHub Repo

export default function StudentInfo() {
  return (
    <div>
      <p>Joshua Couto</p>
      <Link href="https://github.com/GymLeaderC/cprg306-assignments">
        GitHub Repository</Link>
    </div>
  );
}

/* PRACTICE: StudentInfo component using props rather than hardcoding

export default function StudentInfo2({name, githubUrl}) {
  return (
    <div>
      <p>{name}</p>
      <Link href={githubUrl}>
        GitHub Repository</Link>
    </div>
  );
}

*/