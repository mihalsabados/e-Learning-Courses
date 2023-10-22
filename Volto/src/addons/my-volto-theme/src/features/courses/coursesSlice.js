import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title:
      'Intensification of money laundering prevention - private customer advice',
    category: 'Money Laundering and Fraud Prevention',
    duration: 30,
    progress: 3,
    endDate: null,
    imageSrc: 'resources/fraud_prevention.png',
  },
  {
    title:
      'Basic Training - Prevention of Money Laundering and Terrorist Financing (V3.0)',
    category: 'Money Laundering and Fraud Prevention',
    duration: 44,
    progress: 0,
    endDate: null,
    imageSrc: 'resources/fraud_prevention.png',
  },
  {
    title:
      'Advanced Training - Prevention of Money Laundering and Terrorist Financing (V3.0)',
    category: 'Money Laundering and Fraud Prevention',
    duration: 22,
    progress: 0,
    endDate: null,
    imageSrc: 'resources/fraud_prevention.png',
  },
  {
    title: 'IT security basics (V1.01.3)',
    category: 'IT security and information security',
    duration: 40,
    progress: 0,
    endDate: new Date(2024, 2, 14),
    imageSrc: 'resources/it_security.png',
  },
  {
    title: 'Basic Training IT security and information security (V1.0)',
    category: 'IT security and information security',
    duration: 60,
    progress: 3,
    endDate: null,
    imageSrc: 'resources/it_security.png',
  },
  {
    title: 'Advanced Training IT Security and Information Security (V1.1)',
    category: 'IT security and information security',
    duration: 29,
    progress: 0,
    endDate: null,
    imageSrc: 'resources/it_security.png',
  },
  {
    title: 'Basic training data protection (V2.0)',
    category: 'Data Protection',
    duration: 0,
    progress: 0,
    endDate: null,
    imageSrc: 'resources/data_protection.png',
  },
  {
    title: 'Privacy Basics (V1.00.2)',
    category: 'Data Protection',
    duration: 40,
    progress: 0,
    endDate: null,
    imageSrc: 'resources/data_protection.png',
  },
  {
    title: 'In-depth training on data protection (V1.0)',
    category: 'Data Protection',
    duration: 51,
    progress: 0,
    endDate: null,
    imageSrc: 'resources/data_protection.png',
  },
  {
    title: 'Privacy Basics 1.0',
    category: 'Data Protection',
    duration: 40,
    progress: 3,
    endDate: null,
    imageSrc: 'resources/data_protection.png',
  },
  {
    title: 'WpHG compliance basics (V1.00.3)',
    category: 'WpHG-Compliance',
    duration: 30,
    progress: 3,
    endDate: null,
    imageSrc: 'resources/wphg.png',
  },
  {
    title: 'In-depth WpHG - sales representative (V1.00.2)',
    category: 'WpHG-Compliance',
    duration: 44,
    progress: 0,
    endDate: null,
    imageSrc: 'resources/wphg.png',
  },
];

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;
