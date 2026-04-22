import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const CusomerSetting = () => {
  const userRole = localStorage.getItem("role");
  const isAdmin = userRole?.toLowerCase() === "admin";


  const linkClass =
    "pb-2 text-sm text-gray-500 border-b-2 border-transparent";
  const activeClass = "text-teal-600 border-teal-600";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Fixed Navbar */}
      <div className="bg-white px-6 pt-4 border-b sticky top-0 z-10">
        <p className="text-xs text-gray-400 mb-3">Home &gt; Settings</p>

        <div className="flex gap-6">
          <NavLink to="" end className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            Basic Info
          </NavLink>
{isAdmin && (
            <NavLink to="team" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
              Team
            </NavLink>
            

          )}
          {isAdmin && (
            <NavLink to="integrations" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
              Integrations
            </NavLink>
          )}
          <NavLink to="preferences" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            Preferences
          </NavLink>
          <NavLink to="data" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            Data Management
          </NavLink>
        </div>
      </div>

      {/* Changing Content */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default CusomerSetting;