import { LayoutProps } from "@/models";
import * as React from "react";
import Header from "../common/header";

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100vh] mx-auto w-full max-w-screen-xl layout-empty">
      <Header />
      <h3>Empty Layout</h3>
      <div className="main-container">{children}</div>
    </div>
  );
}
