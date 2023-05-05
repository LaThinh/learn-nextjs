import { LayoutProps } from "@/models";
import * as React from "react";
import Header from "../common/header";

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <div className="layout-empty">
      <h3>Empty Layout</h3>
      <div className="main-container">{children}</div>
    </div>
  );
}
