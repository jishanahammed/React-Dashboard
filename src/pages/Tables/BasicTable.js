import React, { useState } from 'react';

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
];

const DataTableBasic = () => {
  const [data, setData] = useState(demoData);

  return (
    <div className="grid grid-cols-1 p-4 bg-white dark:bg-gray-900 ">
      <div className="border-b mb-5 ">
        <h1 className="sm:text-3xl text-xl font-bold">Data Table Basic</h1>
      </div>
      
      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white dark:bg-gray-800">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-500 text-gray-600 dark:text-gray-50 text-sm uppercase border">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">First Name</th>
              <th className="text-left py-3 px-4">Last Name</th>
              <th className="text-left py-3 px-4">Age</th>
              <th className="text-left py-3 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-3 px-4">{row.id}</td>
                <td className="py-3 px-4">{row.firstName}</td>
                <td className="py-3 px-4">{row.lastName}</td>
                <td className="py-3 px-4">{row.age || 'N/A'}</td>
                <td className="py-3 px-4">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableBasic;
