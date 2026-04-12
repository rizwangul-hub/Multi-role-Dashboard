import React from "react";
import { FiPlus, FiMoreHorizontal, FiMail, FiPhone } from "react-icons/fi";

const Card = ({ title, badge, name, type, location, email, phone, tag }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 border border-gray-200 w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs text-gray-500">Client : {name}</p>
        <span className="text-xs text-orange-500 font-semibold">{tag}</span>
      </div>

      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800">{title}</h2>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-1">{type}</p>

      <div className="text-xs text-gray-400 mb-2 flex items-center gap-1">
        📍 {location}
      </div>

      <div className="text-xs text-orange-500 flex items-center gap-1">
        <FiMail /> {email} | <FiPhone /> {phone}
      </div>

      <p className="text-xs text-gray-500 mt-2">{tag === "75" ? "Website Inquiry" : tag === "90" ? "Referral" : "Trade Show"}</p>
    </div>
  );
};

const Column = ({ title, count, children }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-3 w-full">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-gray-700">{title}</h3>
          <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-full">
            {count}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FiPlus />
          <FiMoreHorizontal />
        </div>
      </div>

      <div className="space-y-3">{children}</div>

      <button className="mt-3 w-full flex items-center justify-center gap-1 text-gray-500 text-sm">
        <FiPlus /> New
      </button>
    </div>
  );
};

const LeadPipeline = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-500">Home &gt; Lead Pipeline</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm">
          + New Board
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Column title="Lead" count={1}>
          <Card
            title="ERP Solution"
            badge="New Lead"
            name="Lubembe Collin"
            type="Individual"
            location="Kampala, Uganda"
            email="collin@gmail.com"
            phone="+256706210793"
            tag="75"
          />
        </Column>

        <Column title="Prospect" count={1}>
          <Card
            title="Web Maintenance"
            badge="Contacted"
            name="ITO Corporation"
            type="Company"
            location="Kampala, Uganda"
            email="info@itocorp.com"
            phone="+256706210792"
            tag="90"
          />
        </Column>

        <Column title="Customer" count={1}>
          <Card
            title="Mobile App"
            badge="Active"
            name="Kenny Solutions"
            type="Company"
            location="Kampala, Uganda"
            email="info@kennysol.com"
            phone="+256708201732"
            tag="100"
          />
        </Column>
      </div>
    </div>
  );
};

export default LeadPipeline;