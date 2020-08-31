import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Reducer } from "./Reducers/Reducer";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

//create store to save state from reducers to use when needed
const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
