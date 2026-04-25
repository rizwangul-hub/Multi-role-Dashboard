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
import ThemeToggle from "./paging/setting/ThemeToggle";
import ExportData from "./paging/setting/ExportData";
import CustomerDashboard from "./component/customer/customerComponent/CustomerDashboard";
import CutomerDepartment from "./component/customer/customerComponent/CustomerDepartment";
import CusomerSetting from "./component/customer/customerComponent/setting/CusmoterSetting";
import MarketingDashboard from "./component/marketing/components/MarketingDashboard";
import ProtectedRoute from "./component/ProtectedRoute";
// import graph_2 from "../public/image"
// import icons_1 from "../public/icons/icon (5).png"
// import icons_2 from "../public/icons/icon (6).png"

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      {/* <Signup/> */}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignIn />} />

        {/* Protected Routes - All require authentication */}
        <Route
          path="/dashboards"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="customerDashboard"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="MarketingDashboard"
            element={
              <ProtectedRoute allowedRoles={["marketing"]}>
                <MarketingDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="customerDepartment"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <CutomerDepartment />
              </ProtectedRoute>
            }
          />
          <Route
            path="insight"
            element={
              <ProtectedRoute allowedRoles={["admin", "marketing", "sale"]}>
                <Insight />
              </ProtectedRoute>
            }
          />
          <Route
            path="teamTable"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <TeamTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="productTable"
            element={
              <ProtectedRoute allowedRoles={["admin", "sale"]}>
                <ProductTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="contactTable"
            element={
              <ProtectedRoute allowedRoles={["admin", "sale", "marketing"]}>
                <ContactTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="taskTable"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "sale", "marketing", "customer"]}
              >
                <TaskTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="lead"
            element={
              <ProtectedRoute allowedRoles={["admin", "sale"]}>
                <LeadPipeline />
              </ProtectedRoute>
            }
          />
          <Route
            path="cutomerSetting"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <CusomerSetting />
              </ProtectedRoute>
            }
          >
            <Route index element={<BasicInfo />} />
            <Route path="preferences" element={<ThemeToggle />} />
            <Route path="data" element={<ExportData />} />
          </Route>
          <Route
            path="settings"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <SettingsLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<BasicInfo />} />
            <Route path="team" element={<TeamTables />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="preferences" element={<ThemeToggle />} />
            <Route path="data" element={<ExportData />} />
          </Route>
          {/* here setting Route make */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
