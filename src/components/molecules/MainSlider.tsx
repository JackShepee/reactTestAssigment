import React, { useRef } from "react";
import styled from "styled-components";
import FlightCard from "../atoms/FlightCard";

type SliderProps = {
  title: string;
};

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  position: relative;
  width: 100%;
  height: 720px;

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (max-width: 480px) {
    height: 500px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 712px;

  width: 1281px;
  height: 44px;

  @media (max-width: 1281px) {
    width: 100%;
    padding: 0 20px;
    justify-content: space-between;
  }
`;

const SliderTitle = styled.h2`
  width: 465px;
  height: 38px;

  font-family: "Syne";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #1e1e1e;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 28px;
    text-align: left;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0 20px;
  }
`;

const ArrowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 44px;
  height: 44px;

  background: #ececec;
  transform: matrix(-1, 0, 0, 1, 0, 0);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
    padding: 5px;
  }
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
      <HeaderWrapper>
        <SliderTitle>{title}</SliderTitle>
        <ArrowButton onClick={() => handleScroll(-300)}>{">"}</ArrowButton>
        <ArrowButton onClick={() => handleScroll(300)}>{"<"}</ArrowButton>
      </HeaderWrapper>
      <CarouselWrapper ref={carouselRef}>
        {[...Array(1)].map((_, index) => (
          <FlightCard key={index} />
        ))}
      </CarouselWrapper>
    </SliderWrapper>
  );
};

export default MainSlider;
