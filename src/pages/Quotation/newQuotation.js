import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';
import { EquipmentData,FEServices,Installation,Exclussions } from '../../assets/Demodata/demo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes,faFilePdf } from '@fortawesome/free-solid-svg-icons';
import EquipmentComponent from './EquipmentComponent';
import FEServicescomponent from './FEServicescomponent';
import InstallationComponent from './InstallationComponent';
import ExclussionsComponent from './ExclussionsComponent';
import { PDFDownloadLink,pdf } from '@react-pdf/renderer';
import Invoice from '../ReportUtility/quInvoice';
import QUInvoice from '../ReportUtility/quInvoice';
const NewQuotation = () => {
  const [quoteNumber, setQuoteNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [company, setCompany] = useState(0);
  const [companyName, setCompanyName] = useState(null);
  const [project, setProject] = useState('');
  const [selectEquipment, setSelectEquipment] = useState([]);
  const [selectFEServices, setSelectFEServices] = useState([]);
  const [selectInstallation, setselectInstallation] = useState([]);
  const [selectExclussions, setSelectExclussions] = useState([]);


  const companies = [
    { id: 1, name: 'Lovitt Technologies Australia',email:"enquiry@lovittech.com.au", address: '207 Para Road,Greensborough VIC 3088 Australia', license: 'ABC123', state: 'Greensborough', description: 'Description 1' },
    { id: 2, name: 'Mino Structural Engineering Pty. Ltd.',email:"minosengg@Mino.com.au", address: 'Building 3/69 Dalton Rd, Thomastown VIC 3074, Australia', license: 'XYZ789', state: 'Thomastown', description: 'Description 2' },
    { id: 3, name: 'Cmax Group.', email:"support@cmaxGroup.com.au", address: '6 McRorie Ct, Cambridge TAS 7170, Australia', license: 'XYZ789', state: 'Cambridge', description: 'Description 2' },
];
  const projectsData = {
    1: ['Lovitt Tech P1', 'Lovitt Tech P2','Lovitt Tech P3'],
    2: ['Minos structural Engg p1','Minos structural Engg p2','Minos structural Engg p3'],
    3: ['Cmax Group p1','Cmax Group p2','Cmax Group p3']
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const randomQuoteNumber = `QTN-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteNumber(randomQuoteNumber);

    const currentUtcDate = new Date().toISOString().split('T')[0];
    setExpiryDate(currentUtcDate);
  }, []);

  useEffect(() => {
    if (company) {
      const companyId = Number(company);
      const selectedCompany = companies.find((c) => c.id === companyId);
      setCompanyName(selectedCompany);
      setProjects(projectsData[company] || []);
    } else {
      setProjects([]);
    }
  }, [company]);

  const handleOpenPdf = async () => {
    const blob = await pdf(<QUInvoice quoteNumber={quoteNumber} expiryDate={expiryDate}
      company={companyName} selectEquipment={selectEquipment} project={project} selectFEServices={selectFEServices} selectInstallation={selectInstallation} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };
console.log(companyName);
  // Check if all required fields are filled
  const isFormValid = expiryDate && company && project;

  return (
    <div>
      <Breadcrumb pageName="Quotation" currentPage="New Quotation" />
      <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden bg-white dark:bg-gray-900">
        <div className="card-header text-center dark:bg-gray-700 flex justify-center px-2 py-5 border-b border-gray-200">
          <h2 className="text-xl md:text-1xl font-bold text-gray-700 dark:text-gray-100">New Quotation</h2>
        </div>
        <div className="card-body p-5 text-[15px]">
          <form className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {/* Quote Number */}
            <div className="col-span-4 sm:col-span-1 mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-bold mb-2">Quote Number</label>
              <input
                type="text"
                value={quoteNumber}
                className="w-full rounded border-[1.5px] border-stroke bg-gray-100 px-5 py-3 font-normal text-black outline-none transition"
                readOnly
              />
            </div>

            {/* Expiry Date */}
            <div className="col-span-4 sm:col-span-1 mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-bold mb-2">Expiry Date</label>
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
              />
            </div>

            {/* Company Dropdown */}
            <div className="col-span-4 sm:col-span-1 mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-bold mb-2">Company</label>
              <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
              >
                <option value="">Select a company</option>
                {companies.map((comp) => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Dropdown */}
            <div className="col-span-4 sm:col-span-1 mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-bold mb-2">Project</label>
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition"
                disabled={!company}
              >
                <option value="">Select a project</option>
                {projects.map((proj, index) => (
                  <option key={index} value={proj}>
                    {proj}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        {/* Equipment Table */}
        <div className="overflow-x-auto p-5">
          <table className="min-w-full table-auto border-collapse">
            <thead>
            <tr className="  bg-myorange-100 text-gray-700">
                <th className="border p-2 text-left">SL</th>
                <th className="border p-2 text-left">Item Name</th>
                {/* <th className="border p-2 text-left">Brand</th>
                <th className="border p-2 text-left">Model</th>
                <th className="border p-2 text-left">Size</th> */}
                <th className="border p-2 text-left">Unit Price</th>
                <th className="border p-2 text-left">Quantity</th>
                <th className="border p-2 text-center">Total Price</th>
              </tr>
            </thead>

            <EquipmentComponent EquipmentData={EquipmentData} selectEquipment={selectEquipment} setSelectEquipment={setSelectEquipment} />
            <FEServicescomponent FEServices={FEServices} selectFEServices={selectFEServices} setSelectFEServices={setSelectFEServices} />
            <InstallationComponent Installation={Installation} selectInstallation={selectInstallation} setselectInstallation={setselectInstallation} />
            <ExclussionsComponent Exclussions={Exclussions} selectExclussions={selectExclussions} setSelectExclussions={setSelectExclussions} />
          </table>
        </div>

        <div className='mt-5 mb-5 flex justify-center'>
          <button
            className={`ml-2 bg-mygreen-100 text-gray-100 px-2 py-3 rounded hover:text-gray-700 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!isFormValid}
          >
            <PDFDownloadLink document={<QUInvoice quoteNumber={quoteNumber} expiryDate={expiryDate}
              company={companyName} selectEquipment={selectEquipment} project={project} selectFEServices={selectFEServices}
              selectInstallation={selectInstallation} />}
              fileName={quoteNumber}>
              {({ loading }) => loading ? 'Loading document...' : (
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={handleOpenPdf}>
                  <span>Generate Quotation</span>
                </div>
              )}
            </PDFDownloadLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewQuotation;

