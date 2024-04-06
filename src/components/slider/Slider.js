import React, { useState } from "react";
import "./css/Slider.css";
const Slider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="slider-container">
      <label htmlFor="slider" className="slider-label">
        Value:
      </label>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <span className="slider-value">{sliderValue}</span>
    </div>
  );
};

export default Slider;
