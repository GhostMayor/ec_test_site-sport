import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import App from "app";
import basketStore, { initialState as basketInitialState } from "stores/basket";
import "./style.scss";

const history = createBrowserHistory();

const reducer = {
  basket: basketStore.reducer,
};

const preloadedState = {
  basket: basketInitialState,
};

const store = configureStore({
  reducer,
  preloadedState,
  devTools: process.env.NODE_ENV === "development",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
