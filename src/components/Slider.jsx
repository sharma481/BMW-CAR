import { useState } from "react";

const images = [
  "/public/images/car1.jpg",
  "/public/images/car2.jpg",
  "/public/images/car3.jpg",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>‹</button>
      <img src={images[index]} alt="BMW Car" />
      <button onClick={nextSlide}>›</button>
    </div>
  );
};

export default Slider;
