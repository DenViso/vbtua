import React, { useState, useEffect } from "react";
import "./sliderStyling.css";
import { sliderData } from "../../../data/sliderData";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(4);

  const nextSlide = () => {
    const currentIndex = sliderData.findIndex(
      (item) => item.id === currentSlide
    );
    const nextIndex = (currentIndex + 1) % sliderData.length;
    setCurrentSlide(sliderData[nextIndex].id);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Час в мілісекундах (тут 5000 мілісекунд або 5 секунд)

    // Очищення інтервалу при виході з компонента
    return () => clearInterval(intervalId);
  }, [currentSlide]); // Викликається при зміні currentSlide

  return (
    <div className="slider-container">
      {sliderData.map((item) => (
        <div
          key={item.id}
          className={`slider ${currentSlide === item.id ? "active" : ""}`}
        >
          <img className="img-slider" src={item.image} alt={item.header} />
          <div
            className='content-slider'
          >
            <h1>{item.header}</h1>
            <p>${item.price}</p>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};
