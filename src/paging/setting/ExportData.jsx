import React from 'react';

const ExportData = () => {
  return (
    <div className="max-w-md p-6 bg-white font-sans">
      {/* Header Section */}
      <h2 className="text-xl font-bold text-gray-800">Export Data</h2>
      <p className="mt-1 text-sm text-gray-400">
        Export all info and profile metadata for Rahma.
      </p>

      {/* Input Group */}
      <div className="mt-6 flex h-10 w-full max-w-sm">
        <input
          type="text"
          placeholder="Pdf"
          className="w-full rounded-l-md border border-gray-200 px-4 text-sm text-gray-400 focus:border-[#42D3D8] focus:outline-none transition-colors"
        />
        <button 
          className="rounded-r-md bg-[#42D3D8] px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default ExportData;