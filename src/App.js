import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Socials from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Socials />
      {/* <Header /> */}
      <div className="content">
      </div>
    </div>
  );
}

export default App;
