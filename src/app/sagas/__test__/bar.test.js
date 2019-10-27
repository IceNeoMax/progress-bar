import * as actions from "../../actions";
import { takeLatest, put } from "redux-saga/effects";

import bar, { getBars } from "../bar";

describe("bar Saga", () => {
  let getBarsGenerator;
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  const response = { buttons: [1, 2, 3], bars: [23, -10], limit: 100 };
  beforeEach(() => {
    getBarsGenerator = getBars();

    const putLoadingDescriptor = getBarsGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();

    const callDescriptor = getBarsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();

    const putStopLoadingDescriptor = getBarsGenerator.next({
      data: response,
      errMess: undefined
    }).value;
    expect(putStopLoadingDescriptor).toMatchSnapshot();
  });
  it("should dispatch the getBarAsync action if it requests the data successfully", () => {
    const putDescriptor = getBarsGenerator.next().value;
    expect(putDescriptor).toEqual(put(actions.getBarAsync(response)));
  });
});

describe("bar watch Saga", () => {
  const getBarSaga = bar();
  it("should start task to watch for GET_BAR action", () => {
    const takeLatestDescriptor = getBarSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(actions.GET_BAR, getBars));
  });
});
