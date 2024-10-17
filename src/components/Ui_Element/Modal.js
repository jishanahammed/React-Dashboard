import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
const Modal = ({ isOpen, onClose, title, children, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-50 border border-red-400 px-3 py-1 rounded bg-red-400 hover:text-red-500 transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Modal Content */}
        <div>{children}</div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-myorange-100 hover:bg-gray-400 text-gray-800 font-semibold rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-mygreen-100 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
