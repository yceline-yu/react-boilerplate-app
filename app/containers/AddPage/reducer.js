/*
 * addPageReducer
 *
 */

import produce from 'immer';
import { CHANGE_STRING, SUBMIT_ERROR, SUBMIT_STRING } from './constants';

// The initial state
export const initialState = {
  string: '',
  submit: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const addPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.string = action.string;
        break;
      case SUBMIT_STRING:
        draft.submit = action.submit;
        break;
      case SUBMIT_ERROR:
        draft.error = action.error;
    }
  });

export default addPageReducer;
