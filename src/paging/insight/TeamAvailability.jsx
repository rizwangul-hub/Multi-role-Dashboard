import React from 'react';

const TeamAvailability = () => {
  const teamMembers = [
    { 
      name: "Natukunda Cathy", 
      email: "cathy@gmail.com", 
      assigned: 50, 
      complete: 20, 
      img: "https://via.placeholder.com/150" 
    },
    { 
      name: "Colin Lubembe", 
      email: "colin@gmail.com", 
      assigned: 10, 
      complete: 7, 
      img: "https://via.placeholder.com/150" 
    },
    { 
      name: "Nanyonga Rahmah", 
      email: "nanyongarah@gmail.com", 
      assigned: 20, 
      complete: 11, 
      img: "https://via.placeholder.com/150" 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white border border-gray-200 rounded-3xl shadow-sm font-sans">
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">Team Availability</h2>
      
      {/* Table Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr] pb-4 border-b border-gray-100 text-gray-600 font-medium text-lg">
        <div>Name</div>
        <div className="text-right sm:text-left">Assigned Tasks</div>
        <div className="text-right">Complete Tasks</div>
      </div>

  
      <div className="divide-y divide-gray-100">
        {teamMembers.map((member, index) => (
          <div key={index} className="grid grid-cols-[2fr_1fr_1fr] py-6 items-center">
            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-16 h-16 rounded-full object-cover shadow-sm"
              />
              <div>
                <h3 className="text-gray-900 font-bold text-lg">{member.name}</h3>
                <p className="text-gray-400 font-medium">{member.email}</p>
              </div>
            </div>

            {/* Stats Sections */}
            <div className="text-gray-400 text-xl font-medium text-right sm:text-left">
              {member.assigned}
            </div>
            <div className="text-gray-400 text-xl font-medium text-right">
              {member.complete}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAvailability;