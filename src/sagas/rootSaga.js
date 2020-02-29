import { fork } from "redux-saga/effects";
import { watchFetchUsers } from "./UserSagas";

export default function* rootSaga() {
  yield fork(watchFetchUsers);
}
