import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export interface IHomePageProps {}

export default function HomePage(props: IHomePageProps) {
  const router = useRouter();

  function gotoDetailPage() {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 12345,
        ref: "social",
      },
    });
  }

  return (
    <div>
      <Head>
        <title>Homepage | Paul La</title>
      </Head>
      <header>
        <ul className="menu flex m-4">
          <li>
            <Link href="#">Home</Link>
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

      <main>
        <button
          className="button btn btn-primary 
          bg-sky-500 px-5 py-1 rounded-lg text-white 
          hover:bg-sky-700"
          onClick={gotoDetailPage}
        >
          Go to Detail Page
        </button>
      </main>
    </div>
  );
}
