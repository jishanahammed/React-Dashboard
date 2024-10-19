import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItems } from './Menu'; 
import { faChevronDown, faChevronRight,faCircleDot,faCircle  } from '@fortawesome/free-solid-svg-icons';
import logo from'../../assets/light.png';
const Sidebar = ({ isOpen }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 660); 
  };
  const isActive = (path) => location.pathname === path;
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const isDropdownActive = (subItems) =>
    subItems.some((subItem) => location.pathname.startsWith(subItem.to));
 
 
  useEffect(() => { 
    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
   }, []);

  useEffect(() => {
    setOpenDropdownIndex(null);
  }, [location]);

  return (
    <>

    {isMobileView===false?(

      <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-50 ${!isOpen ? 'w-12 overflow-x-hidden' : 'w-64'} h-screen pt-16 transition-all bg-white border-r border-gray-100 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className={`h-full ${!isOpen?"px-1":'px-3 '} pb-4 overflow-y-auto bg-white dark:bg-gray-800 scrollbar-custom`}>
        <ul className="space-y-2 text-[14px]">
          {MenuItems.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`pb-2 ${!isOpen?"":'border-b border-gray-200 dark:border-gray-700'}  ${groupIndex === 0? 'pt-3' :!isOpen?"":'pt-1'}`}
            >
              <h4 className={`pl-2 ${!isOpen?"":'mb-2'}  font-semibold text-[15px] tracking-wide text-gray-500 dark:text-gray-400`}>
                {isOpen ?group.group:""}
              </h4>
              {group.items.map((item, index) => (
                <li key={index} className='my-2'>
                  {item.isDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`flex items-center w-full p-2 rounded-lg group ${
                          openDropdownIndex === index || isDropdownActive(item.subItems)
                            ? 'font-medium bg-t-one text-two dark:bg-gray-700 dark:text-gray-200'
                            : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`${!isOpen?"w-5 h-5":"w-4 h-4"} text-two transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                        />
                        <span className={`${!isOpen ? 'ml-7' : 'ms-3'} whitespace-nowrap`}>{item.label}</span>
                        <FontAwesomeIcon
                          icon={openDropdownIndex === index ? faChevronDown : faChevronRight}
                          className={`ml-auto font-thin text-gray-500  w-3 h-3 transition-transform ${openDropdownIndex === index ? 'rotate-30' : ''}`}
                        />
                      </button>
                      {(openDropdownIndex === index || isDropdownActive(item.subItems)) && (
                        <ul className="pl-5 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.to}
                                className={`flex items-center p-2 text-sm rounded-lg group ${
                                  isActive(subItem.to)
                                    ? 'font-medium bg-t-one text-two dark:bg-gray-700 dark:text-white'
                                    : 'text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                              >
                        <FontAwesomeIcon
                          icon={faCircle}
                          className={`w-2 h-2 mr-2 ${
                            isActive(subItem.to) ? 'text-two dark:text-white' : 'text-gray-500 dark:text-gray-400'
                          }`}
                        />
                        <span>{subItem.label}</span>
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
                        isActive(item.to)
                          ? 'bg-t-one text-two font-medium   dark:bg-gray-700 dark:text-gray-200'
                          : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`${!isOpen?"w-5 h-5":"w-4 h-4"} w-4 h-4 text-two transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      />
                      <span className={`${!isOpen ? 'ml-7' : 'ms-3'} whitespace-nowrap`}>
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </aside>
    ):(<>
    
    <aside
      id="logo-sidebar"
      className={`top-0 left-0 mobilesidebar  ${!isOpen ? 'hidden' : 'w-64'} h-screen  transition-all bg-white border-r border-gray-100 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
     <div className={`h-full ${!isOpen ? "px-1" : 'px-3'} pb-4 bg-white dark:bg-gray-800 overflow-y-auto scrollbar-custom`}>

      <a href="#" className="flex mb-5 ms-2 md:me-24">
         <img src={logo} className="h-8 me-3" alt=" FreeEngineer Logo" />
              <span className=" text-one sm:block self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Free Engineer
              </span>
            </a>

            <ul className="space-y-2 text-[14px]">
          {MenuItems.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`pb-2 ${!isOpen?"":'border-b border-gray-200 dark:border-gray-700'}  ${groupIndex === 0? 'pt-3' :!isOpen?"":'pt-1'}`}
            >
              <h4 className={`pl-2 ${!isOpen?"":'mb-2'}  font-semibold text-[15px] tracking-wide text-gray-500 dark:text-gray-400`}>
                {isOpen ?group.group:""}
              </h4>
              {group.items.map((item, index) => (
                <li key={index} className='my-2'>
                  {item.isDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`flex items-center w-full p-2 rounded-lg group ${
                          openDropdownIndex === index || isDropdownActive(item.subItems)
                            ? 'font-medium bg-t-one text-two dark:bg-gray-700 dark:text-gray-200'
                            : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`${!isOpen?"w-5 h-5":"w-4 h-4"} text-two transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                        />
                        <span className={`${!isOpen ? 'ml-7' : 'ms-3'} whitespace-nowrap`}>{item.label}</span>
                        <FontAwesomeIcon
                          icon={openDropdownIndex === index ? faChevronDown : faChevronRight}
                          className={`ml-auto font-thin text-gray-500  w-3 h-3 transition-transform ${openDropdownIndex === index ? 'rotate-30' : ''}`}
                        />
                      </button>
                      {(openDropdownIndex === index || isDropdownActive(item.subItems)) && (
                        <ul className="pl-5 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.to}
                                className={`flex items-center p-2 text-sm rounded-lg group ${
                                  isActive(subItem.to)
                                    ? 'font-medium bg-t-one text-two dark:bg-gray-700 dark:text-white'
                                    : 'text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                              >
                        <FontAwesomeIcon
                          icon={faCircle}
                          className={`w-2 h-2 mr-2 ${
                            isActive(subItem.to) ? 'text-two dark:text-white' : 'text-gray-500 dark:text-gray-400'
                          }`}
                        />
                        <span>{subItem.label}</span>
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
                        isActive(item.to)
                          ? 'bg-t-one text-two font-medium   dark:bg-gray-700 dark:text-gray-200'
                          : 'text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`${!isOpen?"w-5 h-5":"w-4 h-4"} w-4 h-4 text-two transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
                      />
                      <span className={`${!isOpen ? 'ml-7' : 'ms-3'} whitespace-nowrap`}>
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </aside>   
    
    </>)
      
  }
 </>
  );
};

export default Sidebar;
