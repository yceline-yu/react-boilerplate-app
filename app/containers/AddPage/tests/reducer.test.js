import produce from 'immer';

import addPageReducer from '../reducer';
import { changeString, submitError, submitString } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      string: '',
      submit: false,
      error: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(addPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeString action correctly', () => {
    const fixture = 'test';
    const expectedResult = produce(state, draft => {
      draft.string = fixture;
    });

    expect(addPageReducer(state, changeString(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the submitString action correctly', () => {
    const fixture = 'testing';
    const expectedResult = produce(state, draft => {
      draft.submit = fixture;
    });

    expect(addPageReducer(state, submitString(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the submitError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
    });

    expect(addPageReducer(state, submitError(fixture))).toEqual(expectedResult);
  });
});
