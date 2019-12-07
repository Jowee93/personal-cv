import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import CorporatePage from "./pages/corporatePage";
import CreativePage from "./pages/creativePage";

function App() {
  return (
    <div>
      <Route
        path="/"
        exact
        component={props => {
          return <HomePage {...props} />;
        }}
      />
      <Route
        path="/corporate"
        component={props => {
          return <CorporatePage {...props} />;
        }}
      />
      <Route
        path="/creative"
        component={props => {
          return <CreativePage {...props} />;
        }}
      />
    </div>
  );
}

export default App;
