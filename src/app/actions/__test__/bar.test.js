import {
  GET_BAR,
  GET_BAR_ASYNC,
  CHANGE_BAR,
  START_LOADING,
  STOP_LOADING
} from "../const";

import * as actions from "../bar";

describe("test actions", () => {
  it("should return get bar type", () => {
    const expectedRes = {
      type: GET_BAR
    };
    expect(actions.getBar()).toEqual(expectedRes);
  });

  it("should return get bar async type", () => {
    const params = { buttons: [1, 2, 3], bars: [23, -10], limit: 100 };
    const expectedRes = {
      type: GET_BAR_ASYNC,
      params
    };
    expect(actions.getBarAsync(params)).toEqual(expectedRes);
  });

  it("should return changeBar type", () => {
    const params = { value: 12, barPosition: 1 };
    const expectedRes = {
      type: CHANGE_BAR,
      params
    };
    expect(actions.changeBar(params)).toEqual(expectedRes);
  });

  it("should return loading type", () => {
    const expectedRes = {
      type: START_LOADING
    };
    expect(actions.loading()).toEqual(expectedRes);
  });

  it("should return stop loading type", () => {
    const expectedRes = {
      type: STOP_LOADING
    };
    expect(actions.stopLoading()).toEqual(expectedRes);
  });
});
