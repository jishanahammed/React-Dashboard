import React, { useState } from 'react';
import Breadcrumb from '../../components/Ui_Element/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faPrint } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/maillogo.png';
import { quotation, demoCompanies } from '../../assets/Demodata/demo';
import { useLocation } from 'react-router-dom';

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

const QuotationView = () => {
    const location = useLocation();
    const quotation = location.state;
    const com = demoCompanies.find((c) => c.name === quotation.company);

    const [companyInfo] = useState({
        name: 'Free Engineer',
        email: 'eric@freeengineer.com.au',
        mobile: '+61 422 634 934',
        officeNumber: '+613 91112431',
        address: '17 Granault Parade, Corio VIC 3214.',
        website: 'https://www.mycompany.com',
    });

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <Breadcrumb pageName={"Quotation"} currentPage={"Quotation"} />
            <div className="grid grid-cols-1 shadow rounded-lg overflow-hidden items-center bg-white dark:bg-gray-900 w-10/12">
                <div className="card-header items-center bg-mygreen-80 dark:bg-gray-700 flex justify-between px-2 py-1 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-100 dark:text-gray-100">Quotation Details </h2>
                    {/* Print Button */}
                    <button onClick={() => window.print()} className="btn bg-gray-100 p-3 rounded-lg text-myorange-100 text-[20px]">  <FontAwesomeIcon icon={faPrint} /></button>

                </div>

                <div id="print-section">
            <div className="card-body p-5 text-[15px]">
                <div className="flex justify-center">
                    <div className='border borde:-gray-100 rounded-lg p-5' style={{ width: '210' }}>
                        <img src={logo} style={{ width: '200px', height: '160' }} />
                    </div>
                </div>

                <div className=''>
                    <h1 className="text-4xl font-bold text-center mt-11 mb-4">Quotation Invoice</h1>
                    <div className='flex justify-between'>
                        <div className="text-left mb-8">
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">{companyInfo.name}</h2>
                                <p>{companyInfo.address}</p>
                                <p>{companyInfo.email}</p>
                                <p>{companyInfo.mobile}</p>
                            </div>
                        </div>

                        <div className="text-left mb-8">
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">{com.name}</h2>
                                <p>{quotation.quoteNumber}</p>
                                <p>{quotation.project}</p>
                                <p>{com.address}</p>
                                <p>test@company.com.au</p>
                                <p>+61 422 000 904</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto p-5">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-myorange-100 text-gray-700">
                                    <th className="border p-2 text-left">SL</th>
                                    <th className="border p-2 text-left">Item Name</th>
                                    <th className="border p-2 text-left">Unit Price</th>
                                    <th className="border p-2 text-left">Quantity</th>
                                    <th className="border p-2 text-center">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Equipment Data */}
                                {EquipmentData.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                                        <td className="border p-1 text-left">{index + 1}</td>
                                        <td className="border p-1">{item.name}</td>
                                        <td className="border p-1">{item.unitCost.toFixed(2)}</td>
                                        <td className="border p-1">{item.qty}</td>
                                        <td className="border p-2">{(item.qty * item.unitCost).toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="font-semibold border p-2 text-right" colSpan={4}>Total Price AUD:</td>
                                    <td className="font-semibold border p-1 text-left">71,052</td>
                                </tr>
                            </tbody>

                            {/* FE Services */}
                            <tbody>
                                {FEServices.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                                        <td className="border p-1 text-left">{index + 1}</td>
                                        <td className="border p-1">{`${item.name} - ${item.engineer} - ${item.projectSize}`}</td>
                                        <td className="border p-1">{item.rate}</td>
                                        <td className="border p-1">{item.qty}</td>
                                        <td className="border p-2">{(item.qty * item.rate).toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="font-semibold border p-2 text-right" colSpan={4}>Total Price AUD:</td>
                                    <td className="font-semibold border p-1 text-left">10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>

            </div>
        </div>
    );
};

export default QuotationView;
