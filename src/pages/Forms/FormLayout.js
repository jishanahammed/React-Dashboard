import React from 'react';
import ContactForm from './ContactForm';
import AdvanceForm from './AdvanceForm1';
import AdvancedFileUploadForm from './AdvanceForm2';

const FormLayout = () => {

  return (
    <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
      <div className='flex flex-col gap-6'>
        <ContactForm/>
      </div>

      <div className='flex flex-col gap-6'>
        <AdvanceForm/>
        </div>

        <div className='flex flex-col gap-6'>
        <AdvancedFileUploadForm/>
        </div>
      </div>

      
  );
};

export default FormLayout;
