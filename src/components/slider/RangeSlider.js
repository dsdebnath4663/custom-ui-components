import React, { useState } from "react";

const RangeSlider = ({ values, onChange }) => {
  const [startValue, setStartValue] = useState(values[0]);
  const [endValue, setEndValue] = useState(values[1]);

  const handleStartChange = (event) => {
    const newValue = Math.min(Number(event.target.value), endValue);
    setStartValue(newValue);
    onChange([newValue, endValue]);
  };

  const handleEndChange = (event) => {
    const newValue = Math.max(Number(event.target.value), startValue);
    setEndValue(newValue);
    onChange([startValue, newValue]);
  };

  return (
    <div className="range-slider-container">
      <input
        type="range"
        min={values[0]}
        max={values[1]}
        value={startValue}
        onChange={handleStartChange}
        className="range-slider start"
      />
      <input
        type="range"
        min={values[0]}
        max={values[1]}
        value={endValue}
        onChange={handleEndChange}
        className="range-slider end"
      />
      <span className="slider-value">{`${startValue} - ${endValue}`}</span>
    </div>
  );
};

// Usage example:

export default RangeSlider;
