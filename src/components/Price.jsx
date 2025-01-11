import React, { useState } from "react";

const PriceRangeSlider = () => {
  const [price, setPrice] = useState(1500000); // مقدار پیش‌فرض

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold mb-4">بازه قیمتی</h2>
      <div className="w-full max-w-md">
        <input
          type="range"
          min="1000000"
          max="2000000"
          value={price}
          onChange={handleChange}
          className="lg:w-[250px] md:w-[200px] sm:[150px] w-[100px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>1000000</span>
          <span>{price}</span>
          <span>2000000</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;