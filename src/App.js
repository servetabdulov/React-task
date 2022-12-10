import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from './components/About';
import WorkSamples from "./components/WorkSamples"
import Contact from "./components/Contact"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className='nav'>
          <Link className='nav-link' to={"/"} >Home</Link>
          <Link className='nav-link' to={"/about"} >About</Link>
          <Link className='nav-link' to={"/worksamples"} >Work Samples</Link>
          <Link className='nav-link' to={"/contact"} >Contact</Link>
        </div>
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/worksamples' element={<WorkSamples />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
