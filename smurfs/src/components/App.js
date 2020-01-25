import React, { Component } from "react";
import "./App.css";

import SmurfVillage from './SmurfVillage';
import SmurfForm from './smurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dave's Smurf Village</h1>
        <SmurfForm/>
        <SmurfVillage />
      </div>
    );
  }
}

export default App;
