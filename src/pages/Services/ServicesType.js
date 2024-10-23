import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const ServicesType = () => {
  const [Services, setServices] = useState([
    { name: 'FE Service', description: 'Engnieering and SLD Support for 90kW and less project Applied on estimated total project value.' },
    { name: 'Installation Service', description: 'Based on total edge protection required on sit of roof wherein Edge protection is required' },
    { name: 'Government Rebate', description: 'Facilitation of the Rebate - A fee is charged This value comes off the final value of the project' },
  ]);

  const [newServices, setNewServices] = useState({ name: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(''); // For validation error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewServices({ ...newServices, [name]: value });
    setError(''); // Clear error when input changes
  };

  const handleAddServices = () => {
    if (!newServices.name) {
      setError('Services Name is required');
      return;
    }

    if (editingIndex !== null) {
      const updatedServices = [...Services];
      updatedServices[editingIndex] = newServices;
      setServices(updatedServices);
      setEditingIndex(null);
    } else {
      setServices([...Services, newServices]);
    }

    setNewServices({ name: '', description: '' });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setNewServices({ name: '', description: '' });
    setError('');
  };

  const handleEditBrand = (index) => {
    setEditingIndex(index);
    setNewServices(Services[index]);
    setIsModalOpen(true);
  };

  const handleDeleteBrand = (index) => {
    const updatedServices = Services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <>
      <Breadcrumb
        pageName={"Services Type List"}
        currentPage={"Services Type List"}
      />
      <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
        <div className="card-header items-center bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Services Type</h2>
          <button
            onClick={openModal}
            className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="card-body p-5 text-[15px]">
          {/* Table of Services */}
          {Services.length > 0 ? (
             <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
              <tr className="bg-myorange-900 text-gray-100">
                  <th className="border p-2 text-left">SL</th>
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Services.map((brand, index) => (
                  <tr key={index} className="border-b">
                    <td className="border p-2 text-left">{index + 1}</td>
                    <td className="border p-2">{brand.name}</td>
                    <td className="border p-2">{brand.description}</td>
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => handleEditBrand(index)}
                        className="text-mygreen-100 mr-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => handleDeleteBrand(index)}
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
            <p className="text-gray-500">No Services added yet.</p>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center " style={{ zIndex: 1900 }}>
            <div className="bg-white rounded-lg  w-full sm:w-96 md:w-[32rem] lg:w-[40rem] ">
              <div className='border-b border-gray-300 p-3'>
                <div className='flex justify-between'>
                  <h3 className="text-lg font-bold text-mygreen-100">
                    {editingIndex !== null ? 'Update Services' : 'Add Services'}
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
                    value={newServices.name}
                    onChange={handleInputChange}
                    placeholder="Services Name"
                    className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
                  />
                  {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                </div>

                <div className="mb-3">
                  <textarea
                    name="description"
                    value={newServices.description}
                    onChange={handleInputChange}
                    placeholder="Services Description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <button
                    onClick={handleAddServices}
                    className="px-4 py-2 bg-two text-white rounded-full hover:bg-one hover:rounded-xl">
                    {editingIndex !== null ? 'Update Services Type' : 'Add Services Type'}
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

export default ServicesType;
