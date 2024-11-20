import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="w-auto flex overflow-hidden relative">
      <div
        className="flex min-w-full transition-transform duration-500"
        style={{ transform: `translateX(-${curr * 100}%)`, width: "100%" }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between  ">
        <button
          onClick={prev}
          className="p-1 bg-gray-400 rounded-full opacity-70  hover:bg-gray-700"
        >
          <Icon icon="mdi:chevron-left" className="size-16 cursor-pointer " />
        </button>
        <button
          onClick={next}
          className="p-1 bg-gray-400 rounded-full opacity-70  hover:bg-gray-700"
        >
          <Icon icon="mdi:chevron-right" className="size-16 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
