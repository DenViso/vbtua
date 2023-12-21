import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Slider } from "./Components/Header/Slider/Slider";
import { StartPage } from "./Components/StartPage/StartPage";
import { Footer } from "./Components/Footer/Footer";
import { Shop } from "./Components/Shop/Shop";
import { Blog } from "./Components/Blog/Blog";
import { Product } from "./Components/Shop/Product/Product";
import { Contact } from "./Components/Footer/SubFooter/Contact";
import { Login } from "./Components/Header/LogIn/Login";
import { Forgot } from "./Components/Header/LogIn/Forgot";
import { Privacy } from "./Components/Footer/Privacy";
import { BlogItem } from "./Components/Blog/BlogItem";
import { OurStory } from "./Components/OurStory/OurStory";
import { Error } from "./Components/Error/Error";
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="*" element={[<Slider />, <StartPage />]}>
          {/* <Route index element={<StartPage />} />  */}
        </Route>
        <Route path="/shop" element={<Shop />} />
        <Route path ='/shop/:id' element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/error" element={<Error />} />



      </Routes>
      <Footer />
      {/* <StartPage/> */}
    </div>
  );
}

export default App;
