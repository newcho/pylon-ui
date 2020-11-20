import {
  all,
  takeEvery,
  takeLatest,
  call,
  put,
  fork,
} from "redux-saga/effects";

import axios from "axios";
import actions from "./actions";

import { USER } from "../../helpers/constant";

export function* login() {
  yield takeLatest(actions.LOGIN_REQUEST, function* ({ payload }) {
    const { email, password, callback } = payload;

    if (email === USER.email && password === USER.password) {
      localStorage.setItem("email", email);
      localStorage.setItem("auth", true);

      yield put({
        type: actions.LOGIN_SUCCESS,
        email: email,
        auth: true,
      });

      callback(true);
    } else {
      callback(false);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(login)]);
}
