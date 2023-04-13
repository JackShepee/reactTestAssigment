import React, { useRef } from "react";
import styled from "styled-components";
import FavoriteFlightCard from "../atoms/FavoriteFlightCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { favoritesState } from "../../utils/state";

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

const ClearButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  margin-left: 20px;
`;

const FavoriteFlightList: React.FC<SliderProps> = ({ title }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [_, setFavoritesState] = useRecoilState(favoritesState);
  const favorites = useRecoilValue(favoritesState);

  const handleScroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  const handleClearAll = () => {
    setFavoritesState([]);
  };

  return (
    <SliderWrapper>
      <SliderTitle>{title}</SliderTitle>
      <ArrowButton onClick={() => handleScroll(-300)}>{"<"}</ArrowButton>
      <ArrowButton onClick={() => handleScroll(300)}>{">"}</ArrowButton>
      {favorites.length > 0 && (
        <ClearButton onClick={handleClearAll}>Clear All</ClearButton>
      )}
      <CarouselWrapper ref={carouselRef}>
        <FavoriteFlightCard />
      </CarouselWrapper>
    </SliderWrapper>
  );
};

export default FavoriteFlightList;
