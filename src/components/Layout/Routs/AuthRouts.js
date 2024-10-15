import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Dashboard from '../../../pages/Dashboard';
import Kanban from '../../../pages/Kanban';
import ProtectedRoute from '../Routs/ProtectedRoute';
import FormLayout from '../../../pages/Forms/FormLayout';
import DataTableBasic from '../../../pages/Tables/BasicTable';
import DataTablePagination from '../../../pages/Tables/DataTable';

import UserManager from '../../../pages/UserManagement/UserManager';
import Profile from '../../../pages/UserManagement/profile';

import ProjectType from '../../../pages/Project/ProjectType';

import Brand from '../../../pages/Equipment/brand';
import EngineerType from '../../../pages/Configuration/engineerType';
import Category from '../../../pages/Product/category';
import EquipmentType from '../../../pages/Equipment/EquipmentType';
import Equipment from '../../../pages/Equipment/equipments';

import ServicesType from '../../../pages/Services/ServicesType';
import Services from '../../../pages/Services/Services';

import InstallationType from '../../../pages/Installation/installationType';
import Installations from '../../../pages/Installation/installations';
import Exclussions from '../../../pages/Exclussions/Exclussions';
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
        path="/user/list" 
        element={
          <ProtectedRoute>
            <Layout><UserManager /></Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Layout><Profile /></Layout>
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
        path="/equipment/brand" 
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
        path="/configuration/project/type" 
        element={
          <ProtectedRoute>
            <Layout><ProjectType /></Layout>
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
        path="/equipment/type" 
        element={
          <ProtectedRoute>
            <Layout><EquipmentType /></Layout>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/equipment/equipment/items" 
        element={
          <ProtectedRoute>
            <Layout><Equipment /></Layout>
          </ProtectedRoute>
        } 
      />

<Route 
        path="/services/type" 
        element={
          <ProtectedRoute>
            <Layout><ServicesType /></Layout>
          </ProtectedRoute>
        } 
      />


    <Route 
        path="/services/services" 
        element={
          <ProtectedRoute>
            <Layout><Services /></Layout>
          </ProtectedRoute>
        } 
      />

<Route 
        path="/installation/type" 
        element={
          <ProtectedRoute>
            <Layout><InstallationType /></Layout>
          </ProtectedRoute>
        } 
      />


    <Route 
        path="/installation/installations" 
        element={
          <ProtectedRoute>
            <Layout><Installations /></Layout>
          </ProtectedRoute>
        } 
      />
    <Route 
        path="/exclussions/exclussions" 
        element={
          <ProtectedRoute>
            <Layout><Exclussions /></Layout>
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
