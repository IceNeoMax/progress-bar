import { all, fork } from "redux-saga/effects";
import bar from "./bar";

const rootSaga = function* rootGenerator() {
  yield all([fork(bar)]);
};

export default rootSaga;
