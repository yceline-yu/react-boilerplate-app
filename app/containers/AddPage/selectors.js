/**
 * AddPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAdd = state => state.AddPage || initialState;

const makeSelectString = () =>
  createSelector(
    selectAdd,
    addPageState => addPageState.string,
  );

const makeSubmitString = () =>
  createSelector(
    selectAdd,
    addPageState => addPageState.submit,
  );

const makeError = () =>
  createSelector(
    selectAdd,
    addPageState => addPageState.error,
  );

export { selectAdd, makeSelectString, makeSubmitString, makeError };
