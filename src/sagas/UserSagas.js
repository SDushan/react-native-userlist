import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import { getUsersfromApi } from "../services";

export function* fetchUsers() {
  try {
    let receivedUsers = yield call(getUsersfromApi);
    if (receivedUsers.status == 200) {
      yield put({
        type: FETCH_USERS_SUCCESS,
        receivedUsers: receivedUsers.data
      });
    } else {
      console.log("Error while fetching data");
      throw error;
    }
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILED, error });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
