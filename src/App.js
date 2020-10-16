import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MiddlePage from "./MiddlePage";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <div className="app__layout">
              <Footer />
              <MiddlePage />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
