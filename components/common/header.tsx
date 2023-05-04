import Link from "next/link";
import * as React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  console.log("Render Header");

  return (
    <header className="flex flex-col items-center">
      <ul className="menu flex m-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Post</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li>
      </ul>
    </header>
  );
}
