import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

const installationsTypes = [
    { value: 'Residential Installation', label: 'Residential Installation' },
    { value: 'Commercial Installation', label: 'Commercial Installation' },
    { value: 'Industrial Installation', label: 'Industrial Installation' },
];

const demoInstallations = [
    { id: 1, name: 'Installation 1',  rate: '200', unit: 'Hours', region: 'North', description: 'Description 1' },
    { id: 2, name: 'Installation 2', rate: '350', unit: 'Days', region: 'South', description: 'Description 2' },
];

const Installations = () => {
    const [formData, setFormData] = useState({
        name: '',
        installationsType: '',
        rate: '',
        unit: '',
        region: '',
        description: '',
    });
    const [installationsList, setInstallationsList] = useState(demoInstallations);
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
            // Update existing installation
            setInstallationsList(installationsList.map(installation => (installation.id === editingId ? { ...formData, id: editingId } : installation)));
            setMessage('Installation updated successfully!');
        } else {
            // Add new installation
            setInstallationsList([...installationsList, { ...formData, id: installationsList.length + 1 }]);
            setMessage('Installation added successfully!');
        }
        resetForm();
        setShowModal(false); // Close modal after adding/updating installation
    };

    const resetForm = () => {
        setFormData({
            name: '',
            rate: '',
            unit: '',
            region: '',
            description: '',
        });
        setIsEditing(false);
        setEditingId(null);
    };

    const deleteInstallation = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this installation?');
        if (confirmDelete) {
            setInstallationsList(installationsList.filter(installation => installation.id !== id));
            setMessage('Installation deleted successfully!');
        }
    };

    const handleEdit = (installation) => {
        setFormData(installation);
        setEditingId(installation.id);
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
            <Breadcrumb pageName="Installations" currentPage="Installations" />
            <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                <div className="card-header items-center bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Installations List</h2>
                    <button
                        className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white"
                        onClick={() => setShowModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <div className="card-body p-5 text-[14px]">
                    {/* Installations List Table */}
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                        <tr className="bg-myorange-100 text-gray-700">
                                <th className="border p-2 text-left">SL</th>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Rate</th>
                                <th className="border p-2 text-left">Unit</th>
                                <th className="border p-2 text-left">Region</th>
                                <th className="border p-2 text-left">Description</th>
                                <th className="border p-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {installationsList.map((installation, index) => (
                                <tr key={installation.id}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{installation.name}</td>
                                    <td className="border p-2">{installation.rate}</td>
                                    <td className="border p-2">{installation.unit}</td>
                                    <td className="border p-2">{installation.region}</td>
                                    <td className="border p-2">{installation.description}</td>
                                    <td className="border p-2 flex justify-end">
                                        <button className="text-mygreen-100 mr-3" onClick={() => handleEdit(installation)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="text-myorange-100" onClick={() => deleteInstallation(installation.id)}>
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

            {/* Modal for Adding/Editing Installation */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1900 }}>
                    <div className="bg-white rounded-lg w-full sm:w-96 md:w-[32rem] lg:w-[40rem]">
                        <div className="border-b border-gray-300 p-3">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-mygreen-100">{isEditing ? 'Edit Installation' : 'Add Installation'}</h3>
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
                                        placeholder="Installation Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
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
                                        name="region"
                                        value={formData.region}
                                        onChange={handleInputChange}
                                        placeholder="Region"
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
                                        rows="4"
                                    />
                                </div>
                                <div className="mt-5 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-myorange-100 text-white rounded hover:bg-gray-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-mygreen-100 text-white rounded hover:bg-mygreen-80"
                                    >
                                        {isEditing ? 'Update Installation' : 'Add Installation'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Message */}
            {message && (
                <div className="fixed top-10 right-10 bg-mygreen-100 text-white px-4 py-2 z-50 rounded">
                    {message}
                </div>
            )}
        </>
    );
};

export default Installations;
