import React from "react";
import Nav from "./components/nav";
import Intro from "./components/intro";
import Meet from "./components/meet";
import Features from "./components/features";
import Quote from "./components/quote";
import Demo from "./components/demo";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />

      <main>
        <Intro />
        <hr></hr>
        <Meet />
        <hr></hr>
        <Features />
        <hr></hr>
        <Quote />
        <Demo />
        <Footer />
      </main>
    </div>
  );
}

export default App;
