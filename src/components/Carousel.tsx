import React, { useState } from "react";

const Carousel = () => {
  const textArray = [
    {
      miniTitle: "Startup 1",
      title: "Startup Title Text 1",
      text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      miniTitle: "Startup 2",
      title: "Startup Title Text 2",
      text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      miniTitle: "Startup 3",
      title: "Startup Title Text 3",
      text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      miniTitle: "Startup 4",
      title: "Startup Title Text 4",
      text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      miniTitle: "Startup 5",
      title: "Startup Title Text 5",
      text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
  ];

  const [index, setIndex] = useState<number>(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + textArray.length) % textArray.length
    );
  };

  return (
    <div>
      <div className="w-[736px] h-[257px] overflow-hidden">
        <button
          className="absolute left-28 top-[50%] transform -translate-y-1/2 z-10"
          onClick={handlePrev}
        >
          <svg
            fill="white"
            width={12}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {textArray.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 p-4 text-center text-white flex flex-col justify-center items-center"
            >
              <h6 className="text-[24px] font-bold">{item.miniTitle}</h6>
              <h1 className="text-[72px] font-bold">{item.title}</h1>
              <p className="text-[22px] leading-[32px]">{item.text}</p>
            </div>
          ))}
        </div>
        <button
          className="absolute right-28 top-[50%] transform -translate-y-1/2 z-10"
          onClick={handleNext}
        >
          <svg
            fill="white"
            width={12}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        {textArray.map((_, idx) => (
          <svg
            key={idx}
            className={`w-3 h-3 cursor-pointer`}
            fill={index === idx ? "white" : ""}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => setIndex(idx)}
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
