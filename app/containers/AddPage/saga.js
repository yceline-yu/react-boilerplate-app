// import request from 'utils/request';
// import { call, put } from 'redux-saga/effects';
// // import { LOAD_STRINGS } from 'containers/App/constants';
// import {
//   stringsLoaded,
//   stringsLoadingError,
// } from 'containers/HomePage/actions';
// /**
//  * Server string request/response handler
//  */
// export function* postString(string) {
//   // TODO: get actual server url
//   const requestURL = `http://localhost:3001/strings`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const strings = yield call(request, requestURL, {
//       method: 'POST',
//       body: string,
//     });
//     yield put(stringsLoaded(strings));
//   } catch (err) {
//     yield put(stringsLoadingError(err));
//   }
// }

// /**
//  * Root saga manages watcher lifecycle
//  */
// // export default function* serverData() {
// //   // Watches for LOAD_STRINGS actions and calls getStrings when one comes in.
// //   // By using `takeLatest` only the result of the latest API call is applied.
// //   // It returns task descriptor (just like fork) so we can continue execution
// //   // It will be cancelled automatically on component unmount
// //   yield takeLatest(LOAD_STRINGS, postString);
// // }
