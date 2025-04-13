import React from "react";

import SideBar from "../Components/SideBar/SideBar";
import Navbar from "../Components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex  w-screen overflow-hidden h-screen">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden "> {/* إضافة padding-left بمقدار حوالي 50 بكسل */}
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}