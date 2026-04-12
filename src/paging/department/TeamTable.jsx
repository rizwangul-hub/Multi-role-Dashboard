import React from "react";
import {
  Search,
  Filter,
  UserPlus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const StatusBadge = ({ status }) => {
  const isActive = status === "Active";
  return (
    <div
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium ${
        isActive
          ? "bg-emerald-50 text-emerald-600"
          : "bg-orange-50 text-orange-600"
      }`}
    >
      {status}
      <span className="text-[10px]">▼</span>
    </div>
  );
};

const TeamTable = () => {
  const userRole = localStorage.getItem("role");
  const isAdmin = userRole?.toLowerCase() === "admin";

  const members = [
    {
      id: "01",
      name: "Natukunda Cathy",
      email: "cathy@gmail.com",
      status: "Active",
      joined: "May 24, 2024",
      task: "Follow up on leads from trade show",
    },
    {
      id: "02",
      name: "Colin Lubembe",
      email: "colin@gmail.com",
      status: "Inactive",
      joined: "Apr 24, 2024",
      task: "None",
    },
    {
      id: "03",
      name: "Nanyonga Rahmah",
      email: "nanyongarah@gmail.com",
      status: "Inactive",
      joined: "May 14, 2024",
      task: "None",
    },
    {
      id: "04",
      name: "Natukunda Cathy",
      email: "catheriney@gmail.com",
      status: "Active",
      joined: "May 16, 2024",
      task: "Close deals with potential clients A, B, and C",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 ">
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">
              Customer Support
            </h1>
            <span className="px-3 py-0.5 border border-gray-300 rounded-full text-sm font-medium text-gray-600">
              100 members
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 bg-[#009999] text-white px-5 py-2 rounded-xl hover:bg-teal-700 transition font-medium">
              Invite member
            </button>
          </div>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm font-semibold border-b border-gray-100">
                <th className="pb-4 pr-4">#</th>
                <th className="pb-4 px-4">Member</th>
                <th className="pb-4 px-4">Status</th>
                <th className="pb-4 px-4">Joined</th>
                <th className="pb-4 px-4">Assigned Tasks</th>
                {isAdmin && <th className="pb-4 pl-4 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="group hover:bg-gray-50/50 transition"
                >
                  <td className="py-5 pr-4 font-bold text-gray-900">
                    {member.id}
                  </td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.id}`}
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-sm text-gray-400 font-medium">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4">
                    <StatusBadge status={member.status} />
                  </td>
                  <td className="py-5 px-4 text-gray-400 font-medium">
                    {member.joined}
                  </td>
                  <td className="py-5 px-4 text-gray-400 font-medium max-w-xs truncate">
                    {member.task}
                  </td>
                  {isAdmin && (
                    <td className="py-5 pl-4 text-right">
                      <div className="flex justify-end gap-3">
                        <button className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition">
                          <Pencil size={18} />
                        </button>
                        <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400 font-medium">
          <div>Shows 4 results of 100</div>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded text-gray-300">
              <ChevronLeft size={20} />
            </button>
            <button className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center">
              2
            </button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center">
              3
            </button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center">
              4
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight size={20} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TeamTable;
