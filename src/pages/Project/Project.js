import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const projectTypes = [
    { value: 'Residential', label: 'Residential' },
    { value: 'Commercial', label: 'Commercial' },
    { value: 'Industrial', label: 'Industrial' },
];

const companies = [
    { value: 'Company A', label: 'Company A' },
    { value: 'Company B', label: 'Company B' },
    { value: 'Company C', label: 'Company C' },
];

const demoProjects = [
    { id: 1, name: 'Project 1', projectType: 'Residential', company: 'Company A', city: 'City A', description: 'Description 1', projectSize: 'Large' },
    { id: 2, name: 'Project 2', projectType: 'Commercial', company: 'Company B', city: 'City B', description: 'Description 2', projectSize: 'Medium' },
];

const Projects = () => {
    const [formData, setFormData] = useState({
        name: '',
        projectType: '',
        company: '',
        city: '',
        description: '',
        projectSize: '', // Added projectSize to formData
    });
    const [projectsList, setProjectsList] = useState(demoProjects);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update existing project
            setProjectsList(projectsList.map(project => (project.id === editingId ? { ...formData, id: editingId } : project)));
            setMessage('Project updated successfully!');
        } else {
            // Add new project
            setProjectsList([...projectsList, { ...formData, id: projectsList.length + 1 }]);
            setMessage('Project added successfully!');
        }
        resetForm();
        setShowModal(false); // Close modal after adding/updating project
    };

    const resetForm = () => {
        setFormData({
            name: '',
            projectType: '',
            company: '',
            city: '',
            description: '',
            projectSize: '', // Reset projectSize
        });
        setIsEditing(false);
        setEditingId(null);
    };

    const deleteProject = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this project?');
        if (confirmDelete) {
            setProjectsList(projectsList.filter(project => project.id !== id));
            setMessage('Project deleted successfully!');
        }
    };

    const handleEdit = (project) => {
        setFormData(project);
        setEditingId(project.id);
        setIsEditing(true);
        setShowModal(true);
    };

    // Auto dismiss the message after 2 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000);
            return () => clearTimeout(timer); // Cleanup timeout on unmount or when message changes
        }
    }, [message]);

    return (
        <>
            <Breadcrumb pageName="Projects" currentPage="Projects" />
            <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                <div className="card-header bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-100">Projects List</h2>
                    <button
                        className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white"
                        onClick={() => setShowModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <div className="card-body p-5 text-[14px]">
                    {/* Projects List Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border p-2 text-left">SL</th>
                                    <th className="border p-2 text-left">Name</th>
                                    <th className="border p-2 text-left">Project Type</th>
                                    <th className="border p-2 text-left">Company</th>
                                    <th className="border p-2 text-left">City</th>
                                    <th className="border p-2 text-left">Description</th>
                                    <th className="border p-2 text-left">Project Size</th> {/* Added column for project size */}
                                    <th className="border p-2 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectsList.map((project, index) => (
                                    <tr key={project.id}>
                                        <td className="border p-2">{index + 1}</td>
                                        <td className="border p-2">{project.name}</td>
                                        <td className="border p-2">{project.projectType}</td>
                                        <td className="border p-2">{project.company}</td>
                                        <td className="border p-2">{project.city}</td>
                                        <td className="border p-2">{project.description}</td>
                                        <td className="border p-2">{project.projectSize}</td> {/* Display project size */}
                                        <td className="border p-2 flex justify-end">
                                            <button className="text-mygreen-100 mr-3" onClick={() => handleEdit(project)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button className="text-myorange-100" onClick={() => deleteProject(project.id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal for Adding/Editing Project */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1900 }}>
                    <div className="bg-white rounded-lg w-full sm:w-96 md:w-[32rem] lg:w-[40rem]">
                        <div className="border-b border-gray-300 p-3">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-mygreen-100">{isEditing ? 'Edit Project' : 'Add Project'}</h3>
                                <button onClick={() => setShowModal(false)} className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-gray-400">
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        </div>

                        <div className="p-5">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Project Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    >
                                        <option value="">Select Project Type</option>
                                        {projectTypes.map(type => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <select
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    >
                                        <option value="">Select Company</option>
                                        {companies.map(company => (
                                            <option key={company.value} value={company.value}>{company.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="City"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Description"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        rows={3}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="projectSize"
                                        value={formData.projectSize}
                                        onChange={handleInputChange}
                                        placeholder="Project Size"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div> {/* Added input field for project size */}

                                <div className="flex justify-end">
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                        {isEditing ? 'Update' : 'Add'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;
