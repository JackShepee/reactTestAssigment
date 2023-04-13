import React, { useRef } from "react";
import styled from "styled-components";
import FlightCard from "../atoms/FlightCard";

type SliderProps = {
  title: string;
};

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SliderTitle = styled.h2`
  margin-bottom: 20px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin-left: 20px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: gray;
  cursor: pointer;
  padding: 0 10px;
`;

const MainSlider: React.FC<SliderProps> = ({ title }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <SliderWrapper>
      <SliderTitle>{title}</SliderTitle>
      <ArrowButton onClick={() => handleScroll(-300)}>{"<"}</ArrowButton>
      <ArrowButton onClick={() => handleScroll(300)}>{">"}</ArrowButton>
      <CarouselWrapper ref={carouselRef}>
        {[...Array(1)].map((_, index) => (
          <FlightCard key={index} />
        ))}
      </CarouselWrapper>
    </SliderWrapper>
  );
};

export default MainSlider;
