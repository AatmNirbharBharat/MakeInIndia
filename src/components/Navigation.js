import React from "react";
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import AddProduct from "./AddProduct";
import FAQ from "./FAQ";
import About from "./About";

export default function Navigation() {
  const pages = [
    { pageLink: "/", displayName: "Home", view: Home },
    { pageLink: "/search", displayName: "Search", view: Search },
    { pageLink: "/add", displayName: "Add Product", view: AddProduct },
    { pageLink: "/faq", displayName: "FAQ", view: FAQ },
    { pageLink: "/about", displayName: "About", view: About },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Router>
        <Route render={({ location }) => <Navbar pages={pages} />} />
        <Switch>
          {pages.map((page, index) => (
            <Route
              exact
              path={page.pageLink}
              render={({ match }) => <page.view key={index} />}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

function Navbar({ pages }) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}