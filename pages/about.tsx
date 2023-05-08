import * as React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import Head from "next/head";
//import Header from "@/components/common/header";
import dynamic from "next/dynamic";
import { MainLayout, AdminLayout } from "@/components/layout";

const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
  loading: () => <p>Loading header ...</p>,
});

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
  const router = useRouter();
  console.log("About query: ", router.query);

  return (
    <>
      <Head>
        <title>About page | Paul La</title>
      </Head>
      <div>
        <h1>This is about page</h1>
        <br />
        <p>Hi My name is Paul La</p>
        <Link href="https://facebook.com/lathinh" target="_blank">
          This is Facebook Link
        </Link>
      </div>
    </>
  );
}

AboutPage.Layout = MainLayout;
