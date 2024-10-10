import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Product = () => {
  const [brands, setBrands] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const brandData = [
        { id: 1, name: 'Brand A' },
        { id: 2, name: 'Brand B' },
        { id: 3, name: 'Brand C' },
      ];
      setBrands(brandData);
    };

    const fetchItemTypes = async () => {
      const itemTypeData = [
        { id: 1, name: 'Type A' },
        { id: 2, name: 'Type B' },
        { id: 3, name: 'Type C' },
      ];
      setItemTypes(itemTypeData);
    };

    fetchBrands();
    fetchItemTypes();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      modelName: '',
      brandId: '',
      itemTypeId: '',
      rate: '',
      fEMargin: '',
      unitCost: '',
      size: '',
      region: '',
      unit: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      modelName: Yup.string().required('Required'),
      brandId: Yup.number().required('Required'),
      itemTypeId: Yup.number().required('Required'),
      rate: Yup.number().required('Required').min(0, 'Rate must be positive'),
      fEMargin: Yup.number().required('Required').min(0, 'FEMargin must be positive'),
      unitCost: Yup.number().required('Required').min(0, 'UnitCost must be positive'),
      size: Yup.string().required('Required'),
      region: Yup.string().required('Required'),
      unit: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission (e.g., send data to API)
    },
  });

  return (
    <div className="grid grid-cols-1 shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900">
      <div className="card-header flex justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-100">Add Product</h2>
      </div>
      <div className="card-body p-5 text-[15px]">
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block">Name</label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps('name')}
              className={`border p-2 w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
            />
            {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
          </div>

          <div>
            <label htmlFor="modelName" className="block">Model Name</label>
            <input
              id="modelName"
              type="text"
              {...formik.getFieldProps('modelName')}
              className={`border p-2 w-full ${formik.touched.modelName && formik.errors.modelName ? 'border-red-500' : ''}`}
            />
            {formik.touched.modelName && formik.errors.modelName ? <div className="text-red-500">{formik.errors.modelName}</div> : null}
          </div>

          <div>
            <label htmlFor="brandId" className="block">Brand</label>
            <select
              id="brandId"
              {...formik.getFieldProps('brandId')}
              className={`border p-2 w-full ${formik.touched.brandId && formik.errors.brandId ? 'border-red-500' : ''}`}
            >
              <option value="" label="Select brand" />
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
            {formik.touched.brandId && formik.errors.brandId ? <div className="text-red-500">{formik.errors.brandId}</div> : null}
          </div>

          <div>
            <label htmlFor="itemTypeId" className="block">Item Type</label>
            <select
              id="itemTypeId"
              {...formik.getFieldProps('itemTypeId')}
              className={`border p-2 w-full ${formik.touched.itemTypeId && formik.errors.itemTypeId ? 'border-red-500' : ''}`}
            >
              <option value="" label="Select item type" />
              {itemTypes.map((itemType) => (
                <option key={itemType.id} value={itemType.id}>
                  {itemType.name}
                </option>
              ))}
            </select>
            {formik.touched.itemTypeId && formik.errors.itemTypeId ? <div className="text-red-500">{formik.errors.itemTypeId}</div> : null}
          </div>

          <div>
            <label htmlFor="rate" className="block">Rate</label>
            <input
              id="rate"
              type="number"
              {...formik.getFieldProps('rate')}
              className={`border p-2 w-full ${formik.touched.rate && formik.errors.rate ? 'border-red-500' : ''}`}
            />
            {formik.touched.rate && formik.errors.rate ? <div className="text-red-500">{formik.errors.rate}</div> : null}
          </div>

          <div>
            <label htmlFor="fEMargin" className="block">FEMargin</label>
            <input
              id="fEMargin"
              type="number"
              {...formik.getFieldProps('fEMargin')}
              className={`border p-2 w-full ${formik.touched.fEMargin && formik.errors.fEMargin ? 'border-red-500' : ''}`}
            />
            {formik.touched.fEMargin && formik.errors.fEMargin ? <div className="text-red-500">{formik.errors.fEMargin}</div> : null}
          </div>

          <div>
            <label htmlFor="unitCost" className="block">Unit Cost</label>
            <input
              id="unitCost"
              type="number"
              {...formik.getFieldProps('unitCost')}
              className={`border p-2 w-full ${formik.touched.unitCost && formik.errors.unitCost ? 'border-red-500' : ''}`}
            />
            {formik.touched.unitCost && formik.errors.unitCost ? <div className="text-red-500">{formik.errors.unitCost}</div> : null}
          </div>

          <div>
            <label htmlFor="size" className="block">Size</label>
            <input
              id="size"
              type="text"
              {...formik.getFieldProps('size')}
              className={`border p-2 w-full ${formik.touched.size && formik.errors.size ? 'border-red-500' : ''}`}
            />
            {formik.touched.size && formik.errors.size ? <div className="text-red-500">{formik.errors.size}</div> : null}
          </div>

          <div>
            <label htmlFor="region" className="block">Region</label>
            <input
              id="region"
              type="text"
              {...formik.getFieldProps('region')}
              className={`border p-2 w-full ${formik.touched.region && formik.errors.region ? 'border-red-500' : ''}`}
            />
            {formik.touched.region && formik.errors.region ? <div className="text-red-500">{formik.errors.region}</div> : null}
          </div>

          <div>
            <label htmlFor="unit" className="block">Unit</label>
            <input
              id="unit"
              type="text"
              {...formik.getFieldProps('unit')}
              className={`border p-2 w-full ${formik.touched.unit && formik.errors.unit ? 'border-red-500' : ''}`}
            />
            {formik.touched.unit && formik.errors.unit ? <div className="text-red-500">{formik.errors.unit}</div> : null}
          </div>

          <div className="col-span-full">
            <label htmlFor="description" className="block">Description</label>
            <textarea
              id="description"
              {...formik.getFieldProps('description')}
              className={`border p-2 w-full ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
            />
            {formik.touched.description && formik.errors.description ? <div className="text-red-500">{formik.errors.description}</div> : null}
          </div>

          <div className="flex justify-center mt-5 col-span-full">
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Submit
            </button>
            <button
              type="button"
              onClick={() => formik.resetForm()}
              className="ml-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Product;
