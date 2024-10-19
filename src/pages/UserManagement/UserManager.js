import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const UserManager = () => {
  const [users, setUsers] = useState([
    {
      name: 'Tanbeer Ahammed',
      employeeId: 'E001',
      phone: '123-456-7890',
      email: 'admin@gmail.com',
      position: 'Engineer',
      department: 'Engineering',
    },
  ]);

  const [newUser, setNewUser] = useState({
    name: '',
    employeeId: '',
    phone: '',
    email: '',
    position: '',
    department: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const roles = ['Admin', 'User', 'Manager']; // Example role names

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    setError('');
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.employeeId || !newUser.email) {
      setError('Name, Employee ID, and Email are required');
      return;
    }

    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = newUser;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, newUser]);
    }

    setNewUser({
      name: '',
      employeeId: '',
      phone: '',
      email: '',
      position: '',
      department: '',
    });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setNewUser({
      name: '',
      employeeId: '',
      phone: '',
      email: '',
      position: '',
      department: '',
    });
    setError('');
  };

  const handleEditUser = (index) => {
    setEditingIndex(index);
    setNewUser(users[index]);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <>
      <Breadcrumb pageName={"User List"} currentPage={"User List"} />
      <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
        <div className="card-header items-center bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-100  dark:text-gray-100">User List</h2>
          <button
            onClick={openModal}
            className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="card-body p-5 text-[15px]">
          {users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-myorange-100 text-gray-700 dark:bg-gray-900">
                    <th className="border p-2 text-left">SL</th>
                    <th className="border p-2 text-left">Name</th>
                    <th className="border p-2 text-left">Employee ID</th>
                    <th className="border p-2 text-left">Phone</th>
                    <th className="border p-2 text-left">Email</th>
                    <th className="border p-2 text-left">Position</th>
                    <th className="border p-2 text-left">Department</th>
                    <th className="border p-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index} className="border-b">
                      <td className="border p-2 text-left">{index + 1}</td>
                      <td className="border p-2">{user.name}</td>
                      <td className="border p-2">{user.employeeId}</td>
                      <td className="border p-2">{user.phone}</td>
                      <td className="border p-2">{user.email}</td>
                      <td className="border p-2">{user.position}</td>
                      <td className="border p-2">{user.department}</td>
                      <td className="border p-2 text-center">
                        <button
                          onClick={() => handleEditUser(index)}
                          className="text-mygreen-100 mr-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(index)}
                          className="text-myorange-100">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No Users added yet.</p>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1900 }}>
            <div className="bg-white rounded-lg w-full sm:w-96 md:w-[32rem] lg:w-[40rem] ">
              <div className='border-b border-gray-300 p-3'>
                <div className='flex justify-between'>
                  <h3 className="text-lg font-bold text-mygreen-100">
                    {editingIndex !== null ? 'Update User' : 'Add User'}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-gray-400">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    placeholder="User Name"
                    className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="employeeId"
                    value={newUser.employeeId}
                    onChange={handleInputChange}
                    placeholder="Employee ID"
                    className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="position"
                    value={newUser.position}
                    onChange={handleInputChange}
                    placeholder="Position"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="department"
                    value={newUser.department}
                    onChange={handleInputChange}
                    placeholder="Department"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>
              
                <div className="flex justify-end">
                  <button
                    onClick={handleAddUser}
                    className="px-4 py-2 bg-mygreen-100 text-white rounded hover:bg-green-500">
                    {editingIndex !== null ? 'Update User' : 'Add User'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserManager;
