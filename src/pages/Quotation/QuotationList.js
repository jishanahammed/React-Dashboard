import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faTimes ,faEye,faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';
import { quotation} from '../../assets/Demodata/demo';
import { PDFDownloadLink,pdf } from '@react-pdf/renderer';
import Invoice from '../ReportUtility/quInvoice';
import { useNavigate } from 'react-router-dom';
import QuInvoicecopy from '../ReportUtility/quInvoicecopy';

const EquipmentData = [
  { id: 1, name: 'Solar Panel - Risen - RISEN RSM40-8-415M ', unitCost: 91, qty: 2 },
  { id: 2, name: 'Solar Panel - Risen -RSM108-9-440N', unitCost: 88, qty: 10 },
  { id: 8, name: 'Inverter- Sungrow - SG110CX', unitCost: 6999, qty: 10 },
];

export const FEServices = [
  { id: 1, name: 'Engineering & SLD ', engineer: 'Engineering', rate: '200', unit: 'Hr', projectSize: '90', qty: 20 },
  { id: 2, name: 'Engineering & SLD', engineer: 'Engineering', rate: '200', unit: 'Hr', projectSize: '90-300', qty: 10 },
  { id: 4, name: 'FE Consulting and Design fees', engineer: 'Engineering', rate: '200', unit: 'Hr', projectSize: '90', qty: 20 },
];



const QuotationList = () => {

  const [companyInfo] = useState({
    name: 'Free Engineer',
    email: 'eric@freeengineer.com.au',
    mobile: '+61 422 634 934',
    officeNumber: '+613 91112431',
    address: '17 Granault Parade, Corio VIC 3214.',
    website: 'https://www.mycompany.com',
});

  const navigate = useNavigate(); // for navigation
    const handleOpenPdf = async (quotation) => {
        const blob = await pdf(<QuInvoicecopy quotation={quotation} selectEquipment={EquipmentData} selectFEServices={FEServices} />).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      };
      const viewDetails = (quotation) => {
        navigate('/pages/quotation/view', { state: quotation });
    };
  return (
    <>
    <Breadcrumb
      pageName={"Quotations"}
      currentPage={"QuotationList"}
    />
    <div className="grid grid-cols-1 shadow-md rounded-lg overflow-hidden bg-white dark:bg-gray-900">
      <div className="card-header items-center bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Quotation List</h2>
      </div>

      <div className="card-body p-5 text-[15px]">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
            <tr className="  bg-myorange-100 text-gray-700">
                <th className="border p-2 text-left">SL</th>
                <th className="border p-2 text-left">Quote Number</th>
                <th className="border p-2 text-left">Company</th>
                <th className="border p-2 text-center">Project</th>
                <th className="border p-2 text-left">Expiry Date</th>
                <th className="border p-2 text-center">Create Date</th>
                <th className="border p-2 text-center">Status</th> 
                <th className="border p-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {quotation.map((quotation, index) => (
                <tr key={quotation.id} className="hover:bg-gray-100 transition-colors">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{quotation.quoteNumber}</td>
                  <td className="border p-2">{quotation.company}</td>
                  <td className="border p-2 text-center">{quotation.project}</td>
                  <td className="border p-2">{quotation.expiryDate}</td>
                  <td className="border p-2 text-center">{quotation.createDate}</td>
                  <td className="border p-2 text-center">
                      <span className={`py-1 px-3 rounded-full text-xs ${
                        quotation.status === 'Approved' ? 'bg-green-500 text-white' :
                        quotation.status === 'Pending' ? 'bg-yellow-500 text-white' :
                        'bg-gray-400 text-white'
                      }`}>
                        {quotation.status}
                      </span>
                    </td>
                  <td className="border p-2 text-center">
                  <button className=" text-mygreen-100 hover:text-blue-700">
                      <FontAwesomeIcon icon={faEye} onClick={() => viewDetails(quotation)} />
                    </button>
                    <button className="ml-2 text-mygreen-100 hover:text-blue-700">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="ml-2 text-myorange-100 hover:text-red-700">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="ml-2 text-slate-600 hover:text-blue-700">
                  <PDFDownloadLink document={<QuInvoicecopy quotation={quotation} selectEquipment={EquipmentData} selectFEServices={FEServices} />} fileName={quotation.quoteNumber}>
                    {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faFilePdf} onClick={()=>handleOpenPdf(quotation)} />             
                        </div>
                    )
                    }
                </PDFDownloadLink>
            </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  );
};

export default QuotationList;
