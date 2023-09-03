import { useEffect, useState } from "react";

import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import About from "./components/AboutMe/AboutMe";
import AnimatedCursor from 'react-animated-cursor';

function App() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [])

  return (
    <div id="section1" className="main-parent">
      <div className="main-child">
        <Header />
      </div>
        <About />
    </div>
  );
}

export default App;
