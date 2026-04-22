import React from 'react';
import { Search, Filter, Plus, Pencil, Trash2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const ContactTable = () => {
    const userRole = localStorage.getItem("role");
  const isAdmin = userRole?.toLowerCase() === "admin";
  const isMarketing = userRole?.toLowerCase() === "marketing";
  const contacts = [
    { id: '01', name: 'Natukunda Cathy', email: 'cathy@gmail.com', phone: '+256708210793', status: 'Lead', source: 'Trade Show', date: 'Apr 24, 2024' },
    { id: '02', name: 'Luswata Andrew', email: 'andrew@gmail.com', phone: '+256776948906', status: 'Customer', source: 'Referral', date: 'Jan 24, 2024' },
    { id: '03', name: 'Lubembe Colin', email: 'colin@gmail.com', phone: '+256712967809', status: 'Lead', source: 'Cold Email', date: 'Mar 24, 2024' },
    { id: '04', name: 'Amanda Ann', email: 'info@goodwill.com', phone: '+256776233345', status: 'Prospect', source: 'Whatsapp', date: 'Apr 26, 2024' },
  ];

  return (
    <div className="p-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
        
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
            <span className="px-4 py-1 border border-gray-300 rounded-full text-sm font-semibold text-gray-700">
              506 contacts
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 w-72 bg-gray-50/50"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-2xl hover:bg-gray-50 transition font-semibold text-gray-700">
              <Filter size={20} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 bg-[#009999] text-white px-8 py-3 rounded-2xl hover:bg-teal-700 transition font-bold shadow-md shadow-teal-100">
              Create New
            </button>
          </div>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm font-semibold border-b border-gray-100">
                <th className="pb-5 pl-2">#</th>
                <th className="pb-5 px-4">Name</th>
                <th className="pb-5 px-4">Email</th>
                <th className="pb-5 px-4">Phone</th>
                <th className="pb-5 px-4">Status</th>
                <th className="pb-5 px-4">Lead Source</th>
                <th className="pb-5 px-4 text-nowrap">Date Added</th>
                <th className="pb-5 pr-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {contacts.map((contact) => (
                <tr key={contact.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 pl-2 font-bold text-gray-950 text-lg">{contact.id}</td>
                  <td className="py-6 px-4 font-bold text-gray-800 text-lg">{contact.name}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{contact.email}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{contact.phone}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{contact.status}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{contact.source}</td>
                  <td className="py-6 px-4 text-gray-400 font-medium text-lg">{contact.date}</td>
                  <td className="py-6 pr-2">
                    <div className="flex justify-end gap-4">
                      <button className="text-emerald-500 hover:scale-110 transition-transform">
                        <Pencil size={20} />
                      </button>
                    {isAdmin  && (
                      <button className="text-rose-500 hover:scale-110 transition-transform">
                        <Trash2 size={20} />
                      </button>
                    )}
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
          <div>Shows 4 results of 506</div>
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

export default ContactTable;