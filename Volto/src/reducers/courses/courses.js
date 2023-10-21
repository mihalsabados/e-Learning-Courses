/**
 * Courses reducer.
 * @module reducers/courses/courses
 */

import { GET_COURSES } from '../../constants/ActionTypes';
import { map } from 'lodash';

const initialState = {
  error: null,
  items: [
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
  ],
  loaded: false,
  loading: false,
};

/**
 * Courses reducer.
 * @function courses
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function courses(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_COURSES}_PENDING`:
      return {
        ...state,
        error: null,
        loading: true,
        loaded: false,
      };
    case `${GET_COURSES}_SUCCESS`:
      return {
        ...state,
        error: null,
        items: map(action.result.items, (item) => ({
          ...item,
          '@id': item['@id'],
        })),
        loaded: true,
        loading: false,
      };
    case `${GET_COURSES}_FAIL`:
      return {
        ...state,
        error: action.error,
        items: [],
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
}
