import React from 'react';
import { Download } from 'lucide-react';

const MetricItem = ({ label, value, percentage, isUp }) => (
  <div className="flex flex-col">
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      {percentage && (
        <span className={`text-[10px] font-bold flex items-center gap-0.5 ${isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
          {isUp ? '▲' : '▼'} {percentage}
        </span>
      )}
    </div>
    <span className="text-gray-400 text-sm font-medium">{label}</span>
  </div>
);

const AnalyticsDashboard = () => {
  return (
    <div className="p-8 bg-gray-50 flex flex-col gap-6">
      
      <div className="max-w-3xl bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">Performance Metrics</h2>
          <button className="flex items-center gap-2 bg-[#009999] text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors">
            <Download size={18} />
            <span className="font-medium">Export</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-4">
          <MetricItem label="Total Leads" value="500" percentage="2.0%" isUp={true} />
          <MetricItem label="Conversion Rate" value="15%" percentage="0.8%" isUp={true} />
          <MetricItem label="Revenue Generated" value="UGX. 50M" percentage="2.0%" isUp={false} />
          <MetricItem label="ROI" value="300%" percentage="1.26%" isUp={true} />
        </div>
      </div>

      <div className="max-w-3xl bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Website Analytics</h2>
        <div className="grid grid-cols-2 gap-x-4">
          <MetricItem label="Visits" value="5000" />
          <MetricItem label="Conversions" value="500" />
        </div>
      </div>

    </div>
  );
};

export default AnalyticsDashboard;