import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';  // You can use any library to make API requests

const AdvanceForm = () => {

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    date: Yup.date().required('Date is required'),
    gender: Yup.string().required('Please select a gender'),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    file: Yup.mixed().required('A file is required')
  });

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      date: '',
      gender: '',
      acceptTerms: false,
      file: null,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
       console.log(values);
        const response = await axios.post('/api/contact', values);
        if (response.status === 200) {
          alert('Message sent successfully!');
          resetForm(); // Reset the form on successful submission
        }
      } catch (error) {
        console.error('Error submitting the form', error);
        alert('Failed to send the message. Please try again.');
      }
    },
  });

  return (

        <div className="rounded-sm border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-gray-800">
          <div className="border-b border-stroke px-5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-gray-700 dark:text-white">
            Advance Form 
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-5">
            <div className="mb-5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''}`}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                  ) : null}
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : ''}`}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition ${formik.touched.date && formik.errors.date ? 'border-red-500' : ''}`}
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="text-red-500 text-sm">{formik.errors.date}</div>
                ) : null}
              </div>

              {/* Radio Buttons for Gender Selection */}
              <div className="mb-5">
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                  Gender
                </label>
                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formik.values.gender === 'male'}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    /> Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formik.values.gender === 'female'}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    /> Female
                  </label>
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-red-500 text-sm">{formik.errors.gender}</div>
                ) : null}
              </div>

              {/* Checkbox for Terms and Conditions */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Accept Terms and Conditions
                </label>
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formik.values.acceptTerms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                  <div className="text-red-500 text-sm">{formik.errors.acceptTerms}</div>
                ) : null}
              </div>

              {/* File Upload Field */}
              <div className="mb-5 ">
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                  Upload File
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={(event) => {
                    formik.setFieldValue('file', event.currentTarget.files[0]);
                  }}
                  onBlur={formik.handleBlur}
                  className="w-full text-gray-700 dark:text-white"
                />
                {formik.touched.file && formik.errors.file ? (
                  <div className="text-red-500 text-sm">{formik.errors.file}</div>
                ) : null}
              </div>

              {/* Submit and Reset Buttons */}
              <div className='flex justify-center gap-4 mt-12'>
                <button
                  type="submit"
                  className="flex w-40 justify-center text-gray-100 rounded bg-primary-900 p-3 font-medium hover:bg-opacity-90"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={() => formik.resetForm()}
                  className="flex w-40 justify-center text-gray-100 rounded bg-red-500 p-3 font-medium hover:bg-opacity-90"
                >
                  Reset Form
                </button>
              </div>
            </div>
          </form>
        </div>

  );
};

export default AdvanceForm;
