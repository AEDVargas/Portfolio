import { useEffect, useState } from "react";

import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import About from "./components/AboutMe/AboutMe";
import Logo from "./components/Logo";
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
    <div className="main-parent">
      <head>
      <Navbar />
      </head>
      <div className="main-child">
      <Header />

      </div>
      <div className="limit">
        <About />
      </div>
    </div>
  );
}

export default App;
