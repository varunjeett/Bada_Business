import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MiddlePage from './MiddlePage';
import Footer from './Footer';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/">
            <Header />
            <MiddlePage />
            <Footer />
          </Route>

        </Switch>
      </div>

    </Router>

  );
}


export default App;
