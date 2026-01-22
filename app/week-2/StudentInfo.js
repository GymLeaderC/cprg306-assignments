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