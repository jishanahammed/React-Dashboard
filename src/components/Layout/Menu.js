// src/components/menuItems.js

import {
    faDashboard,
    faClipboard,
    faEnvelope,
    faUsers,
    faBox,
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
          to: '/configuration/brand', 
          icon: faClipboard,
          label: 'Brand',
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
        {
          to: '/products',
          icon: faBox,
          label: 'Products',
          isDropdown: true,
          subItems: [
            { to: '/configuration/products/category', label: 'Categorys' },
            { to: '/configuration/products/product', label: 'products' },
          ],
        },
      ],
    },
    {
      group: 'Pages',
      items: [
        {
          to: '/pages/form/layout',
          icon: faDashboard,
          label: 'Form Layout',
        },
        {
          to: '/pages/table/basic',
          icon: faDashboard,
          label: 'Table Basic',
        },
        {
          to: '/pages/dataTable/basic',
          icon: faDashboard,
          label: 'Data Table',
        }
        
      ],
    },
  ];