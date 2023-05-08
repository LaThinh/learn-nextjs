import { LayoutProps } from "@/models";
import * as React from "react";
import Header from "../common/header";

export function AdminLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    console.log("Main Layout mounting");

    return () => console.log("Main Layout unmounted");
  }, []);

  return (
    <div className="min-h-[100vh] mx-auto w-full max-w-screen-xl layout-admin">
      <Header />
      <div className="columns flex w-full min-h-[80vh] justify-between gap-x-10">
        <div className="sidebar basis-1/5 bg-white rounded-lg p-3 border-1 border-gray-300">
          Sidebar
          <p>Admin Layout 2 columns</p>
        </div>
        <div className="main-container basis-4/5 bg-white rounded-lg p-4 border-1 border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
