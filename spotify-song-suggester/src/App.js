import React from "react";
import "./App.css";

import Header from "./components/dashboard";
import Login from "./components/Login";
import Reg from "./components/Reg";


function App() {

 
  return (
    <div className="App">
      <h2>Spotify Song Suggester</h2>
      <Reg />
      
    </div>
  );
}

export default App;
