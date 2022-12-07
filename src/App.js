import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
// pages
import Home from './Home';
import Error from './Error';
import About from './About';
import People from './People';
import Person from './Person';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path='/'>
                <Home/>
            </Route>
            <Route path='/about'>
                <About/>
            </Route>
            <Route path='/people'>
                <People/>
            </Route>
        </Routes>
    </Router>
  )
}
