import React , {createContext} from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom" ;

import Home from "./Components/Home";

import Work from "./Components/Work";

import Contact from "./Components/Contact";

import About from "./Components/About";

import Skill from "./Components/Skill";

export const example =  createContext();

const App=() => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/skill" element={<Skill />} />
          <Route path="/work" element={<Work />} />
           <Route path="/contact" element={<Contact />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


