import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import RecordBoard from "./components/RecordBoard";
import RecordPopUp from "./components/PatientRecord/RecordPopUp";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={RecordBoard} />
          </div>
        </Router>
      </Provider>
    );
  }
  l;
}

export default App;
