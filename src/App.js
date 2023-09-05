import { useEffect, useState } from "react";

import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/AboutMe/AboutMe";
import './style.css';


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
    <div className="main">
    </div>
  );
}

export default App;



{/* <div className="main-parent">
<div className="main-child">
<Header />
</div>
<div className="limit">
  <About />
</div>
</div> */}