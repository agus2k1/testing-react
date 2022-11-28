import React, { useState, useEffect } from "react";
import "./App.css"

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");

  const getUser = () => {
    fetch(url)
      .then(resp => {
        if (resp.status >= 200 && resp.status <= 299){
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then(user => {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
      })
      
  }

  useEffect(() => {
    getUser();
  }, [])

  if (isLoading){
    return <div className="container">
      <h1>Loading...</h1>
    </div>
  }

  if (isError){
    return <div className="container">
      <h1>Error...</h1>
    </div>
  }

  return <div className="container">
    <h1>{user}</h1>
  </div>
}

export default App;
