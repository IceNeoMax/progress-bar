import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "../../store";

import ProgressBar from "../ProgressBar";

describe("ProgressBar testing", () => {
  let store;

  beforeAll(() => {
    store = configureStore;
  });

  it("should render ProgressBar component", () => {
    const { container } = render(
      <Provider store={store}>
        <ProgressBar />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should have a class attribute", () => {
    const { container } = render(
      <Provider store={store}>
        <ProgressBar />
      </Provider>
    );
    expect(container.firstChild.hasAttribute("class")).toBe(true);
  });
});
