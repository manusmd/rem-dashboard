import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navigation />
    </div>
  );
}

export default App;
