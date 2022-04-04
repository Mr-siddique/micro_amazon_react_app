import React, { useEffect, useState } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [over, setOver] = useState(false);
  const nextSlide = () => {
    setIndex((prevState) => (prevState + 1) % CarouselData.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevState) => (prevState + CarouselData.length - 1) % CarouselData.length
    );
  };
  useEffect(()=>{
    if(over===false){
      setTimeout(()=>{
        nextSlide();
      },5*1000)
    }
    return ()=>clearTimeout();
  },[over]);

  return (
    <div className="carouselContainer" style={{ width: "100%",height:'500px' }}>
      <AiOutlineLeft
        onClick={prevSlide}
        className="absolute left-0 text-3xl inset-y-1/3 text-gray-200 cursor-pointer"
      />
      <img
        src={CarouselData[index].image}
        style={{ width: "100%", objectFit: "cover",height:'100%' }}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      />
      <AiOutlineRight
        onClick={nextSlide}
        className="absolute right-0 text-3xl inset-y-1/3 text-gray-200 cursor-pointer"
      />
    </div>
  );
};

export default Carousel;