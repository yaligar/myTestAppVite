
// 1. Automatic Image slider which keeps sliding after every 3 seconds with Prev and next buttons.
// - write a test to check if on click of button, banner displays new image or not.

import React, { useEffect, useState } from "react";

function AutoImageSlider() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  ];

  const handlePrev = () => {
    setIndex((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };
  const handleNext = () => {
    setIndex((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <img src={images[index]} alt={"no inamge found"} />
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
}

export default AutoImageSlider;
