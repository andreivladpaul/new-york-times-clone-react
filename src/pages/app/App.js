import './App.css';
import { createContext, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import FirstPage from '../../components/firstPage/FirstPage'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<FirstPage />} />
        <Route exact path='/:category' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </div >
  );
}

export default App;
