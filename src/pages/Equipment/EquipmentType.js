import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const EquipmentType = () => {
  const [Equipment, setEquipment] = useState([
    { name: 'Solar Equipment', description: 'Equipment for capturing solar energy.' },
  ]);

  const [newEquipment, setNewEquipment] = useState({ name: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(''); // For validation error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEquipment({ ...newEquipment, [name]: value });
    setError(''); // Clear error when input changes
  };

  const handleAddEquipment = () => {
    if (!newEquipment.name) {
      setError('Equipment Name is required');
      return;
    }

    if (editingIndex !== null) {
      const updatedEquipment = [...Equipment];
      updatedEquipment[editingIndex] = newEquipment;
      setEquipment(updatedEquipment);
      setEditingIndex(null);
    } else {
      setEquipment([...Equipment, newEquipment]);
    }

    setNewEquipment({ name: '', description: '' });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setNewEquipment({ name: '', description: '' });
    setError('');
  };

  const handleEditBrand = (index) => {
    setEditingIndex(index);
    setNewEquipment(Equipment[index]);
    setIsModalOpen(true);
  };

  const handleDeleteBrand = (index) => {
    const updatedEquipment = Equipment.filter((_, i) => i !== index);
    setEquipment(updatedEquipment);
  };

  return (
    <>
      <Breadcrumb
        pageName={"Equipment Type List"}
        currentPage={"Equipment Type List"}
      />
      <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
        <div className="card-header bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-100">Equipment Type</h2>
          <button
            onClick={openModal}
            className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="card-body p-5 text-[15px]">
          {/* Table of Equipment */}
          {Equipment.length > 0 ? (
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-myorange-20 dark:bg-gray-900">
                  <th className="border p-2 text-left">SL</th>
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Equipment.map((brand, index) => (
                  <tr key={index} className="border-b">
                    <td className="border p-2 text-left">{index + 1}</td>
                    <td className="border p-2">{brand.name}</td>
                    <td className="border p-2">{brand.description}</td>
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => handleEditBrand(index)}
                        className="text-blue-500 mr-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => handleDeleteBrand(index)}
                        className="text-red-500">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No Equipment added yet.</p>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center " style={{ zIndex: 1900 }}>
            <div className="bg-white rounded-lg  w-full sm:w-96 md:w-[32rem] lg:w-[40rem] ">
              <div className='border-b border-gray-300 p-3'>
                <div className='flex justify-between'>
                  <h3 className="text-lg font-bold text-mygreen-100">
                    {editingIndex !== null ? 'Update Equipment' : 'Add Equipment'}
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
                    value={newEquipment.name}
                    onChange={handleInputChange}
                    placeholder="Equipment Name"
                    className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
                  />
                  {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                </div>

                <div className="mb-3">
                  <textarea
                    name="description"
                    value={newEquipment.description}
                    onChange={handleInputChange}
                    placeholder="Equipment Description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <button
                    onClick={handleAddEquipment}
                    className="px-4 py-2 bg-two text-white rounded-full hover:bg-one hover:rounded-xl">
                    {editingIndex !== null ? 'Update Equipment Type' : 'Add Equipment Type'}
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

export default EquipmentType;
