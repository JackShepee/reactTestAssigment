import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FlightCard from "../atoms/FlightCard";
import { ChevronLeft, ChevronRight } from "react-iconly";
import Button from "../atoms/Button";
import { Container } from "../atoms/Container";
import { Rocket } from "../../utils/state";

type SliderProps = {
  title: string;
  items: Rocket[];
};

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  max-width: 1440px;
  width: 100%;
  padding-bottom: 200px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  width: 100%;
  height: 44px;
  margin-top: 96px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  height: 44px;
`;

const SliderTitle = styled.h2`
  font-family: "Syne";
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #1e1e1e;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 24px;
  overflow-x: scroll;
`;

const ArrowButton = styled(Button)`
  justify-content: center;
  padding: 18px 15px;
`;

const MainSlider: React.FC<SliderProps> = ({ title, items }) => {
  const [currPage, setCurrPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleScroll = (pageOffset: number) => {
    if (currPage + pageOffset < 0) {
      return;
    }
    if (
      carouselRef.current &&
      (currPage + pageOffset) * carouselRef.current.scrollLeft >=
        carouselRef.current.offsetWidth -
          (cardRef.current?.offsetWidth || 0) -
          20
    ) {
      return;
    }
    console.log(currPage + pageOffset);
    setCurrPage(currPage + pageOffset);
  };

  useEffect(() => {
    if (carouselRef.current && cardRef.current) {
      carouselRef.current.scrollLeft =
        currPage * (cardRef.current.offsetWidth + 24);
    }
  }, [currPage]);

  return (
    <Container id="grid">
      <SliderWrapper>
        <HeaderWrapper>
          <SliderTitle>{title}</SliderTitle>
          <ButtonWrapper>
            <ArrowButton onClick={() => handleScroll(-1)}>
              <ChevronLeft />
            </ArrowButton>
            <ArrowButton onClick={() => handleScroll(1)}>
              <ChevronRight />
            </ArrowButton>
          </ButtonWrapper>
        </HeaderWrapper>
        <CarouselWrapper ref={carouselRef}>
          {items.map((rocket: Rocket, index: number) => (
            <div
              ref={cardRef}
              key={rocket.id}
              style={{ flexShrink: 0, flexBasis: "calc(33% - 12px)" }}
            >
              <FlightCard index={index} rocket={rocket} variant="wide" />
            </div>
          ))}
        </CarouselWrapper>
      </SliderWrapper>
    </Container>
  );
};

export default MainSlider;
