import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./admin/AdminSidebar";
import UserSidebar from "./customer/Customer"; // make sure you import this
import Header from "../paging/Header";
// import Marketing from "./marketing/Marketing";
import Customer from "./customer/Customer";
import Marketing from "./Marketing/Marketing";
import Mony from "../paging/Money/Mony";
import CustomerComp from "../paging/dashboard-layout/CustomerCom";
import Tables from "../paging/dashboard-layout/small-component/Tables";
import Segmentation from "../paging/dashboard-layout/Segmentation";
import CustomerTable from "../paging/dashboard-layout/Customer-Movements";
import Sales from "./sales/Sales";
// import { Table } from '@mantine/core';

const Dashboard = () => {
  const role = localStorage.getItem("role");

  const renderSidebar = () => {
    if (role === "admin") return <AdminSidebar />;
    if (role === "marketing") return <Marketing />;
    if (role === "customer") return <Customer />;
    if (role === "sale") return <Sales />;
    return null;
    console.log(role);
  };

  return (
    <div className="flex w-full">
      {renderSidebar()}

      <div className="w-[80%]">
        <Header />
        <Mony />

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
