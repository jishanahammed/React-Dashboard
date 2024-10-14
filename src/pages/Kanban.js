// src/pages/Dashboard.jsx
import React, { useContext } from 'react';import Breadcrumb from '../components/Ui_Element/Breadcrumb';
;
const Kanban = () => {;
  return (
    <div>
   <Breadcrumb pageName={"Items Category List"} currentPage={"Items Category List"}/>
   <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
      <div className="card-header bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-100">Items Category </h2>
>
      </div>

      <div className="card-body p-5 text-[15px]">
      </div>
     </div>
  </div>
  );
};

export default Kanban;
