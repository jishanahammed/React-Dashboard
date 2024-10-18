import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes,faSync } from '@fortawesome/free-solid-svg-icons';

const FEServicescomponent = ({ FEServices,selectFEServices,setSelectFEServices }) => {
  const [isModalOpenFA, setisModalOpenFA] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const total = selectFEServices.reduce((acc, item) => acc + item.totalPrice, 0);
    setTotalPrice(total);
  }, [selectFEServices]);

  const handleOpenModal = () => {
    setisModalOpenFA(true);
  };

  const handleCloseModalFA = () => {
    setisModalOpenFA(false);
  };

  const handleEquipmentSelect = (equipment) => {
    const isAlreadySelected = selectFEServices.some((item) => item.id === equipment.id);
    if (isAlreadySelected) {
      setSelectFEServices(selectFEServices.filter((item) => item.id !== equipment.id));
    } else {
      setSelectFEServices([...selectFEServices, { ...equipment, quantity: 0, totalPrice: 0 }]);
    }
  };

  const handleQuantityChange = (id, quantity) => {
    setSelectFEServices(
      selectFEServices.map((item) =>
        item.id === id
          ? { ...item, quantity: parseFloat(quantity), totalPrice: parseFloat(quantity) * item.rate }
          : item
      )
    );
  };

  const filteredEquipment = FEServices.filter((equipment) =>
    `${equipment.name} ${equipment.engineer} ${equipment.rate}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const isEquipmentSelected = (id) => selectFEServices.some((item) => item.id === id);
  const relodedata=()=>{
    setSelectFEServices([]);
    setTotalPrice(0);
  }
  return (
    <>
      <tbody>
        <tr className='bg-gray-100 border'>
          <td className="p-2 font-semibold" colSpan={4}>
          FE Services
          </td>
          <td className="flex justify-end p-2">
          <div className='flex'>
            <button onClick={relodedata}  className="flex justify-center  bg-myorange-100 text-white hover:bg-one hover:text-white rounded-lg p-2 mr-2 transition">
              <FontAwesomeIcon icon={faSync} />
            </button>
            <button onClick={handleOpenModal} className="flex justify-center  bg-mygreen-100 text-white hover:bg-one hover:text-white rounded-lg p-2 transition">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            </div>
          </td>
        </tr>
        {selectFEServices.map((item, index) => (
          <tr key={item.id} className="hover:bg-gray-100 transition-colors">
            <td className="border p-1 text-left">{index + 1}</td>
            <td className="border p-1"> {`${item.name} - ${item.engineer} - ${item.projectSize}`}</td>
            <td className="border p-1">{item.rate}</td>
            <td className="border p-1">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="w-36  rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-normal text-black outline-none transition"
              />
            </td>
            <td className="border p-2">{item.totalPrice.toFixed(2)}</td>
          </tr>
        ))}
        <tr>
          <td className="font-semibold border p-2 text-right" colSpan={4}>
            Total Price:
          </td>
          <td className="font-semibold border p-1 text-left">{totalPrice.toFixed(2)}</td>
        </tr>

        {/* Modal */}
        {isModalOpenFA && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-700">Select FE Services</h3>
                <button onClick={handleCloseModalFA} className="text-gray-50 border border-red-400 px-3 py-1 rounded bg-red-400 hover:text-red-500 transition-colors">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>
              {/* Search Box */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search FE Services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              {/* Equipment List */}
              <ul className="space-y-4 overflow-auto h-70">
                {filteredEquipment.map((equipment) => (
                  <li key={equipment.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isEquipmentSelected(equipment.id)}
                      onChange={() => handleEquipmentSelect(equipment)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mr-3 transition-transform"
                    />
                    <label className="text-gray-700 cursor-pointer">{`${equipment.name} - ${equipment.engineer} - ${equipment.projectSize}`}</label>
                  </li>
                ))}
              </ul>

              {/* Modal Footer */}
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleCloseModalFA}
                  className="px-4 py-2 bg-myorange-100 hover:bg-gray-400 text-gray-800 font-semibold rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCloseModalFA} // Update this to handle modal actions if needed
                  className="px-4 py-2 bg-mygreen-100 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </tbody>
    </>
  );
};

export default FEServicescomponent;
