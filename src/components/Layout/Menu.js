// src/components/menuItems.js

import {
    faDashboard,
    faClipboard,
    faEnvelope,
    faUsers,
    faBox,
    faBars,faWrench ,faBuilding
  } from '@fortawesome/free-solid-svg-icons';
  
  // export const MenuItems = [
  //   {
  //     to: '/dashboard',
  //     icon: faDashboard,
  //     label: 'Dashboard',
  //   },
  //   {
  //     to: '/kanban',
  //     icon: faClipboard,
  //     label: 'Kanban',
  //     badge: 'Pro',
  //   },

  //   {
  //     to: '/products',
  //     icon: faBox,
  //     label: 'Products',
  //     isDropdown: true,
  //     subItems: [
  //       { to: '/products/electronics', label: 'Electronics' },
  //     ],
  //   },
  // ];
  

  export const MenuItems = [
    {
      group: 'Dashboard',
      items: [
        {
          to: '/dashboard',
          icon: faDashboard,
          label: 'Dashboard',
        }
      ]
    },
    {
      group: 'Configuration',
      items: [
        {
          to: '/configuration/products/category', 
          icon: faBars,
          label: 'Categorys',
        },

        {
          to: '/configuration/engineer/type',
          icon: faClipboard,
          label: 'Engineer Type',
        },
        // {
        //   to: '/kanban',
        //   icon: faClipboard,
        //   label: 'Kanban',
        //   badge: 'Pro',
        // },
        // {
        //   to: '/products',
        //   icon: faBox,
        //   label: 'Products',
        //   isDropdown: true,
        //   subItems: [
        //     { to: '/configuration/products/product', label: 'products' },
        //   ],
        // },
      ],
    }
    ,
    {
      group: 'Equipment',
      items: [
        {
          to: '/equipment/type', 
          icon: faWrench,
          label: 'Equipment Type',
        },
        
        {
          to: '/equipment/brand', 
          icon: faBuilding,
          label: 'Brand',
        },
      ],
    }
  ];