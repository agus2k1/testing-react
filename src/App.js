import React, { useState } from "react";
import "./App.css"

function App() {
  const [person, setPerson] = useState({
    name: "Roy",
    age: 24,
    occupation: "CEO"
  });

  const changeName = () => {
    let newPerson = {...person, name: "Agus"};
    setPerson(newPerson);
  }

  return (
    <div className="container">
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.occupation}</h3>
      <button onClick={changeName}></button>
    </div>
  );
}

export default App;
