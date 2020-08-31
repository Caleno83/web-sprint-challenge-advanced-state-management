import React from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const App = () => {
 
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }


export default App;
