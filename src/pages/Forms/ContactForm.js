import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';  // You can use any library to make API requests

const ContactForm = () => {
    const subjectOptions = [
        { value: '', label: 'Select a subject' },
        { value: 'general', label: 'General Inquiry' },
        { value: 'support', label: 'Support' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'other', label: 'Other' },
      ];

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    subjectSelectItem: Yup.string().required('Subject Item is required'),
    message: Yup.string().required('Message is required'),
  });

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      subjectSelectItem: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Make an API call to submit the form
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
              Contact Form
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-5">
              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
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

             
            
              <div className="mb-4 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : ''}`}
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="text-red-500 text-sm">{formik.errors.subject}</div>
                ) : null}
              </div>


              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                  Subject
                </label>
                <select
                  name="subjectSelectItem"
                  className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition ${formik.touched.subjectSelectItem && formik.errors.subjectSelectItem ? 'border-red-500' : ''}`}
                  value={formik.values.subjectSelectItem}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {subjectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {formik.touched.subjectSelectItem && formik.errors.subjectSelectItem ? (
                  <div className="text-red-500 text-sm">{formik.errors.subjectSelectItem}</div>
                ) : null}
              </div>
              </div>
              <div className="mb-4">
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                  Email <span className="text-meta-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                  Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  placeholder="Type your message"
                  className={`w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm">{formik.errors.message}</div>
                ) : null}
              </div>

              <div className='flex justify-center gap-4'>
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

export default ContactForm;
