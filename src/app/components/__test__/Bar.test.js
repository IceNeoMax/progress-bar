import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "../../store";
import { changeBar } from "../../actions/bar";
import Bar, { mapDispatchToProps } from "../Bar";

describe("Bar testing", () => {
  let store;

  beforeAll(() => {
    store = configureStore;
  });

  it("should have a class attribute", () => {
    const { container } = render(
      <Provider store={store}>
        <Bar />
      </Provider>
    );
    expect(container.firstChild.hasAttribute("class")).toBe(true);
  });

  describe("test dispatch", () => {
    it("should have dispatch actions", () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.changeBar).toBeDefined();
    });

    it("should dispatch changeBar when called", () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.changeBar();
      expect(dispatch).toHaveBeenCalledWith(changeBar());
    });
  });
});
