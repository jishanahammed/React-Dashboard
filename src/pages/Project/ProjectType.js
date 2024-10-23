import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const ProjectType = () => {
  const [projects, setProjects] = useState([
    { name: 'Small Project', sizeMin: '0 kW', sizeMax: '90 kW', marginValue: '10%' },
    { name: 'Medium Project', sizeMin: '91 kW', sizeMax: '300 kW', marginValue: '10%' },
    { name: 'Large Project', sizeMin: '301 kW', sizeMax: '1000 kW', marginValue: '10%' },
   
  ]);

  const [newProject, setNewProject] = useState({ name: '', sizeMin: '', sizeMax: '', marginValue: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(''); // For validation error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
    setError(''); // Clear error when input changes
  };

  const handleAddProject = () => {
    if (!newProject.name) {
      setError('Project Name is required');
      return;
    }

    if (editingIndex !== null) {
      const updatedProjects = [...projects];
      updatedProjects[editingIndex] = newProject;
      setProjects(updatedProjects);
      setEditingIndex(null);
    } else {
      setProjects([...projects, newProject]);
    }

    setNewProject({ name: '', sizeMin: '', sizeMax: '', marginValue: '' });
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setNewProject({ name: '', sizeMin: '', sizeMax: '', marginValue: '' });
    setError('');
  };

  const handleEditProject = (index) => {
    setEditingIndex(index);
    setNewProject(projects[index]);
    setIsModalOpen(true);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <>
      <Breadcrumb
        pageName={"Project Type List"}
        currentPage={"Project Type List"}
      />
      <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900 ">
        <div className="card-header bg-mygreen-80 items-center dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Project Type</h2>
          <button
            onClick={openModal}
            className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="card-body p-5 text-[15px]">
          {/* Table of Projects */}
          {projects.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-myorange-900 text-gray-100 dark:bg-gray-900">
                    <th className="border p-2 text-left">SL</th>
                    <th className="border p-2 text-left">Name</th>
                    <th className="border p-2 text-left">Size Minimum</th>
                    <th className="border p-2 text-left">Size Maximum</th>
                    <th className="border p-2 text-left">Margin Value</th>
                    <th className="border p-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index} className="border-b">
                      <td className="border p-2 text-left">{index + 1}</td>
                      <td className="border p-2">{project.name}</td>
                      <td className="border p-2">{project.sizeMin}</td>
                      <td className="border p-2">{project.sizeMax}</td>
                      <td className="border p-2">{project.marginValue}</td>
                      <td className="border p-2 text-center">
                        <button
                          onClick={() => handleEditProject(index)}
                          className="text-mygreen-100 mr-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(index)}
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
            <p className="text-gray-500">No Project added yet.</p>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center " style={{ zIndex: 1900 }}>
            <div className="bg-white rounded-lg  w-full sm:w-96 md:w-[32rem] lg:w-[40rem] ">
              <div className='border-b border-gray-300 p-3'>
                <div className='flex justify-between'>
                  <h3 className="text-lg font-bold text-mygreen-100">
                    {editingIndex !== null ? 'Update Project' : 'Add Project'}
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
                    value={newProject.name}
                    onChange={handleInputChange}
                    placeholder="Project Name"
                    className={`w-full rounded border-[1.5px] ${error ? 'border-red-500' : 'border-stroke'} bg-transparent px-5 py-3 font-normal text-black outline-none transition`}
                  />
                  {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="sizeMin"
                    value={newProject.sizeMin}
                    onChange={handleInputChange}
                    placeholder="Project Size Minimum"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="sizeMax"
                    value={newProject.sizeMax}
                    onChange={handleInputChange}
                    placeholder="Project Size Maximum"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="marginValue"
                    value={newProject.marginValue}
                    onChange={handleInputChange}
                    placeholder="Margin Value"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <button
                    onClick={handleAddProject}
                    className="px-4 py-2 bg-two text-white rounded-full hover:bg-one hover:rounded-xl">
                    {editingIndex !== null ? 'Update Project Type' : 'Add Project Type'}
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

export default ProjectType;
