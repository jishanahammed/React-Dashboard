import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../components/Ui_Element/Breadcrumb';

const MyCompany = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Free Engineer',
    email: 'eric@freeengineer.com.au',
    mobile: '+61 422 634 934',
    officeNumber: '+613 91112431',
    address: '17 Granault Parade, Corio VIC 3214.',
    website: 'https://www.mycompany.com',
    linkedIn: 'https://www.linkedin.com/company/solarpedia-au/',
    youtube: 'https://www.youtube.com/watch?v=WBAT5amfiGg',
    facebook: 'https://www.facebook.com/mycompany',
    twitter: 'https://www.twitter.com/mycompany',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const renderInputField = (label, name, value) => (
    <div className="grid grid-cols-12 items-center gap-2 mb-4">
      {/* Label */}
      <label className="col-span-3 text-gray-600 dark:text-gray-100 font-bold">
        {label}
      </label>
      {/* Colon */}
      <span className="col-span-1 text-center text-gray-600 dark:text-gray-100">
        :
      </span>
      {/* Input field or text */}
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          className="col-span-8 p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
        />
      ) : (
        <p className="col-span-8 text-gray-600 dark:text-gray-200 rounded-md p-3 border border:gray-100">{value}</p>
      )}
    </div>
  );

  return (
    <>
      <Breadcrumb pageName="Contact Information" currentPage="Contact Information" />
      <div className="grid grid-cols-1 shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900">
        <div className="card-header bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-2 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Contact Information</h2>
          <button
            className="text-gray-100 dark:text-gray-100"
            onClick={handleEditToggle}
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="card-body p-5 text-[15px] w-6/12 mx-auto  ">
        <div className='border border-gray-200 p-5 mt-5'>

        {renderInputField('Company Name', 'name', companyInfo.name)}
          {renderInputField('Email', 'email', companyInfo.email)}
          {renderInputField('Mobile', 'mobile', companyInfo.mobile)}
          {renderInputField('Office Number', 'officeNumber', companyInfo.officeNumber)}
          {renderInputField('Address', 'address', companyInfo.address)}
          {renderInputField('Website', 'website', companyInfo.website)}
          {renderInputField('LinkedIn', 'linkedIn', companyInfo.linkedIn)}
          {renderInputField('YouTube', 'youtube', companyInfo.youtube)}
          {renderInputField('Facebook', 'facebook', companyInfo.facebook)}
          {renderInputField('Twitter', 'twitter', companyInfo.twitter)}
      {/* Update button below all the inputs */}
       {isEditing && (
          <div className="card-footer p-5 flex justify-center max-w-lg mx-auto">
            <button
              onClick={handleEditToggle}
              className="bg-mygreen-80 text-white py-2 px-4 rounded-md hover:bg-mygreen-60"
            >
              Update
            </button>
          </div>
        )}
        </div>
  
        </div>


      </div>
    </>
  );
};

export default MyCompany;
