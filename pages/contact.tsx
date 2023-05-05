import { AdminLayout, MainLayout } from "@/components/layout";
import * as React from "react";

export interface IContactPageProps {}

export default function ContactPage(props: IContactPageProps) {
  return (
    <div>
      <h1>This is contact page</h1>
    </div>
  );
}

ContactPage.Layout = MainLayout;
