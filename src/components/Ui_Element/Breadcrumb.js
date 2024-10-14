// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
const Breadcrumb = ({pageName,currentPage}) => {;
  return (
<div class="mb-6  flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between bg-white dark:bg-gray-500 px-2 py-3 rounded-lg">
  <h2 class="text-title-md2  text-black dark:text-white">
   {pageName}
  </h2>

  <nav aria-label="Breadcrumb">
    <ol class="flex items-center gap-2">
      <li>
        <Link className="font-sm text-blue-500  hover:text-primary"  to={'/dashboard'}>
        Dashboard
        </Link>
        <span class="mx-1 text-gray-400">/</span>
      </li>
      <li aria-current="page" class=" font-sm text-primary">
      {currentPage}
      </li>
    </ol>
  </nav>
</div>
  );
};

export default Breadcrumb;
