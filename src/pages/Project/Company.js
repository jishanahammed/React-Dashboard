import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes,faEye  } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';
import { useNavigate } from 'react-router-dom'; // for navigation
const demoCompanies = [
    { id: 1, name: 'Company 1', address: '123 Main St', license: 'ABC123', state: 'California', description: 'Description 1' },
    { id: 2, name: 'Company 2', address: '456 Maple Ave', license: 'XYZ789', state: 'Texas', description: 'Description 2' },
];

const Company = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        license: '',
        state: '',
        description: '',
    });
    const [companyList, setCompanyList] = useState(demoCompanies);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // for navigation
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update existing company
            setCompanyList(companyList.map(company => (company.id === editingId ? { ...formData, id: editingId } : company)));
            setMessage('Company updated successfully!');
        } else {
            // Add new company
            setCompanyList([...companyList, { ...formData, id: companyList.length + 1 }]);
            setMessage('Company added successfully!');
        }
        resetForm();
        setShowModal(false);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            address: '',
            license: '',
            state: '',
            description: '',
        });
        setIsEditing(false);
        setEditingId(null);
    };

    const deleteCompany = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this company?');
        if (confirmDelete) {
            setCompanyList(companyList.filter(company => company.id !== id));
            setMessage('Company deleted successfully!');
        }
    };

    const handleEdit = (company) => {
        setFormData(company);
        setEditingId(company.id);
        setIsEditing(true);
        setShowModal(true);
    };

    // Auto dismiss the message after 2 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [message]);
    const viewDetails = (company) => {
        navigate('/configuration/company/contract', { state: company });
    };
    return (
        <>
            <Breadcrumb pageName="Company" currentPage="Company" />
            <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                <div className="card-header bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Company List</h2>
                    <button
                        className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white"
                        onClick={() => setShowModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <div className="card-body p-5 text-[14px]">
                    <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                        <tr className="bg-myorange-100 text-gray-700 dark:bg-gray-900">
                                <th className="border p-2 text-left">SL</th>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Address</th>
                                <th className="border p-2 text-left">License</th>
                                <th className="border p-2 text-left">State</th>
                                <th className="border p-2 text-left">Description</th>
                                <th className="border p-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companyList.map((company, index) => (
                                <tr key={company.id}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{company.name}</td>
                                    <td className="border p-2">{company.address}</td>
                                    <td className="border p-2">{company.license}</td>
                                    <td className="border p-2">{company.state}</td>
                                    <td className="border p-2">{company.description}</td>
                                    <td className="border p-2 flex justify-end">
                                    <button className="text-mygreen-100 mr-3" onClick={() => viewDetails(company)}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        <button className="text-mygreen-100 mr-3" onClick={() => handleEdit(company)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="text-myorange-100" onClick={() => deleteCompany(company.id)}>
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

            {/* Modal for Adding/Editing Company */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1900 }}>
                    <div className="bg-white rounded-lg w-full sm:w-96 md:w-[32rem] lg:w-[40rem]">
                        <div className="border-b border-gray-300 p-3">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-mygreen-100">{isEditing ? 'Edit Company' : 'Add Company'}</h3>
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
                                        placeholder="Company Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Address"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="license"
                                        value={formData.license}
                                        onChange={handleInputChange}
                                        placeholder="License"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        placeholder="State"
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
                                        {isEditing ? 'Update Company' : 'Add Company'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Message */}
            {message && (
                <div className="fixed top-20 right-5 px-4 py-2 rounded-md bg-green-600 text-white z-50">
                    {message}
                </div>
            )}
        </>
    );
};

export default Company;
