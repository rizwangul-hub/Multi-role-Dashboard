import React from "react";
import { Share2, MessageSquare } from "lucide-react"; // Using lucide for clean icons

const Integrations = () => {
  return (
    <div className="p-8 max-w-4xl  font-sans bg-white  text-[#1A1C1E]">
      <h1 className="text-2xl font-bold mb-8">
        Connect NovaCRM to other tools that your team uses
      </h1>

      {/* Project Management Section */}
      <section className="mb-10">
        <h2 className="text-lg font-bold">Project Management</h2>
        <p className="text-gray-500 text-sm mb-4">
          Sync your previews with your tickets
        </p>

        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-3xl hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-[#2684FF] p-2 rounded-lg text-white">
              <Share2 size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Jira</h3>
              <p className="text-gray-500 text-sm">
                Create Jira tickets from threads
              </p>
            </div>
          </div>
          <button
            disabled
            className="px-6 py-2 bg-gray-100 text-gray-400 font-bold rounded-xl text-sm cursor-not-allowed"
          >
            Connect
          </button>
        </div>
      </section>

      {/* Messaging Section */}
      <section>
        <h2 className="text-lg font-bold">Messaging</h2>
        <p className="text-gray-500 text-sm mb-4">
          Sync your previews with your messages
        </p>

        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-3xl hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 border border-gray-100 rounded-lg shadow-sm">
              {/* Simplified Slack Logo Representation */}
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2.5 h-2.5 bg-[#36C5F0] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#2EB67D] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#E01E5A] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[#ECB22E] rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">Slack</h3>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#2EB67D] rounded-full"></span>
                  <span className="text-[#2EB67D] text-[10px] font-bold uppercase tracking-wider">
                    Active
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Create Slack broadcasts from threads
              </p>
            </div>
          </div>
          <button className="px-6 py-2 bg-[#009999] text-white font-bold rounded-xl text-sm hover:bg-[#007A7A] transition-colors">
            Open integration
          </button>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
