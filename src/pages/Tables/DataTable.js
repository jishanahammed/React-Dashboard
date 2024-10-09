import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'; // Importing icons

// Sample data for the table
const demoData = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35, email: 'jon.snow@demo.com' },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42, email: 'cersei.lan@demo.com' },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45, email: 'jaime.lan@demo.com' },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16, email: 'arya.stark@demo.com' },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null, email: 'daenerys.tar@demo.com' },
  { id: 6, firstName: 'Melisandre', lastName: '', age: 150, email: 'mel.red@demo.com' },
  { id: 7, firstName: 'Sansa', lastName: 'Stark', age: 25, email: 'sansa.stark@demo.com' },
  { id: 8, firstName: 'Tyrion', lastName: 'Lannister', age: 39, email: 'tyrion.lan@demo.com' },
  { id: 9, firstName: 'Bran', lastName: 'Stark', age: 20, email: 'bran.stark@demo.com' },
  { id: 10, firstName: 'Robb', lastName: 'Stark', age: 28, email: 'robb.stark@demo.com' },
  { id: 11, firstName: 'Jorah', lastName: 'Mormont', age: 44, email: 'jorah.mormont@demo.com' },
];

const DataTablePagination = () => {
  const [data, setData] = useState(demoData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle changing the number of items per page
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page after changing items per page
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Action handlers
  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View item with id: ${id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5">
      <div className="overflow-x-auto ">
        <div className="">
          <h1 className="text-3xl font-bold">Data Table with Pagination</h1>
        </div>

        {/* Select items per page */}
        <div className="flex justify-end items-center mt-3">
          <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="px-3 py-2 border dark:bg-gray-600 rounded-md"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <table className="min-w-full bg-white dark:bg-gray-800 overflow-hidden mt-5 border">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-500 text-gray-600 text-sm uppercase">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">First Name</th>
              <th className="text-left py-3 px-4">Last Name</th>
              <th className="text-left py-3 px-4">Age</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-right py-3 px-4">Actions</th> {/* New Actions Column */}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id} className="border hover:bg-gray-100">
                <td className="py-3 px-4">{row.id}</td>
                <td className="py-3 px-4">{row.firstName}</td>
                <td className="py-3 px-4">{row.lastName}</td>
                <td className="py-3 px-4">{row.age || 'N/A'}</td>
                <td className="py-3 px-4">{row.email}</td>
                <td className="py-3 px-4 flex justify-end space-x-2"> {/* Action Icons */}
                  <button onClick={() => handleView(row.id)} className="text-blue-600 hover:text-blue-800">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button onClick={() => handleEdit(row.id)} className="text-green-600 hover:text-green-800">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => handleDelete(row.id)} className="text-red-600 hover:text-red-800">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4 dark:text-gray-900 space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-400 rounded disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Page Number Buttons */}
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 dark:text-gray-900 text-sm hover:bg-purple-300 rounded ${currentPage === page ? 'bg-purple-500 text-gray-300 dark:text-gray-900 font-bold' : ''}`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-400 rounded disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTablePagination;
