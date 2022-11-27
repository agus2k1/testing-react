import React, { useState } from "react";
import "./App.css"

function App() {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setTimeout(() => {
      setValue(prevValue => {
        return prevValue + 1;
      });
    }, 2000);
  }

  return (
    <div className="container">
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button onClick={handleIncrease} style={{padding: "1rem 3rem"}}>Increase</button>
    </div>
  );
}

export default App;
