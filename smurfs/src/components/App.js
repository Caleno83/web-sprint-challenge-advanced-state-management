import React from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import { Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Route path="/" exact component={Home} />

      <Route path="/smurfs">
        <SmurfForm />
      </Route>
    </div>
  );
};

export default App;
