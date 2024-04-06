import { useState } from "react";
import RangeSlider from "./RangeSlider";

function RangeSliderWithStartAndEndRange() {
  const initialValues = [0, 100];
  const [rangeValues, setRangeValues] = useState(initialValues);

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };
  return (
    <div className="app">
      <h1>Range Slider Example</h1>
      <RangeSlider values={initialValues} onChange={handleRangeChange} />
    </div>
  );
}

export default RangeSliderWithStartAndEndRange;
