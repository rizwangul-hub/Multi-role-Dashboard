import React from 'react';
import { Filter, Plus, Pencil, Trash2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const TaskTable = () => {
  const tasks = [
    { id: '01', subject: 'Follow up on leads from trade show', priority: 'High', status: 'Incomplete', assigned: 'Alison Greene', contact: 'Natukunda Cathy', date: 'Apr 24, 2024' },
    { id: '02', subject: 'Close deals from client A', priority: 'Normal', status: 'Complete', assigned: 'Mary Bata', contact: 'Luswata Andrew', date: 'Jan 24, 2024' },
    { id: '03', subject: 'Register for upcoming webinar', priority: 'Low', status: 'Complete', assigned: 'Alex War', contact: 'Alur John', date: 'Mar 24, 2024' },
    { id: '04', subject: 'Get deals from client B', priority: 'High', status: 'Complete', assigned: 'Mary Bata', contact: 'Ema Wambi', date: 'Apr 26, 2024' },
  ];

  return (
    <div className="p-8 bg-gray-50  font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
        
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
            <span className="px-4 py-1 border border-gray-300 rounded-full text-sm font-semibold text-gray-700">
              10 tasks
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-2xl hover:bg-gray-50 transition font-semibold text-gray-700">
              <Filter size={20} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 bg-[#009999] text-white px-8 py-2.5 rounded-2xl hover:bg-teal-700 transition font-bold shadow-md shadow-teal-100">
              Create New
            </button>
          </div>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm font-semibold border-b border-gray-100">
                <th className="pb-5 pl-2">#</th>
                <th className="pb-5 px-4">Subject</th>
                <th className="pb-5 px-4">Priority</th>
                <th className="pb-5 px-4">Status</th>
                <th className="pb-5 px-4">Assigned To</th>
                <th className="pb-5 px-4">Contact Name</th>
                <th className="pb-5 px-4">Due date</th>
                <th className="pb-5 pr-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {tasks.map((task) => (
                <tr key={task.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 pl-2 font-bold text-gray-950 text-lg">{task.id}</td>
                  <td className="py-6 px-4 font-bold text-gray-800 text-lg max-w-[240px]">
                    {task.subject}
                  </td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{task.priority}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{task.status}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{task.assigned}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{task.contact}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{task.date}</td>
                  <td className="py-6 pr-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400 font-bold">
          <div>Shows 4 results of 10</div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:text-gray-900 transition-colors"><ChevronLeft size={20} /></button>
            <button className="w-9 h-9 bg-gray-900 text-white rounded-xl flex items-center justify-center">1</button>
            <button className="w-9 h-9 hover:bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center transition-colors">2</button>
            <button className="w-9 h-9 hover:bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center transition-colors">3</button>
            <button className="w-9 h-9 hover:bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center transition-colors">4</button>
            <button className="p-2 hover:text-gray-900 transition-colors"><ChevronRight size={20} /></button>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default TaskTable;