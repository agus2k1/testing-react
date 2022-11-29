import React, { useState } from "react";
import "./App.css"

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email){
      const person = {id: new Date().getTime().toString(), firstName, email };
      setPeople(currentPeople => {
        return [...currentPeople, person];
      })
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
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
        {
          people.map(person => {
            const {id, firstName, email} = person;
            return <div key={id}>{firstName}, {email}</div>
          })
        }
      </article>
    </>
  )
}

export default App;
