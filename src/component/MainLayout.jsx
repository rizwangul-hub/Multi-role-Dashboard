import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "../paging/Header";
import Mony from "../paging/Money/Mony";

const MainLayout = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ INSIDE component
  if (!user) {
    return <Navigate to="/logout" />;
  }

  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-[80%]">
        <Header />
        <Mony />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;