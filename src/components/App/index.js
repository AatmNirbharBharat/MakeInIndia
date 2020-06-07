import React from "react";
import logo from "../../Make_In_India.png";
import "./App.css";
import Navigation from "../Navigation";

function App() {
  return (
    <div className="App">
      <img alt="logo" src={logo} />
      <h1>Aatm Nirbhar Bharat</h1>
      <Navigation />
    </div>
  );
}

export default App;
