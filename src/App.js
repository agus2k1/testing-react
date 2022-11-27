import React, { useState, useEffect } from "react";
import "./App.css"

const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, [])
  
  return (
    <div className="container">
      <h1>Github Users</h1>
      <ul>
        {users.map(user => {
          const {id, login, avatar_url, html_url} = user;
          return <li key={id}>
            <img src={avatar_url} alt={login}></img>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
      })}
      </ul>
      
    </div>
  );
}

export default App;
