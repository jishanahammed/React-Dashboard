

export const EquipmentData = [
    { id: 1, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Risen', model: 'RISEN RSM40-8-415M', unit: 'Each', unitCost: 91, description: '415 Watt panels\n25 Year Product & 25 Year Linear Performance Warranty', size: '415' },
    { id: 2, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Risen', model: 'RSM108-9-440N', unit: 'Each', unitCost: 88, description: '440 Watt panels\n25 Year Product Warranty & 30 Year Linear Performance Warranty', size: '440' },
    { id: 3, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Risen', model: 'STP440S-C54/Nshm', unit: 'Each', unitCost: 88, description: '440 Watt panels\n25 Year Product Warranty &  25 Year Linear Performance Warranty', size: '440' },
    { id: 4, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Risen', model: 'STP415S-C54/Umhm', unit: 'Each', unitCost: 91, description: '415 Watt panels\n25 Year Product Warranty & 25 Year Performance Warranty', size: '415' },
    { id: 5, name: 'Solar Panel', equipmentType: 'Solar-Equipment', brand: 'Risen', model: 'JKM530M-72HL4-V', unit: 'Each', unitCost: 106, description: 'Tiger P-Type 530 Watt panels\n12 Year Product Warranty & 25 Year Linear Performance Warranty', size: '530' },
    { id: 6, name: 'Inverter', equipmentType: 'Solar-Equipment', brand: 'Sungrow', model: 'SG50CX', unit: 'Each', unitCost: 3835, description: 'Multi-MPPT Inverter\n3-Phase 50kW of Inverter Power\nSungrow Power Supply Co., ', size: '50000' },
    { id: 7, name: 'Inverter', equipmentType: 'Solar-Equipment', brand: 'Sungrow', model: 'SG30CX', unit: 'Each', unitCost: 3090, description: 'Multi-MPPT Inverter\n3-Phase 29.9kW of Inverter Power\nSungrow Power Supply Co., ', size: '30000' },
    { id: 8, name: 'Inverter', equipmentType: 'Solar-Equipment', brand: 'Sungrow', model: 'SG110CX', unit: 'Each', unitCost: 6999, description: '3-Phase 110kW of Inverter Power\nSungrow Power Supply Co.', size: '110000' },
];

export const FEServices = [
    { id: 1, name: 'Engineering & SLD',  engineer: 'Engineering', rate: '200', unit: 'Hr', projectSize: '90', description: 'DesEngnieering and SLD Support for 90kW and less projects Applied on estimated total project value.' },
    { id: 2, name: 'Engineering & SLD',  engineer: 'Engineering', rate: '200', unit: 'Hr', projectSize: '90-300', description: 'Engnieering and SLD Support for 90kW - 300kW projects Applied on estimated total project value.' },
    { id: 3, name: 'Engineering & SLD',  engineer: 'Engineering', rate: '200', unit: 'Hr', projectSize: '300-1000', description: 'Engnieering and SLD Support for 300kW - 1000kW projects Applied on estimated total project value.' },
    { id: 4, name: 'FE Consulting and Design fees',  engineer: 'Engineering', rate: '200', unit: 'Hr', projectSize: '90', description: 'FE Consulting and Design for 90kW and less projects Applied on estimated total project value' },
    { id: 5, name: 'FE Go-to-market services',  engineer: 'Free Engineer', rate: '200', unit: 'Hr', projectSize: '', description: 'Optional Item Advisory service' },
    { id: 6, name: 'FE After-sale support and VEEC facilitation',  engineer: 'Free Engineer', rate: '200', unit: 'Hr', projectSize: '', description: '' },
];

export const Installation = [
    { id: 1, name: 'Installation of Solar System',   rate: '0', unit: '', Region: '', description: '' },
    { id: 2, name: 'DC and AC cabling',   rate: '0', unit: '', Region: '', description: '' },
    { id: 3, name: 'Elevated Work Platform',   rate: '0', unit: '', Region: '', description: '' },
    { id: 4, name: 'Crane / Scissor Lift',   rate: '0', unit: '', Region: '', description: '' },
    { id: 5, name: 'Supply and Install Sunlock racking (TRIMDEK)',   rate: '0', unit: '', Region: '', description: '' },
    { id: 6, name: 'Supply and Install Sunlock racking (TRIMDEK)',  rate: '0', unit: '', Region: '', description: '' },
]

export const Exclussions = [
    { id: 1, name: 'Test Exclussions one',   rate: '0', unit: '', description: '' },
    { id: 2, name: 'Test Exclussions two',   rate: '0', unit: '', description: '' },
    { id: 3, name: 'Test Exclussions three',   rate: '0', unit: '', description: '' },
    { id: 4, name: 'Test Exclussions forth',   rate: '0', unit: '', description: '' },
    { id: 5, name: 'Test Exclussions five',   rate: '0', Region: '', description: '' }
]

export const quotation = [
    {
      id: 1,
      quoteNumber: 'QTN-728711',
      company: 'Company A',
      project: 'Project A1',
      expiryDate: '2024-12-30',
      createDate: '2024-10-01',
      createdBy: 'Tanbeer Ahammed',
      status: 'Draft'
    },
    {
      id: 2,
      quoteNumber: 'QTN-951926',
      company: 'Company B',
      project: 'Project B1',
      expiryDate: '2024-12-25',
      createDate: '2024-09-28',
      createdBy: 'Tanbeer Ahammed',
      status: 'Pending'
    },
    {
      id: 3,
      quoteNumber: 'QTN-568521',
      company: 'Company C',
      project: 'Project C1',
      expiryDate: '2024-12-20',
      createDate: '2024-09-15',
      createdBy: 'Tanbeer Ahammed',
      status: 'Approved'
    }
  ];
  