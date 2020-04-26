import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import styles from "./App.module.css";

import Template from "./views/Template";
import Content from "./views/Content";
import NoMatch from "./views/NoMatch";

const routes = [
  {
    title: "Template",
    path: "/",
    component: Template,
    exact: true,
  },
  {
    title: "Content",
    path: "/content",
    component: Content,
  },
];

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <nav className={styles.nav}>
          {routes.map((route, i) => (
            <NavLink key={i} to={route.path}>
              {route.title}
            </NavLink>
          ))}
        </nav>

        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
