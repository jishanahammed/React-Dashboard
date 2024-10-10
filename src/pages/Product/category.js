import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash,faTimes  } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  const [Category, setCategory] = useState([
    { name: 'Installation Team/ Contractor', description: 'Responsible for the installation of solar panels and related systems.' },
    { name: 'Distribution Network Service Provider', description: 'Provides network services for distribution of solar energy.' },
    { name: 'Switchboard Manufacturer', description: 'Manufactures switchboards for solar energy systems.' },
    { name: 'Inspector', description: 'Conducts inspections to ensure compliance with regulations and safety standards.' },
    { name: 'Structural Engineer', description: 'Designs and analyzes structures to support solar energy systems.' },
    { name: 'Structural Engineer', description: 'Specializes in the structural integrity of solar installations.' },
  ]);
  

  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(''); // For validation error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
    setError(''); // Clear error when input changes
  };

  const handleAddCategory = () => {
    if (!newCategory.name) {
      setError('Category Name is required');
      return;
    }

    if (editingIndex !== null) {
      const updatedCategory = [...Category];
      updatedCategory[editingIndex] = newCategory;
      setCategory(updatedCategory);
      setEditingIndex(null);
    } else {
      setCategory([...Category, newCategory]);
    }

    setNewCategory({ name: '', description: '' });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setNewCategory({ name: '', description: '' });
    setError('');
  };

  const handleEditBrand = (index) => {
    setEditingIndex(index);
    setNewCategory(Category[index]);
    setIsModalOpen(true);
  };

  const handleDeleteBrand = (index) => {
    const updatedCategory = Category.filter((_, i) => i !== index);
    setCategory(updatedCategory);
  };

  return (
    <div className="grid grid-cols-1 shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
      <div className="card-header flex justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-100">Product Category List</h2>
        <button 
          onClick={openModal} 
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <FontAwesomeIcon icon={faPlus}/>
        </button>
      </div>

      <div className="card-body p-5 text-[15px]">
        {/* Table of Category */}
        {Category.length > 0 ? (
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
              {Category.map((brand, index) => (
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
          <p className="text-gray-500">No Category added yet.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center " style={{zIndex: 1900 }}>
          <div className="bg-white rounded-lg  w-full sm:w-96 md:w-[32rem] lg:w-[40rem] ">
            <div className=' border-b border-gray-300 p-3'>
            <div className='flex justify-between'>
                <h3 className="text-lg font-bold">
                {editingIndex !== null ? 'Update Category ' : 'Add Category '}
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
                value={newCategory.name} 
                onChange={handleInputChange} 
                placeholder="Category  Name" 
        className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    </div>

    <div className="mb-5">
    <input 
                type="text" 
                name="description" 
                value={newCategory.description} 
                onChange={handleInputChange} 
                placeholder="Category  Description" 
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
      />
    </div>

    <div className="flex justify-center mt-5">
      <button 
        onClick={handleAddCategory} 
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

export default Category;
