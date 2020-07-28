import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // TEST
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TEST

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Test</h1>, root);
});