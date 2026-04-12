import React from 'react';
import { LogOut } from 'lucide-react';
const CustomerFeedback=() =>{
  const feedbackData = [
    { name: 'Natukunda Cathy', comment: 'I am very satisfied with the support i received.' },
    { name: 'Willy Gafa', comment: 'My router seems to be disconnected, cant access internet' },
    { name: 'Buteraba Lyn', comment: 'I appreciate your guidance through the process' },
    { name: 'Adam Ssebatta', comment: 'My router seems to be disconnected, cant access internet' },
  ];

  return (
    <div className=" bg-gray-100 flex items-center justify-center rounded-3xl p-6">
      <div className=" bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        
        <header className="flex items-center gap-9 justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-950 tracking-tight">
            Customer feedback
          </h1>
          <button className="flex items-center gap-2.5 bg-cyan-600 text-white font-medium px-6 py-3 rounded-full hover:bg-cyan-700 transition duration-150">
            <LogOut size={20} className="rotate-90" />
            <span>Export</span>
          </button>
        </header>

        <section className="space-y-6">
          {feedbackData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.comment}
                </p>
              </div>
              {index < feedbackData.length - 1 && (
                <div className="border-t border-gray-100" />
              )}
            </React.Fragment>
          ))}
        </section>

      </div>
    </div>
  );
}
export default CustomerFeedback;
