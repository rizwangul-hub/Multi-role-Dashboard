import React from "react";

const customers = [
  {
    id: 1,
    name: "Nabukunda Cathy",
    email: "cathy@gmail.com",
    status: "active",
    enrolled: "May 24, 2024",
    progress: 80,
  },
  {
    id: 2,
    name: "Colin Lubembe",
    email: "colin@gmail.com",
    status: "pending",
    enrolled: "Apr 24, 2024",
    progress: 50,
  },
  {
    id: 3,
    name: "Namyonga Rahmah",
    email: "namyongarah@gmail.com",
    status: "inactive",
    enrolled: "May 14, 2024",
    progress: 30,
  },
  {
    id: 4,
    name: "Nabukunda Cathy",
    email: "cathariney@gmail.com",
    status: "active",
    enrolled: "May 16, 2024",
    progress: 70,
  },
];

const getStatusColor = (status) => {
  if (status === "active") return "bg-green-500";
  if (status === "pending") return "bg-yellow-500";
  return "bg-red-500";
};

const CustomerTable = () => {
  return (
    <div className="p-6 rounded-2xl">

      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Customer Movements
            <span className="ml-3 text-sm bg-gray-700 px-3 py-1 rounded-full">
              506 contacts
            </span>
          </h2>
        </div>

        <button className="bg-teal-600 px-4 py-2 rounded-full text-sm">
          ⬇ Export
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          {["View All", "Customer", "Prospect", "Lead"].map((tab, i) => (
            <button
              key={i}
              className={`px-4 py-1 rounded-full text-sm ${
                i === 0 ? "bg-gray-700" : "bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 px-4 py-2 rounded-full text-sm outline-none"
          />
          <button className="bg-gray-800 px-4 py-2 rounded-full text-sm">
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div>
        <div className="grid grid-cols-6 text-gray-400 text-sm  border-gray-700 pb-2">
          <span>#</span>
          <span>Customer</span>
          <span>Status</span>
          <span>Enrolled</span>
          <span>Progress</span>
          <span>Rating</span>
        </div>

        {customers.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center py-4  border-gray-800"
          >
            <span className="text-gray-500">0{item.id}</span>

            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-xs">{item.email}</p>
            </div>

            <div>
              <span
                className={`px-4 py-1 rounded-full text-xs ${getStatusColor(
                  item.status
                )}`}
              ></span>
            </div>

            <span>{item.enrolled}</span>

            {/* Progress */}
            <div className="flex items-center gap-2">
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-teal-400 h-2 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <span className="text-sm">{item.progress}%</span>
            </div>

            {/* Rating */}
            <div className="text-gray-500">★★★★★</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-4 text-gray-500 text-sm">
        <span>Shows 4 results of 100</span>
        <div className="flex gap-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;