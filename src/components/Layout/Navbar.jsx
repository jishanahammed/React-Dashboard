import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/light.png';
const Navbar = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get theme preference from localStorage or default to light mode
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  const [isFullscreen, setIsFullscreen] = useState(false);

  // Close the user menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#dropdown-user') && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logout = () => {
    localStorage.setItem('authtoken', null);
    navigate('/login');
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Update body class based on the theme
  useEffect(() => {
    const bodyClass = isDarkMode ? 'dark' : 'light';
    document.body.className = bodyClass;
    localStorage.setItem('theme', bodyClass);
  }, [isDarkMode]);

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen((prev) => !prev);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white dark:bg-gray-800 dark:border-b dark:border-gray-700`}>
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              {/* {!isDropdownOpen ? (
                 <svg
                 className="w-6 h-6"
                 aria-hidden="true"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   clipRule="evenodd"
                   fillRule="evenodd"
                   d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                 ></path>
               </svg>
              ) : (
                // Close sidebar icon
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 9.293l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 9.293z"
                  ></path>
                </svg>
                // Open sidebar icon
               
              )} */}

                <svg
                 className="w-6 h-6"
                 aria-hidden="true"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   clipRule="evenodd"
                   fillRule="evenodd"
                   d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                 ></path>
               </svg>
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <img src={logo} className="h-8 me-3" alt=" FreeEngineer Logo" />
              <span className="hidden text-one sm:block self-center text-2xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Free Engineer
              </span>

            </a>
          </div>
          <div className="flex items-center">
            {/* Dark/Light mode toggle button */}
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400"
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-5 h-5" />
            </button> */}
            {/* Fullscreen toggle button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-gray-500 dark:text-gray-400 ms-3"
            >
              <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} className="w-5 h-5" />
            </button>
            <div className="relative flex items-center ms-3 user-menu">
              <div>
                <img
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </div>
              {isUserMenuOpen && (
                <div className="absolute right-0 z-50 mt-[247px] text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">Tanbeer </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">admin@gmail.com</p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</Link>
                    </li>
                    <li>
                      <a onClick={logout} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
