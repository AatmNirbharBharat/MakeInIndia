import React from "react";
import {
  NavLink,
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
    <Router>
      <Route render={({ location }) => <Navbar pages={pages} />} />
      <Switch>
        {pages.map((page, index) => (
          <Route
            key={index}
            exact
            path={page.pageLink}
            render={({ match }) => <page.view />}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

function Navbar({ pages }) {
  return (
    <React.Fragment>
      {pages.map((page, index) => (
        <NavLink className="nav-link" key={index} exact to={page.pageLink}>
          {page.displayName}
        </NavLink>
      ))}
    </React.Fragment>
  );
}
