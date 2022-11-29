import React, { useState, useEffect } from "react";
import "./App.css"

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
    console.log(firstName);
    console.log(email);
  }

  return (
    <>
      <article className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type="submit">Add Person</button>
        </form>
      </article>
    </>
  )
}

export default App;
