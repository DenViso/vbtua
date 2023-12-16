import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Slider } from "./Components/Header/Slider/Slider";
import { StartPage } from "./Components/StartPage/StartPage";
import { Footer } from "./Components/Footer/Footer";
import { Shop } from "./Components/Shop/Shop";
import { Product } from "./Components/Shop/Product/Product";
import { sliderData } from "./data/sliderData";


function App() {
  ;
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="*" element={[<Slider />, <StartPage />]}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product id = {"1"} />} />
        
      </Routes>
      <Footer />
      {/* <StartPage/> */}
    </div>
  );
}

export default App;
