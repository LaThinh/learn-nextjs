import * as React from 'react';
import Link from "next/link";

export interface IAboutPageProps {
}

export default function AboutPage (props: IAboutPageProps) {
  return (
    <div className="flex flex-col items-center">
      <h1>Title H1 Demo</h1>
      <br />
        <Link href="https://facebook.com/lathinh" target="_blank">Facebook</Link>
    </div>
  );
}
