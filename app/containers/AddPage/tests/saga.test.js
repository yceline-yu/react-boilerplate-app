/**
 * Tests for AddPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { SUBMIT_STRING } from '../constants';
import { submitError } from '../actions';

import serverData, { postString } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getStrings Saga', () => {
  let postStringsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    const fixture = { submit: 'string' };
    postStringsGenerator = postString(fixture);
    const callDescriptor = postStringsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringsLoaded action if it requests the data successfully', () => {
    const response = ['test', 'test'];
    const putDescriptor = postStringsGenerator.next(response).value;
    expect(putDescriptor).toEqual(undefined);
  });

  it('should call the submitError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = postStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(submitError(response)));
  });
});

describe('serverDataSaga Saga', () => {
  const serverDataSaga = serverData();

  it('should start task to watch for LOAD_STRINGS action', () => {
    const takeLatestDescriptor = serverDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SUBMIT_STRING, postString));
  });
});
