import React from 'react';
import {Routes, Route} from "react-router-dom";
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/Contactinfo' element={<ContactInfo />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
    </>
  );
};

export default App;
