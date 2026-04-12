import React from "react";
import {
  Filter,
  Plus,
  Pencil,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductTable = () => {
  const userRole = localStorage.getItem("role");
  const isAdmin = userRole?.toLowerCase() === "admin";

  const products = [
    {
      id: "01",
      name: "Enterprise Software",
      price: "50M",
      qty: "100",
      date: "Apr 24, 2024",
    },
    {
      id: "02",
      name: "Web development",
      price: "30M",
      qty: "20",
      date: "Jan 24, 2024",
    },
    {
      id: "03",
      name: "Cloud Services",
      price: "2M",
      qty: "N/A",
      date: "Mar 24, 2024",
    },
    {
      id: "04",
      name: "Mobile App development",
      price: "40M",
      qty: "15",
      date: "Apr 26, 2024",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Products</h1>
            <span className="px-4 py-1 border border-gray-300 rounded-full text-sm font-semibold text-gray-600">
              10 members
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition text-gray-700 font-medium">
              <Filter size={20} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 bg-[#009999] text-white px-6 py-2.5 rounded-2xl hover:bg-teal-700 transition font-semibold shadow-sm">
              Add Product
            </button>
          </div>
        </header>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm font-semibold border-b border-gray-100">
                <th className="pb-5 pl-2">#</th>
                <th className="pb-5 px-4">Name</th>
                <th className="pb-5 px-4">Unit Price (UGX)</th>
                <th className="pb-5 px-4">Quantity Available</th>
                <th className="pb-5 px-4">Date Added</th>
                <th className="pb-5 pr-2 text-right">{isAdmin && "Actions"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-6 pl-2 font-bold text-gray-950 text-lg">
                    {item.id}
                  </td>
                  <td className="py-6 px-4 font-bold text-gray-800 text-lg">
                    {item.name}
                  </td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">
                    {item.price}
                  </td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">
                    {item.qty}
                  </td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">
                    {item.date}
                  </td>
                  <td className="py-6 pr-2">
                    {isAdmin && (
                      <div className="flex justify-end gap-4">
                        <button className="text-emerald-500 hover:scale-110 transition-transform">
                          <Pencil size={20} />
                        </button>
                        <button className="text-rose-500 hover:scale-110 transition-transform">
                          <Trash2 size={20} />
                        </button>
                        <button className="text-indigo-500 hover:scale-110 transition-transform">
                          <Eye size={22} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <footer className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400 font-semibold">
          <div>Shows 4 results of 10</div>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:text-gray-900 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 hover:bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-8 h-8 hover:bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center transition-colors">
              3
            </button>
            <button className="w-8 h-8 hover:bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center transition-colors">
              4
            </button>
            <button className="p-1 hover:text-gray-900 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default ProductTable;
