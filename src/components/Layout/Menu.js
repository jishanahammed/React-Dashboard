// src/components/menuItems.js

import {
    faDashboard,
    faClipboard,
    faEnvelope,faExclamationTriangle  ,
    faUsers,faCalendarAlt ,
    faBox,faProjectDiagram ,faTools ,
    faBars,faWrench ,faBuilding,faCog ,faCoffee 
  } from '@fortawesome/free-solid-svg-icons';
  

  export const MenuItems = [
    {
      group: 'Dashboard',
      items: [
        {
          to: '/dashboard',
          icon: faDashboard,
          label: 'Dashboard',
        },
        {
          to: '/user/list',
          icon: faUsers,
          label: 'User Manager',
        }
      ]
    },
    {
      group: 'Configuration',
      items: [
        {
          to: '/configuration/project/type', 
          icon: faProjectDiagram ,
          label: 'Project Type',
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
        }
        ,
        {
          to: '/equipment/equipment/items', 
          icon: faTools,
          label: 'Equipments',
        },
      ],
    }
    ,
    {
      group: 'Other Services',
      items: [
        {
          to: '/configuration/engineer/type',
          icon: faClipboard,
          label: 'Engineer Type',
        },
        // {
        //   to: '/services/type', 
        //   icon: faWrench,
        //   label: 'Services Type',
        // },
        {
          to: "/services/services" , 
          icon: faCog ,
          label: 'FE Services',
        },
        {
          to:"/installation/installations", 
          icon: faCalendarAlt   ,
          label: 'Installations',
        },
        {
          to:"/exclussions/exclussions", 
          icon: faExclamationTriangle,
          label: 'Exclussions',
        }
      ],
    },
    
  
  ];