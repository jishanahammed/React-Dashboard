import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const servicesTypes = [
    { value: 'FE Service', label: 'FE Service' },
    { value: 'Installation Service', label: 'Installation Service' },
    { value: 'Government Rebate', label: 'Government Rebate' },
];

const engineers = [
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Contractor', label: 'Contractor' },
    { value: 'Free Engineer', label: 'Free Engineer' },
];

const demoServices = [
    { id: 1, name: 'Service 1', servicesType: 'FE Service', engineer: 'Engineering', rate: '100', unit: 'Hours', projectSize: 'Medium', description: 'Description 1' },
    { id: 2, name: 'Service 2', servicesType: 'Installation Service', engineer: 'Contractor', rate: '150', unit: 'Days', projectSize: 'Large', description: 'Description 2' },
];

const Services = () => {
    const [formData, setFormData] = useState({
        name: '',
        servicesType: '',
        engineer: '',
        rate: '',
        unit: '',
        projectSize: '',
        description: '',
    });
    const [servicesList, setServicesList] = useState(demoServices);
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
            // Update existing service
            setServicesList(servicesList.map(service => (service.id === editingId ? { ...formData, id: editingId } : service)));
            setMessage('Service updated successfully!');
        } else {
            // Add new service
            setServicesList([...servicesList, { ...formData, id: servicesList.length + 1 }]);
            setMessage('Service added successfully!');
        }
        resetForm();
        setShowModal(false); // Close modal after adding/updating service
    };

    const resetForm = () => {
        setFormData({
            name: '',
            servicesType: '',
            engineer: '',
            rate: '',
            unit: '',
            projectSize: '',
            description: '',
        });
        setIsEditing(false);
        setEditingId(null);
    };

    const deleteService = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this service?');
        if (confirmDelete) {
            setServicesList(servicesList.filter(service => service.id !== id));
            setMessage('Service deleted successfully!');
        }
    };

    const handleEdit = (service) => {
        setFormData(service);
        setEditingId(service.id);
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
            <Breadcrumb pageName="Services" currentPage="Services" />
            <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                <div className="card-header bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-100">Services List</h2>
                    <button
                        className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white"
                        onClick={() => setShowModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <div className="card-body p-5 text-[14px]">
                    {/* Services List Table */}
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border p-2 text-left">SL</th>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Service Type</th>
                                <th className="border p-2 text-left">Engineer</th>
                                <th className="border p-2 text-left">Rate</th>
                                <th className="border p-2 text-left">Unit</th>
                                <th className="border p-2 text-left">Project Size</th>
                                <th className="border p-2 text-left">Description</th>
                                <th className="border p-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicesList.map((service, index) => (
                                <tr key={service.id}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{service.name}</td>
                                    <td className="border p-2">{service.servicesType}</td>
                                    <td className="border p-2">{service.engineer}</td>
                                    <td className="border p-2">{service.rate}</td>
                                    <td className="border p-2">{service.unit}</td>
                                    <td className="border p-2">{service.projectSize}</td>
                                    <td className="border p-2">{service.description}</td>
                                    <td className="border p-2 flex justify-end">
                                        <button className="text-mygreen-100 mr-3" onClick={() => handleEdit(service)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="text-myorange-100" onClick={() => deleteService(service.id)}>
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

            {/* Modal for Adding/Editing Service */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1900 }}>
                    <div className="bg-white rounded-lg w-full sm:w-96 md:w-[32rem] lg:w-[40rem]">
                        <div className="border-b border-gray-300 p-3">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-mygreen-100">{isEditing ? 'Edit Service' : 'Add Service'}</h3>
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
                                        placeholder="Service Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="servicesType"
                                        value={formData.servicesType}
                                        onChange={handleInputChange}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    >
                                        <option value="" disabled>Select Service Type</option>
                                        {servicesTypes.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="engineer"
                                        value={formData.engineer}
                                        onChange={handleInputChange}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    >
                                        <option value="" disabled>Select Engineer</option>
                                        {engineers.map((engineer) => (
                                            <option key={engineer.value} value={engineer.value}>
                                                {engineer.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        name="rate"
                                        value={formData.rate}
                                        onChange={handleInputChange}
                                        placeholder="Rate"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="unit"
                                        value={formData.unit}
                                        onChange={handleInputChange}
                                        placeholder="Unit"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
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
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Description"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mt-5 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-myorange-100 text-white rounded hover:bg-gray-500"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="bg-mygreen-100 text-white rounded px-5 py-2 hover:bg-blue-600">
                                        {isEditing ? 'Update Service' : 'Add Service'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Message Popup */}
            {message && (
                <div className="fixed top-5 right-5 bg-green-500 text-white p-3 rounded shadow-lg z-50">
                    {message}
                </div>
            )}
        </>
    );
};

export default Services;
