import * as React from "react";
import { GetStaticProps } from "next";
import { MainLayout } from "@/components/layout";
import Link from "next/link";

export interface IUserPageProps {
  users: any[];
}

export default function UserPage({ users }: IUserPageProps) {
  if (!users) return;
  return (
    <>
      <h1>List user</h1>
      <ul className="users grid grid-cols-2 gap-5">
        {users.map((user) => (
          <li key={user.id} className="p-5 border border-gray-500 rounded-xl user">
            <h3>
              Name: <span>{user.name}</span>
            </h3>
            <Link href="mailto:{user.email}">{user.email}</Link>
            <p>{user.phone}</p>
            <Link href={`/users/${user.id}`}>View Detail {user.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

UserPage.Layout = MainLayout;

export async function getStaticProps() {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await request.json();

  return {
    props: { users: data },
  };
}
