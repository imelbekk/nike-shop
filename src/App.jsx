import React from "react";
import "./App.css";
import jordan from "../src/assets/air jordan.png";
import converse from "../src/assets/converse.png";
import { Routes, Route, Link } from "react-router-dom";
import New from "../src/Components/New/New";
import Men from "../src/Components/Men/men";
import Women from "../src/Components/Women/women";
import Kids from "../src/Components/Kids/kids";
import Jordan from "../src/Components/Jordan/jordan";
import Sale from "../src/Components/Sale/sale";
import Home from '../src/Components/Home/home'

import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <div>
      <nav>
        <div className="logos">
          <img src={jordan} alt="jordan" className="jordan" />
          <img src={converse} alt="converse" className="converse" />
        </div>

        <div className="texts">
          <a href="#">Find a Store</a> <span></span>
          <a href="#">Help</a> <span></span>
          <a href="#">Join Us</a> <span></span>
          <a href="#">Sign In</a>
        </div>
      </nav>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/jordan" element={<Jordan />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>

      <Footer/>

    </div>
  );
}
