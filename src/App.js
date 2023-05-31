import React from "react";

import { About } from "./Components/About/About";
import Home from "./Components/Home/Home";

import Service from "./Components/Service/Service";

import Contact from "./Components/Contact/Contact";
import Page from "./Components/Page/Page";

import Navbar from "./Components/Navbr/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import Howitworks from "./Components/Howitworks/Howitworks";
import Createprojectdetailes from "./Components/Createprojectdetailes/Createprojectdetailes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path=":userID" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Howitworks" element={<Howitworks />}></Route>

          <Route path="/Createprojectdetailes" element={<Createprojectdetailes />}></Route>

          
        </Routes>
      </BrowserRouter>

      <br />
      <Footer />
    </>
  );
};

export default App;
