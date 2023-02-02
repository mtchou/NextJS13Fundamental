import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <h2>
        {" "}
        <Link href="/home">Home</Link>
      </h2>
      <h2>
        <Link href="/blog">Blog</Link>
      </h2>
      <h2>
        {" "}
        <Link href="/conference">Conference</Link>
      </h2>
      <h2>
        {" "}
        <Link href="/settings">Settings</Link>
      </h2>
    </>
  );
}
