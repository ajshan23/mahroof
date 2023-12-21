import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function Sample() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex">
      {/* Navbar for sm and md screens */}
      {showSidebar && (
        <div className="fixed top-0 left-0 w-full bg-gray-200 p-4 flex items-center justify-between">
          <div>
            <button onClick={toggleSidebar}>
              {/* Your "more" icon */}
              {/* For example: */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <span className="ml-2">Name</span>
          </div>
          <p>Paragraph</p>
        </div>
      )}

      {/* Sidebar Component */}
      {showSidebar && <Sidebar />}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden overflow-x-auto p-8">
        {/* Your main content here */}
        <h1 className="text-3xl font-bold mb-4">Main Content</h1>
        <p>Your content goes here...</p>
      </div>
    </div>
  );
}

export default Sample;
