import React from 'react'

const BasicInfo = () => {
  return (
    <div className="max-w-md bg-white p-8 rounded-3xl border border-gray-100">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">Full name</label>
          <input type="text" defaultValue="Rahmah Nanyonga" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-500" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
          <input type="email" defaultValue="rahmah123@gmail.com" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-500" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">Phone number</label>
          <input type="text" defaultValue="+256708210793" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-gray-500" />
        </div>
        
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-1">Profile picture</label>
          <p className="text-xs text-gray-400 mb-4 font-medium">We support only JPEGs or PNGs under 5MB</p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden" />
            <button type="button" className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-xl font-bold text-gray-600 text-sm">
              <span className="rotate-0 text-gray-400">↑</span> Upload
            </button>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button type="button" className="flex-1 py-3 border border-gray-200 rounded-2xl font-bold text-gray-600">Cancel</button>
          <button type="submit" className="flex-1 py-3 bg-[#009999] text-white rounded-2xl font-bold hover:bg-teal-700 transition">Save</button>
        </div>
      </form>
    </div>
  );
};
export default BasicInfo