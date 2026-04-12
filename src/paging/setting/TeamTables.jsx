import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { Pencil, Trash2 } from "lucide-react";

const users = [
  {
    name: "Rahmah Nanyonga",
    email: "rahma@gmail.com",
    date: "May 24, 2024 - 09:00 AM",
    role: "Admin",
  },
  {
    name: "Collin Lubembe",
    email: "colin@gmail.com",
    date: "Apr 24, 2024 - 06:00 PM",
    role: "Sales",
  },
  {
    name: "Nanyonga Rahmah",
    email: "nanyongarah@gmail.com",
    date: "May 14, 2024 - 12:00 PM",
    role: "Support",
  },
  {
    name: "Natukunda Cathy",
    email: "catheriney@gmail.com",
    date: "May 16, 2024 - 01:00 PM",
    role: "Marketing",
  },
];

const roleStyles = {
  Admin: "bg-purple-600 text-white",
  Sales: "bg-yellow-500 text-black",
  Support: "bg-teal-500 text-white",
  Marketing: "bg-blue-500 text-white",
};

const TeamTables = () => {
  const userRole = localStorage.getItem("role");
  const isAdmin = userRole === "Admin";

  return (
    <div className="p-6 bg-black min-h-screen">
      <div className="bg-gray-200 rounded-t-lg px-4 py-3 flex items-center text-sm font-medium text-gray-700">
        <input type="checkbox" className="mr-4" />
        <div className="w-1/2">Name</div>
        <div className="w-1/3">Date Joined</div>
        <div className={isAdmin ? "w-1/6" : "w-1/6"}>Role</div>
        {isAdmin && <div className="w-1/6 text-right">Actions</div>}
      </div>

      {users.map((user, i) => (
        <div
          key={i}
          className="flex items-center px-4 py-4 border-b border-gray-700 text-white"
        >
          <input type="checkbox" className="mr-4" />

          <div className="w-1/2 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>

          <div className="w-1/3 text-sm text-gray-300">{user.date}</div>

          <div className="w-1/6">
            <span
              className={`px-3 py-1 text-xs rounded-md flex items-center gap-1 w-fit ${roleStyles[user.role]}`}
            >
              {user.role}
              {(user.role === "Support" || user.role === "Marketing") && (
                <FiChevronDown size={14} />
              )}
            </span>
          </div>

          {isAdmin && (
            <div className="w-1/6 flex justify-end gap-3">
              <button className="text-emerald-500 hover:scale-110 transition-transform">
                <Pencil size={18} />
              </button>
              <button className="text-rose-500 hover:scale-110 transition-transform">
                <Trash2 size={18} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamTables;
