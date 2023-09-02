import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Socials from "./components/SocialLinks";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Socials />
      <Header />
      {/* <About/> */}

      <div className="content">
        Message from my laptop
      </div>
    </div>
  );
}

export default App;
