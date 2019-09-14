import React from "react";
import Nav from "./components/nav";
import Intro from "./components/intro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />

      <main>
        <Intro />
      </main>
    </div>
  );
}

export default App;
