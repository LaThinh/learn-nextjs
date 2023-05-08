import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  //console.log("Render Header");
  const menuItems = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    {
      link: "/posts",
      title: "Posts",
      subMenu: [
        {
          title: "Post List",
          link: "/posts",
        },
        {
          title: "Post Details",
          link: "/post/detail",
        },
      ],
    },
    { link: "/contact", title: "Contact" },
    { link: "/users", title: "Users" },
  ];

  return (
    <header className="mx-auto py-3 px-5 rounded-xl bg-white mb-5 flex w-full sticky top-0 flex-row items-center justify-between">
      <div className="header-logo">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>
        <Link href="./">
          <Image
            className="logo relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
      </div>

      <ul className="menu flex flex-row m-2">
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className="mx-4 font-semibold 
              text-c-dark text-lg hover:text-c-blue"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="header-links">
        <ul>
          <li>
            <Link href="/login" className="text-c-dark text-lg hover:text-c-blue">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
