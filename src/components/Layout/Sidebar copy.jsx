import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItems } from './Menu'; 
import { faChevronDown,faChevronRight  } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  // Helper function to check if a path is active
  const isActive = (path) => location.pathname === path;

  // For dropdown items, check if the current path starts with the dropdown's base path
  const isDropdownActive = () =>
   MenuItems
      .filter(item => item.isDropdown)
      .flatMap(item => item.subItems)
      .some(subItem => location.pathname.startsWith(subItem.to));

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 ${isOpen ? 'w-12 overflow-x-hidden' : 'w-64'} h-screen pt-20 transition-all bg-white border-r border-gray-100 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 text-sm ">
          {MenuItems.map((item, index) => (
            <li key={index}>
              {item.isDropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center w-full p-2 rounded-lg group ${
                      isDropdownActive() ? ' font-bold bg-gray-200 text-purple-900 dark:bg-gray-700 dark:text-white' : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                    <span className="ms-3 whitespace-nowrap">{item.label}</span>
                    <FontAwesomeIcon
                      icon={faChevronRight  }
                      className={`ml-auto w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`}
                    />
                  </button>
                  {(isDropdownOpen || isDropdownActive()) && (
                    <ul className="pl-8 mt-2 space-y-2 ">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                        key={subIndex}
                       
                      >
                          <Link
                            to={subItem.to}
                            className={`flex items-center p-2 text-sm rounded-lg group ${
                              isActive(subItem.to) ? ' bg-gray-50 font-bold text-purple-900 dark:bg-gray-700 dark:text-white' : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  className={`flex items-center p-2 rounded-lg group ${
                    isActive(item.to) ? 'bg-gray-200 text-gray-900 text-purple-900 font-bold dark:bg-gray-700 dark:text-white' : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span  className={`${isOpen ? 'ml-5' : 'ms-3'} whitespace-nowrap`}>{item.label}</span>
                  {item.badge && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
