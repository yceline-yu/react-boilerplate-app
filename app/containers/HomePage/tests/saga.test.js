/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';

import serverData, { getStrings } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getStrings Saga', () => {
  let getStringsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getStringsGenerator = getStrings();

    const callDescriptor = getStringsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringsLoaded action if it requests the data successfully', () => {
    const response = ['test', 'test'];
    const putDescriptor = getStringsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(stringsLoaded(response)));
  });

  it('should call the stringsLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStringsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringsLoadingError(response)));
  });
});

describe('serverDataSaga Saga', () => {
  const serverDataSaga = serverData();

  it('should start task to watch for LOAD_STRINGS action', () => {
    const takeLatestDescriptor = serverDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_STRINGS, getStrings));
  });
});
