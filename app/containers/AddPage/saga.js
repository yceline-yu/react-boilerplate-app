import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { submitError } from './actions';
import { SUBMIT_STRING } from './constants';

/**
 * Server string request/response handler
 */
export function* postString(string) {
  const requestURL = `http://localhost:3001/strings`;

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string: string.submit }),
    });
  } catch (err) {
    yield put(submitError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* serverData() {
  // Watches for SUBMIT_STRING actions and calls postStrings when one comes in.
  yield takeLatest(SUBMIT_STRING, postString);
}
