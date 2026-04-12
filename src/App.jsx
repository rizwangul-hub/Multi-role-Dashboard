import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Signup from "./paging/Signup";
import Graph from "./paging/Graph";
import graph from "../public/image/bar-chart.png";
import Selling from "./paging/selling/Selling";
import Sales from "./paging/Sales";
import Header from "./paging/Header";
import Mony from "./paging/Money/Mony";
import SideBar from "./component/SideBar";
import DashboardLayout from "./component/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./component/admin/AdminSidebar";
import SignIn from "./paging/SignIn";
import Login from "./paging/Login";
import Dashboard from "./component/Dashboard";
import Insight from "./paging/insight/Insight";
import TeamTable from "./paging/department/TeamTable";
import ProductTable from "./paging/product/ProductTable";
import ContactTable from "./paging/contact/ContactTable";
import TaskTable from "./paging/task/TaskTable";
import LeadPipeline from "./paging/lead/LeadPipeline";
import SettingsLayout from "./paging/setting/SettingsLayout";
import BasicInfo from "./paging/setting/BasicInfo";
import TeamTables from "./paging/setting/TeamTables";
import Integrations from "./paging/setting/Integrations";
import { ModeToggle } from "./component/mode-toggle";
// import graph_2 from "../public/image"
// import icons_1 from "../public/icons/icon (5).png"
// import icons_2 from "../public/icons/icon (6).png"

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      {/* <Signup/> */}

      <Routes>
        <Route path="/dashboards" element={<Dashboard />}>
          <Route path="dashboard" element={<DashboardLayout />} />
          <Route path="insight" element={<Insight />} />
          <Route path="teamTable" element={<TeamTable />} />
          <Route path="productTable" element={<ProductTable />} />
          <Route path="contactTable" element={<ContactTable />} />
          <Route path="taskTable" element={<TaskTable />} />
          <Route path="lead" element={<LeadPipeline />} />
          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<BasicInfo />} />
            <Route path="team" element={<TeamTables />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="preferences" element={<ModeToggle />} />
            {/* <Route path="data" element={<DataManagement />} /> */}
          </Route>
          {/* here setting Route make */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
