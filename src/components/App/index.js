import React from "react";
import logo from "../../Make_In_India.png";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Search from "../Search";
import AddProduct from "../AddProduct";
import FAQ from "../FAQ";

function App() {
  return (
    <div className="App">
      <img alt="logo" src={logo} />
      <h1>Aatm Nirbhar Bharat</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/search">
          Search
        </NavLink>
        <NavLink className="nav-link" to="/add">
          Add Product
        </NavLink>
        <NavLink className="nav-link" to="/faq">
          FAQ
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
