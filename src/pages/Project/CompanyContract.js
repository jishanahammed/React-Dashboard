import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';
import Projectcomponent from './Projectcomponent';

const CompanyContract = () => {
    const location = useLocation();
    const company = location.state; // Get passed company details

    // Demo contact list for the company
    const initialContacts = [
        { id: 1, name: 'John Doe', phone: '555-1234', email: 'johndoe@example.com', companyName: company.name, foreignKey: 'FK123', designation: 'Manager', officePhone: '555-5678' },
        { id: 2, name: 'Jane Smith', phone: '555-5678', email: 'janesmith@example.com', companyName: company.name, foreignKey: 'FK456', designation: 'CEO', officePhone: '555-9876' },
    ];

    const [contacts, setContacts] = useState(initialContacts);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        designation: '',
        officePhone: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddContact = () => {
        if (isEditing) {
            setContacts(
                contacts.map((contact) =>
                    contact.id === editingId ? { ...formData, id: editingId, companyName: company.name, foreignKey: formData.foreignKey } : contact
                )
            );
        } else {
            setContacts([
                ...contacts,
                { ...formData, id: contacts.length + 1, companyName: company.name, foreignKey: `FK${contacts.length + 1}` },
            ]);
        }
        resetForm();
        setShowModal(false);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            designation: '',
            officePhone: '',
        });
        setIsEditing(false);
        setEditingId(null);
    };

    const handleEdit = (contact) => {
        setFormData(contact);
        setIsEditing(true);
        setEditingId(contact.id);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this contact?');
        if (confirmDelete) {
            setContacts(contacts.filter((contact) => contact.id !== id));
        }
    };

    return (
        <>
          <Breadcrumb pageName="Company Details" currentPage="Company Details" />
        <div className=" ">
        <div className="bg-white shadow rounded-lg p-6 mb-5">
    <h3 className="text-2xl font-bold mb-4 text-mygreen-100">Company Details</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        <div>
            <p className="text-gray-700 ">Company Name : {company.name}</p>
        </div>
        <div>
            <p className="text-gray-700 ">License : {company.license}</p>
        </div>
        <div>
            <p className="text-gray-700 ">Address : {company.address}</p>
   
        </div>
        <div>
            <p className="text-gray-700 ">State : {company.state}</p>
   
        </div>
        <div className="sm:col-span-2">
            <p className="text-gray-700 ">Description : {company.description}</p>
          
        </div>
    </div>
</div>
<div className='mb-5'>

<Projectcomponent projectName={company.name}></Projectcomponent>
</div>
    
            {/* Contact List */}
            <div className="bg-white shadow rounded-lg p-5">
                <div className="flex justify-between mb-3">
                    <h3 className="text-xl font-bold">Contacts</h3>
                    <button
                        className="bg-mygreen-100 text-white rounded px-4 py-2 hover:bg-blue-600"
                        onClick={() => setShowModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Phone</th>
                            <th className="border p-2 text-left">Email</th>
                            <th className="border p-2 text-left">Designation</th>
                            <th className="border p-2 text-left">Office Phone</th>
                            <th className="border p-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td className="border p-2">{contact.name}</td>
                                <td className="border p-2">{contact.phone}</td>
                                <td className="border p-2">{contact.email}</td>
                                <td className="border p-2">{contact.designation}</td>
                                <td className="border p-2">{contact.officePhone}</td>
                                <td className="border p-2 flex justify-end">
                                    <button className="text-mygreen-100 mr-3" onClick={() => handleEdit(contact)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="text-myorange-100" onClick={() => handleDelete(contact.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Adding/Editing Contact */}
            {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1900 }}>
                    <div className="bg-white rounded-lg w-full sm:w-96 md:w-[32rem] lg:w-[40rem]">
                    <div className="border-b border-gray-300 p-3">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-bold text-mygreen-100">{isEditing ? 'Edit Contact' : 'Add Contact'}</h3>
                                <button onClick={() => setShowModal(false)} className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-gray-400">
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        </div>

                        <div className="p-5">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleInputChange}
                                        placeholder="Designation"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="officePhone"
                                        value={formData.officePhone}
                                        onChange={handleInputChange}
                                        placeholder="Office Phone"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
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
                                    <button type="button" onClick={handleAddContact} className="bg-mygreen-100 text-white rounded px-5 py-2 hover:bg-blue-600">
                                        {isEditing ? 'Update Contact' : 'Add Contact'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default CompanyContract;
