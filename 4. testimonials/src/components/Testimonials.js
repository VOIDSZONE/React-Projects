import React from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const rightHandler = () => {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const supriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card reviews={reviews[index]} />

      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={supriseHandler}
          className="bg-violet-400 cursor-pointer hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Suprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
