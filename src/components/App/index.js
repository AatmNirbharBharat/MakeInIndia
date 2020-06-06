import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
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
        <Link style={{ paddingRight: 12 }} to="/">
          Home
        </Link>
        <Link style={{ paddingRight: 12 }} to="/search">
          Search
        </Link>
        <Link style={{ paddingRight: 12 }} to="/add">
          Add Product
        </Link>
        <Link style={{ paddingRight: 12 }} to="/faq">
          FAQ
        </Link>
        <Link style={{ paddingRight: 12 }} to="/about">
          About
        </Link>
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
