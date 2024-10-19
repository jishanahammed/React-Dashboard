import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const Brand = () => {
  const [brands, setBrands] = useState([
    { name: 'Risen', description: 'Leading manufacturer of solar panels and photovoltaic solutions.', equipmentType: 'Solar Equipment' },
    { name: 'Suntech', description: 'Innovative solar energy company providing high-efficiency panels.', equipmentType: 'Solar Equipment' },
    // Add other brands with equipment types
  ]);

  const [newBrand, setNewBrand] = useState({ name: '', description: '', equipmentType: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(''); // For validation error message

  // List of available equipment types for the dropdown
  const [equipmentTypes, setEquipmentTypes] = useState([
    { name: 'Solar Equipment' },
    { name: 'Inverter' },
    { name: 'Energy Storage' },
    { name: 'Monitoring System' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBrand({ ...newBrand, [name]: value });
    setError(''); // Clear error when input changes
  };

  const handleAddBrand = () => {
    if (!newBrand.name || !newBrand.equipmentType) {
      setError('All fields are required');
      return;
    }

    if (editingIndex !== null) {
      const updatedBrands = [...brands];
      updatedBrands[editingIndex] = newBrand;
      setBrands(updatedBrands);
      setEditingIndex(null);
    } else {
      setBrands([...brands, newBrand]);
    }

    setNewBrand({ name: '', description: '', equipmentType: '' });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setNewBrand({ name: '', description: '', equipmentType: '' });
    setError('');
  };

  const handleEditBrand = (index) => {
    setEditingIndex(index);
    setNewBrand(brands[index]);
    setIsModalOpen(true);
  };

  const handleDeleteBrand = (index) => {
    const updatedBrands = brands.filter((_, i) => i !== index);
    setBrands(updatedBrands);
  };

  return (
    <>
    <Breadcrumb
      pageName={"Brand  List"}
      currentPage={"Brand  List"}
    />
    <div className="grid grid-cols-1 shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
  <div className="card-header bg-mygreen-80 items-center dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Brand </h2>
        <button 
          onClick={openModal} 
          className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="card-body p-5 text-[15px]">
        {/* Table of brands */}
        {brands.length > 0 ? (
           <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
            <tr className="  bg-myorange-100 text-gray-700">
                <th className="border p-2 text-left">SL</th>
                <th className="border p-2 text-left">Equipment Type</th>
                <th className="border p-2 text-left">Name</th>                
                <th className="border p-2 text-left">Description</th>            
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, index) => (
                <tr key={index} className="border-b">
                  <td className="border p-2 text-left">{index + 1}</td>
                  <td className="border p-2">{brand.equipmentType}</td>
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
          <p className="text-gray-500">No brands added yet.</p>
        )}
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center " style={{ zIndex: 1900 }}>
  <div className="bg-white rounded-lg  w-full sm:w-96 md:w-[32rem] lg:w-[40rem] ">
    <div className='border-b border-gray-300 p-3'>
      <div className='flex justify-between'>
        <h3 className="text-lg font-bold text-mygreen-100">
                  {editingIndex !== null ? 'Update Brand' : 'Add Brand'}
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
                  value={newBrand.name} 
                  onChange={handleInputChange} 
                  placeholder="Brand Name" 
                  className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
                />
                {error && !newBrand.name && <p className="text-red-500 text-sm mb-2">{error}</p>}
              </div>

              <div className="mb-3">
                <select
                  name="equipmentType"
                  value={newBrand.equipmentType}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                >
                  <option value="">Select Equipment Type</option>
                  {equipmentTypes.map((equipment, index) => (
                    <option key={index} value={equipment.name}>
                      {equipment.name}
                    </option>
                  ))}
                </select>
                {error && !newBrand.equipmentType && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>


              <div className="mb-3">
                <textarea 
                  type="text" 
                  name="description" 
                  value={newBrand.description} 
                  onChange={handleInputChange} 
                  placeholder="Brand Description" 
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                />
              </div>

  

              <div className="flex justify-center mt-5">
                <button 
                  onClick={handleAddBrand} 
                  className="px-4 py-2 bg-two text-white rounded-full hover:bg-one hover:rounded-xl">
                  {editingIndex !== null ? 'Update Brand' : 'Add Brand'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div></>
  );
};

export default Brand;
