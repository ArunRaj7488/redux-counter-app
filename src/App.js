import React from "react";
import { Provider } from "react-redux"
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store"
import Counter from "./components/counterapp";

function App() {
  return (
    <div className="App">
      <Provider store = { store}>
          <h1>Counter App</h1>
          <Counter />
          </Provider>
        </div>
  );
}

export default App;
