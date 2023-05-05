import { LayoutProps } from "@/models";
import * as React from "react";
import Header from "../common/header";

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    console.log("Main Layout mounting");

    return () => console.log("Main Layout unmounted");
  }, []);
  return (
    <div className="flex flex-col items-center layout-main">
      <Header />
      <div className="column w-full max-w-screen-xl p-5 ">
        <div className="main-container bg-white rounded-lg min-h-[80vh]">
          {children}
          <p>Main Layout</p>
        </div>
      </div>
    </div>
  );
}
