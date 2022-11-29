import React, { useState } from "react";
import "./App.css"

function App() {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name  = e.target.name;
    const value  = e.target.value;
    setPerson({...person, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age){
      const newPerson = {...person, id: new Date().getTime().toString()};
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  }

  return (
    <>
      <article className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email" value={person.email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="age">Age : </label>
            <input type="number" id="age" name="age" value={person.age} onChange={handleChange}/>
          </div>
          <button type="submit" onClick={handleSubmit}>Add Person</button>
        </form>
        {
          people.map(person => {
            const {id, firstName, email, age} = person;
            return <div key={id}>{firstName}, {email}, {age}</div>
          })
        }
      </article>
    </>
  )
}

export default App;
