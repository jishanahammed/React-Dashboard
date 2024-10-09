import React, { useState } from 'react';
import Select from 'react-select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const AdvancedFileUploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  // Dropzone logic
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: (acceptedFiles) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    }
  });

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    searchSelect: Yup.object().required('You must select an option'),
    multiSelect: Yup.array().min(1, 'Select at least one option'),
  });

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      searchSelect: null,
      multiSelect: [],
      files: [],
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('files', file);
      });

      console.log('Form Submitted:', values, selectedFiles);
      // API request can go here, using formData for file uploads
    },
  });

  return (
        <div className="rounded-sm border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-gray-800">
          <div className="border-b border-stroke px-5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-gray-700 dark:text-white">
              Advanced Form with Search Select, MultiSelect, and File Upload
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit} className="p-5">

            {/* Searchable Select Field */}
            <div className="mb-4">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                Search Select
              </label>
              <Select
              
                name="searchSelect"
                options={options}
                placeholder="Search and select an option"
                onChange={(value) => formik.setFieldValue('searchSelect', value)}
                onBlur={formik.handleBlur}
                value={formik.values.searchSelect}
              />
              {formik.touched.searchSelect && formik.errors.searchSelect ? (
                <div className="text-red-500 text-sm">{formik.errors.searchSelect.label}</div>
              ) : null}
            </div>

            {/* MultiSelect Field */}
            <div className="mb-4">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                Multi Select
              </label>
              <Select
                name="multiSelect"
                options={options}
                isMulti
                placeholder="Select multiple options"
                onChange={(value) => formik.setFieldValue('multiSelect', value)}
                onBlur={formik.handleBlur}
                value={formik.values.multiSelect}
              />
              {formik.touched.multiSelect && formik.errors.multiSelect ? (
                <div className="text-red-500 text-sm">{formik.errors.multiSelect}</div>
              ) : null}
            </div>

            {/* Drag and Drop File Upload */}
            <div className="mb-4">
              <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                Drag and Drop File Upload
              </label>
              <div
                {...getRootProps()}
                className="w-full h-32 p-4 border-2 border-dashed border-stroke bg-gray-100 flex items-center justify-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <div className="mt-2">
                {selectedFiles.length > 0 ? (
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="text-gray-700 dark:text-white">
                        {file.name} ({file.size} bytes)
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 dark:text-white">No files uploaded yet.</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex justify-center gap-4'>
              <button
                type="submit"
                className="flex w-40 justify-center text-gray-100 rounded bg-primary-900 p-3 font-medium hover:bg-opacity-90"
              >
                Submit
              </button>
            </div>

          </form>
        </div>

  );
};

export default AdvancedFileUploadForm;
