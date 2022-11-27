import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    }
  })

  return (
    <div className="container">
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </div>
  );
}

export default App;
