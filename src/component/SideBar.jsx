import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ dashboard, overView, seller, area }) => {
  return (
    <div className="w-[100%] h-screen flex flex-col justify-between bg-black text-white">
      <ul className="flex flex-col w-full justify-center items-center gap-4 mt-8">
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/dashboard">{dashboard}</Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/graph">{overView}</Link>
        </li>
        {/* <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/product">Product</Link>
        </li> */}
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/sales">{seller}</Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/seleing">{area}</Link>
        </li>
      </ul>
      <div>
        <ul className="flex flex-col w-full justify-center items-center gap-4 mt-8">
          <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
            <Link
              to="/"
              onClick={() => {
                localStorage.removeItem("userData");
                localStorage.removeItem("role");
              }}
            >
              LogOut
            </Link>
          </li>
          <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("userData");
                localStorage.removeItem("role");
              }}
            >
              LogIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
