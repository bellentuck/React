import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

// Here, we register our watcher saga(s) and
// export them as a single generator function
// (startForeman) comprising our root Saga.
export default function* startForeman() {
  yield fork(watchSearchMedia);
}
