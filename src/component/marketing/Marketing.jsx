import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { FcDepartment } from "react-icons/fc";
import { MdOutlineContacts } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { LuSettings } from "react-icons/lu";

const Marketing = () => {
  return (
    <div className="w-[20%] h-screen flex flex-col justify-between bg-[#faf6f6]">
      <ul className="flex flex-col w-full justify-center items-center gap-4 mt-8">
        <li className="p-4 border w-[80%] rounded-2xl bg-white  text-black hover:bg-blue-400 ">
          <Link
            to="/dashboards/MarketingDashboard"
            className="flex gap-1 text-2xl"
          >
            <div className="text-3xl">
              <IoHomeOutline />
            </div>
            Dahboar
          </Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link
            to="/dashboards/customerDepartment"
            className="flex gap-1 text-2xl"
          >
            <div className="text-3xl">
              <FcDepartment />
            </div>
            Department
          </Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/productTable" className="flex gap-1 text-2xl">
            <div className="text-3xl">
              <HiOutlineArchiveBox />
            </div>
            Products
          </Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/contactTable" className="flex gap-1 text-2xl">
            <div className="text-3xl">
              <MdOutlineContacts />
            </div>
            Contacts
          </Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/taskTable" className="flex gap-1 text-2xl">
            <div className="text-3xl">
              <CgNotes />
            </div>
            Task Manager
          </Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/dashboards/cutomerSetting" className="flex gap-1 text-2xl">
            <div className="text-3xl">
              <LuSettings />
            </div>
            Setting
          </Link>
        </li>
        <li className="p-4 border w-[80%] rounded-2xl bg-white text-black hover:bg-blue-400 ">
          <Link to="/login" className="flex gap-1 text-2xl">
            <div className="text-3xl">
              <MdLogout />
            </div>
            Sign OUt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Marketing;
