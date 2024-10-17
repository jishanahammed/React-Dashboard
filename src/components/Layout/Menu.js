// src/components/menuItems.js

import {
    faDashboard,
    faClipboard,
    faEnvelope,faExclamationTriangle  ,
    faUsers,faCalendarAlt ,faQuoteRight ,
    faBox,faProjectDiagram ,faTools ,faQuoteLeft,
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
          label: 'User List',
        }
      ]
    },
    {
      group: 'Project Configuration',
      items: [
        {
          to: '/configuration/project/type', 
          icon: faProjectDiagram ,
          label: 'Project Type',
        },
        {
          to:"/configuration/company" , 
          icon: faBuilding ,
          label: 'Company',
        },
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
          label: 'Installation Services',
        },
        {
          to:"/exclussions/exclussions", 
          icon: faExclamationTriangle,
          label: 'Exclussions',
        }
      ],
    },
    
    {
      group: 'Quotation',
      items: [
        {
          to: "/pages/new/quotation" ,
          icon: faQuoteLeft,
          label: 'New Quotation',
        },
        {
          to: "/pages/quotation/list" ,
          icon: faBars,
          label: 'Quotation List',
        }
      ],
    }, 
  
  ];