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

export { selectAdd, makeSelectString };
