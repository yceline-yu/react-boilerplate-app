/**
 * Gets the strings from server
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Server string request/response handler
 */
export function* getStrings() {
  const requestURL = `http://localhost:3001/strings`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* serverData() {
  // Watches for LOAD_STRINGS actions and calls getStrings when one comes in.
  yield takeLatest(LOAD_STRINGS, getStrings);
}
