/*
 * AddPage Actions
 *
 */

import { CHANGE_STRING, SUBMIT_STRING, SUBMIT_ERROR } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} string The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_STRING
 */
export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

/**
 * Changes status of the form
 *
 * @param  {string} submit The final version of the input field
 *
 * @return {object} An action object with a type of SUBMIT_STRING
 */
export function submitString(submit) {
  return {
    type: SUBMIT_STRING,
    submit,
  };
}

/**
 * Dispatched when posting fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of SUBMIT_ERROR passing the error
 */
export function submitError(error) {
  return {
    type: SUBMIT_ERROR,
    error,
  };
}
