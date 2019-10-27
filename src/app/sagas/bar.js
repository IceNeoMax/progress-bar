import { all, put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { getBarsApi } from "../services/api";
import { toast } from "react-toastify";

export function* getBars() {
  yield put(actions.loading());
  let { data, errMess } = yield call(getBarsApi);
  yield put(actions.stopLoading());
  if (errMess) {
    toast.error(errMess);
  } else {
    yield put(
      actions.getBarAsync({
        buttons: data.buttons || [],
        bars: data.bars || [],
        limit: data.limit || 0
      })
    );
  }
}

export default function* bar() {
  yield all([yield takeLatest(actions.GET_BAR, getBars)]);
}
