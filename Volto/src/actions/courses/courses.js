/**
 * Courses actions.
 * @module actions/courses/courses
 */

import { GET_COURSES } from '../../constants/ActionTypes';

/**
 * Get Courses items.
 * @function getCourses
 * @returns {Object} Courses action.
 */
export function getCourses() {
  return {
    type: GET_COURSES,
    request: {
      op: 'get',
      path: `/@search?portal_type=courses`,
    },
  };
}
