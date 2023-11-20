import React, { useState } from 'react';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex gap-[2px] my-5">
        <button
          onClick={() => handleTabClick(0)}
          className={`px-4 py-2 ${
            activeTab === 0 ? 'bg-white' : 'bg-gray-200'
          } ${activeTab === 0 ? 'border-t-4 border-pink-500' : ''}`}
        >
          Overview
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`px-4 py-2 font-semibold text-gray-800 ${
            activeTab === 1 ? 'bg-white' : 'bg-gray-200'
          } ${activeTab === 1 ? 'border-t-4 border-pink-500' : ''}`}
        >
          Curriculum
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2  ${
            activeTab === 2 ? 'bg-white' : 'bg-gray-200'
          } ${activeTab === 2 ? 'border-t-4 border-pink-500' : ''}`}
        >
          Instructor
        </button>
      </div>

      {/* Content for each tab */}
      {activeTab === 0 && (
        <div>
          <p>Content for Button 1</p>
          {/* Additional content goes here */}
        </div>
      )}
      {activeTab === 1 && (
        <div>
          <p>Content for Button 2</p>
          {/* Additional content goes here */}
        </div>
      )}
      {activeTab === 2 && (
        <div>
          <p>Content for Button 3</p>
          {/* Additional content goes here */}
        </div>
      )}
    </div>
  );
};

export default TabbedInterface;
