import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/products" element={<Services />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
