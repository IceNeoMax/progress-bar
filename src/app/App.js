import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Bar from "./components/Bar";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Bar />
      </Provider>
    );
  }
}

export default App;
