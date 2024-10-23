import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';

// Sample data
const initialEquipmentData = [
    { id: 1, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Risen', model: 'RISEN RSM40-8-415M', unit: 'Each', unitCost: 91, description: '415 Watt panels\n25 Year Product & 25 Year Linear Performance Warranty', size: '415' },
    { id: 2, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Risen', model: 'RSM108-9-440N', unit: 'Each', unitCost: 88, description: '440 Watt panels\n25 Year Product Warranty & 30 Year Linear Performance Warranty', size: '440' },
    { id: 3, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Suntech', model: 'STP440S-C54/Nshm', unit: 'Each', unitCost: 88, description: '440 Watt panels\n25 Year Product Warranty &  25 Year Linear Performance Warranty', size: '440' },
    { id: 4, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Suntech', model: 'STP415S-C54/Umhm', unit: 'Each', unitCost: 91, description: '415 Watt panels\n25 Year Product Warranty & 25 Year Performance Warranty', size: '415' },
    { id: 5, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Jinko', model: 'JKM530M-72HL4-V', unit: 'Each', unitCost: 106, description: 'Tiger P-Type 530 Watt panels\n12 Year Product Warranty & 25 Year Linear Performance Warranty', size: '530' },
    { id: 6, name: 'Inverter', equipmentType: 'Solar-Equipment', brand: 'Sungrow', model: 'SG50CX', unit: 'Each', unitCost: 3835, description: 'Multi-MPPT Inverter\n3-Phase 50kW of Inverter Power\nSungrow Power Supply Co., ', size: '50000' },
    { id: 7, name: 'Inverter', equipmentType: 'Solar-Equipment', brand: 'Sungrow', model: 'SG30CX', unit: 'Each', unitCost: 3090, description: 'Multi-MPPT Inverter\n3-Phase 29.9kW of Inverter Power\nSungrow Power Supply Co., ', size: '30000' },
    { id: 8, name: 'Inverter', equipmentType: 'Solar-Equipment', brand: 'Sungrow', model: 'SG110CX', unit: 'Each', unitCost: 6999, description: '3-Phase 110kW of Inverter Power\nSungrow Power Supply Co.', size: '110000' },
];

const Equipment = () => {
    const [equipmentData, setEquipmentData] = useState(initialEquipmentData);
    const [editMode, setEditMode] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        equipmentType: '',
        brand: '',
        model: '',
        unit: '',
        unitCost: '',
        description: '',
        size: '',
    });

    // Equipment types and brands
    const equipmentTypes = ['Heavy', 'Solar-Equipment', 'Agricultural'];
    const brandsData = {
        Heavy: ['CAT', 'Komatsu', 'Hitachi'],
        SolarEquipment: ['Risen', 'Suntech','Jinko', 'Sungrow'],
        Agricultural: ['John Deere', 'Kubota', 'Massey Ferguson'],
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Reset brand when equipment type changes
        if (name === 'equipmentType') {
            setFormData((prev) => ({ ...prev, brand: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            setEquipmentData((prev) =>
                prev.map((item) => (item.id === currentItem.id ? { ...currentItem, ...formData } : item))
            );
            setEditMode(false);
        } else {
            setEquipmentData((prev) => [
                ...prev,
                { id: Date.now(), ...formData }, // Using timestamp as unique id
            ]);
        }
        resetForm();
        closeModal();
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setEditMode(true);
        setFormData(item);
        openModal();
    };

    const handleDelete = (id) => {
        setEquipmentData((prev) => prev.filter((item) => item.id !== id));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            equipmentType: '',
            brand: '',
            model: '',
            unit: '',
            unitCost: '',
            description: '',
            size: '',
        });
    };

    return (
        <>
            <Breadcrumb pageName="Equipment List" currentPage="Equipment List" />
            <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                <div className="card-header items-center bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Equipment List</h2>
                    <button onClick={openModal} className="flex items-center sm-add-button bg-white text-two hover:bg-one hover:text-white">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <div className="card-body p-5 text-[14px]">
                    {equipmentData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                            <tr className="bg-myorange-900 text-gray-100">
                                    <th className="border p-2 text-left">SL</th>
                                    <th className="border p-2 text-left">Name</th>
                                    <th className="border p-2 text-left">Equipment Type</th>
                                    <th className="border p-2 text-left">Brand</th>
                                    <th className="border p-2 text-left">Model</th>
                                    <th className="border p-2 text-left">Unit</th>
                                    <th className="border p-2 text-left">Unit Cost</th>
                                    <th className="border p-2 text-left">Size/Capacity</th>
                                    <th className="border p-2 text-left">Description</th>
                                   
                                    <th className="border p-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipmentData.map((item,index) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="border p-2">{index+1}</td>
                                        <td className="border p-2">{item.name}</td>
                                        <td className="border p-2">{item.equipmentType}</td>
                                        <td className="border p-2">{item.brand}</td>
                                        <td className="border p-2">{item.model}</td>
                                        <td className="border p-2">{item.unit}</td>
                                        <td className="border p-2">{item.unitCost}</td>
                                        <td className="border p-2">{item.size}</td>
                                        <td className="border p-2">{item.description}</td>
                                   
                                        <td className="border p-2 text-center">
                                            <button onClick={() => handleEdit(item)} className="text-mygreen-100 mr-2">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button onClick={() => handleDelete(item.id)} className="text-myorange-100">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    ) : (
                        <p className="text-gray-500">No equipment added yet.</p>
                    )}
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"  style={{ zIndex: 1900 }}>
                        <div className="bg-white rounded-lg   sm:w-96 md:w-[32rem] lg:w-[40rem]">
                            <div className="border-b border-gray-300 p-3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold text-mygreen-100">{editMode ? 'Update Equipment' : 'Add Equipment'}</h3>
                                    <button onClick={closeModal} className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-gray-400">
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
                                            placeholder="Name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <select
                                            name="equipmentType"
                                            value={formData.equipmentType}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                            required
                                        >
                                            <option value="" disabled>Select Equipment Type</option>
                                            {equipmentTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <select
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleInputChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                            required
                                            disabled={!formData.equipmentType} // Disable if no equipment type is selected
                                        >
                                            <option value="" disabled>Select Brand</option>
                                            {formData.equipmentType && brandsData[formData.equipmentType].map((brand) => (
                                                <option key={brand} value={brand}>{brand}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="model"
                                            value={formData.model}
                                            onChange={handleInputChange}
                                            placeholder="Model"
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
                                            type="number"
                                            name="unitCost"
                                            value={formData.unitCost}
                                            onChange={handleInputChange}
                                            placeholder="Unit Cost"
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
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="size"
                                            value={formData.size}
                                            onChange={handleInputChange}
                                            placeholder="Size/Capacity"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                                            required
                                        />
                                    </div>
                                    <div className="mt-5 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 bg-myorange-100 text-white rounded hover:bg-gray-500"
                                    >
                                        Cancel
                                    </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-mygreen-100 text-white rounded hover:bg-green-600 transition"
                                        >
                                            {editMode ? 'Update' : 'Add'}
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

export default Equipment;
