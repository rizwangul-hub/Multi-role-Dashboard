import { Search, Filter, Download } from "lucide-react";

const data = [
  {
    id: "01",
    name: "Nakulunda Cathy",
    email: "cathy@gmail.com",
    status: "active",
    enrolled: "May 24, 2024",
    progress: 80,
  },
  {
    id: "02",
    name: "Colin Lubembe",
    email: "colin@gmail.com",
    status: "pending",
    enrolled: "Apr 24, 2024",
    progress: 50,
  },
  {
    id: "03",
    name: "Namyonga Rahmah",
    email: "namyongarah@gmail.com",
    status: "danger",
    enrolled: "May 14, 2024",
    progress: 30,
  },
  {
    id: "04",
    name: "Nakulunda Cathy",
    email: "cathriney@gmail.com",
    status: "active",
    enrolled: "May 16, 2024",
    progress: 70,
  },
];

const statusColors = {
  active: "bg-emerald-500",
  pending: "bg-amber-400",
  danger: "bg-rose-500",
};

export default function CustomerMovements() {
  return (
    <div className="p-6 bg-gray-950 text-white rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Customer Movements</h2>
          <span className="text-sm text-gray-400">506 contacts</span>
        </div>

        <button className="flex items-center gap-2 bg-teal-600 px-4 py-2 rounded-full hover:bg-teal-700">
          <Download size={16} /> Export
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {["View All", "Customer", "Prospect", "Lead"].map((tab, i) => (
            <button
              key={i}
              className={`px-4 py-1 rounded-full text-sm ${
                i === 0
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none ml-2 text-sm"
            />
          </div>

          <button className="flex items-center gap-2 bg-gray-800 px-4 py-1 rounded-full">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full">
        <div className="grid grid-cols-6 text-gray-400 text-sm border-b border-gray-700 pb-2">
          <span>#</span>
          <span>Customer</span>
          <span>Status</span>
          <span>Enrolled</span>
          <span>Progress</span>
          <span>Rating</span>
        </div>

        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center py-4 border-b border-gray-800"
          >
            <span>{item.id}</span>

            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-400">{item.email}</p>
            </div>

            <div>
              <div
                className={`w-20 h-3 rounded-full ${
                  statusColors[item.status]
                }`}
              />
            </div>

            <span>{item.enrolled}</span>

            <div className="flex items-center gap-2">
              <div className="w-full bg-gray-800 h-2 rounded-full">
                <div
                  className="h-2 bg-cyan-400 rounded-full"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <span className="text-xs">{item.progress}%</span>
            </div>

            <div className="text-gray-400">★★★★★</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
        <span>Shows 4 results of 100</span>

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((p) => (
            <button key={p} className="px-2 py-1 hover:text-white">
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
