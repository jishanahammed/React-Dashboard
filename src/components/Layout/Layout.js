// Layout.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true); 
  useEffect(() => {
    setIsOpen(isDropdownOpen);
  }, [isDropdownOpen]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the screen width is less than a certain breakpoint (e.g., 640px for mobile)
      if (window.innerWidth < 640 && !event.target.closest('.insideSidbar')) {
        setIsDropdownOpen(false); // Set the dropdown open when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);;



  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen}  className="insideSidbar"/>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden" onClick={() => setIsDropdownOpen(false)}></div>}
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
        
        {/* Content */}
        <div className={`${!isOpen ? 'sm:ml-12 ' : 'sm:ml-64'}  mt-16 transition-all duration-300 ease-in-out  dark:bg-gray-800 dark:text-gray-50`}>
          <div className="m-3 md:m-5  flex flex-col rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
