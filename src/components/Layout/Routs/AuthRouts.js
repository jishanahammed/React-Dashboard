import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Dashboard from '../../../pages/Dashboard';
import Kanban from '../../../pages/Kanban';
import ProtectedRoute from '../Routs/ProtectedRoute';
import FormLayout from '../../../pages/Forms/FormLayout';
import DataTableBasic from '../../../pages/Tables/BasicTable';
import DataTablePagination from '../../../pages/Tables/DataTable';

import Brand from '../../../pages/Configuration/brand';
import EngineerType from '../../../pages/Configuration/engineerType';
import Category from '../../../pages/Product/category';
import product from '../../../pages/Product/product';
import Product from '../../../pages/Product/product';
const AuthRouts = () => {
  return (
    <Routes>
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Layout><Dashboard /></Layout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/kanban" 
        element={
          <ProtectedRoute>
            <Layout><Kanban /></Layout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/configuration/brand" 
        element={
          <ProtectedRoute>
            <Layout><Brand /></Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/configuration/engineer/type" 
        element={
          <ProtectedRoute>
            <Layout><EngineerType /></Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/configuration/products/category" 
        element={
          <ProtectedRoute>
            <Layout><Category /></Layout>
          </ProtectedRoute>
        } 
      />
   <Route 
        path="/configuration/products/product" 
        element={
          <ProtectedRoute>
            <Layout><Product /></Layout>
          </ProtectedRoute>
        } 
      />
     <Route 
        path="/pages/form/layout" 
        element={
          <ProtectedRoute>
            <Layout><FormLayout /></Layout>
          </ProtectedRoute>
        } 
      />

    <Route 
            path="/pages/table/basic" 
            element={
              <ProtectedRoute>
                <Layout><DataTableBasic/></Layout>
              </ProtectedRoute>
            } 
          />
           <Route 
            path="/pages/dataTable/basic" 
            element={
              <ProtectedRoute>
                <Layout><DataTablePagination/></Layout>
              </ProtectedRoute>
            } 
          />
    </Routes>

    
  );
};

export default AuthRouts;
