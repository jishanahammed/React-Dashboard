import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash,faTimes  } from '@fortawesome/free-solid-svg-icons';

const Brand = () => {
  const [brands, setBrands] = useState([
    { name: 'Risen', description: 'Leading manufacturer of solar panels and photovoltaic solutions.' },
    { name: 'Suntech', description: 'Innovative solar energy company providing high-efficiency panels.' },
    { name: 'Jinko', description: 'One of the largest solar panel producers globally, known for quality.' },
    { name: 'Sungrow', description: 'Renowned manufacturer of solar inverters and energy storage systems.' },
    { name: 'Sofar', description: 'Expert in renewable energy solutions, focusing on inverters and storage.' },
    { name: 'Deye', description: 'Provider of solar energy systems, specializing in inverters and storage.' },
    { name: 'Dyness', description: 'A leading supplier of energy storage systems for solar power solutions.' },
  ]);

  const [newBrand, setNewBrand] = useState({ name: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(''); // For validation error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBrand({ ...newBrand, [name]: value });
    setError(''); // Clear error when input changes
  };

  const handleAddBrand = () => {
    if (!newBrand.name) {
      setError('Brand Name is required');
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

    setNewBrand({ name: '', description: '' });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setNewBrand({ name: '', description: '' });
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
    <div className="grid grid-cols-1 shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
      <div className="card-header flex justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-100">Brand List</h2>
        <button 
          onClick={openModal} 
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <FontAwesomeIcon icon={faPlus}/>
        </button>
      </div>

      <div className="card-body p-5 text-[15px]">
        {/* Table of brands */}
        {brands.length > 0 ? (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-900">
                <th className="border p-2 text-left">SL</th>
                <th className="border p-2 text-left">Name</th>
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, index) => (
                <tr key={index} className="border-b">
                  <td className="border p-2 text-left">{index+1}</td>
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
          <p className="text-gray-500">No brands added yet.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center " style={{zIndex: 1900 }}>
          <div className="bg-white rounded-lg  w-full sm:w-96 md:w-[32rem] lg:w-[40rem] ">
            <div className=' border-b border-gray-300 p-3'>
            <div className='flex justify-between'>
                <h3 className="text-lg font-bold">
                {editingIndex !== null ? 'Update Brand' : 'Add Brand'}
                </h3>
                <button 
                onClick={closeModal} 
                className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-gray-400">
                 <FontAwesomeIcon icon={faTimes}/>
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
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    </div>

    <div className="mb-5">
    <input 
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
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:rounded-xl">
        {editingIndex !== null ? 'Update Brand' : 'Add Brand'}
      </button>
    </div>
  </div>
          
     
          </div>
        </div>
      )}
    </div>
  );
};

export default Brand;
