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
    <div className="min-h-[100vh] mx-auto w-full max-w-screen-xl layout-main">
      <Header />
      <div className="column w-full ">
        <div className="main-container p-5 bg-white rounded-lg min-h-[80vh]">
          {children}
          <p>Main Layout</p>
        </div>
      </div>
    </div>
  );
}
