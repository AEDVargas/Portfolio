import { useEffect, useState } from "react";

import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Socials from "./components/SocialLinks";
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
    <div className="App">
      <AnimatedCursor
            innerSize={8}
            color='0, 207, 0'
            />
      <div
        className="gradient"
        style={{
          position: 'fixed', // Ensure that the gradient doesn't block the content
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // Allow interactions with content beneath the gradient
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
            rgba(0, 207, 0, 0.25), transparent 10%)`,
        }}
      ></div>
      <Socials />
      <Header />
      <About />
    </div>
  );
}

export default App;
