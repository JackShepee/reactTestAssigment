import React, { useRef } from "react";
import styled from "styled-components";
import FlightCard from "../atoms/FlightCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { favoritesState } from "../../utils/state";
import { Rocket } from "../../utils/state";
import { Container } from "../atoms/Container";

type SliderProps = {
  title?: string;
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 712px;
  width: 100%;
  height: 44px;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  height: 44px;
`;

const FavoritesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const ClearButton = styled.button`
  font-family: "Lato";
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  color: #556b84;
  background-color: #fff;
  cursor: pointer;
  border: none;
`;

const FavCard = styled(FlightCard)`
  flex-basis: calc(33% - 20px);
  max-width: unset;
`;

const FavoriteFlightList: React.FC<SliderProps> = ({ title }) => {
  const [_, setFavoritesState] = useRecoilState(favoritesState);
  const favorites = useRecoilValue(favoritesState);

  const handleClearAll = () => {
    setFavoritesState([]);
  };

  return (
    <Container>
      <HeaderWrapper>
        <ButtonWrapper>
          {favorites.length > 0 && (
            <ClearButton onClick={handleClearAll}>Clear All</ClearButton>
          )}
        </ButtonWrapper>
      </HeaderWrapper>
      <FavoritesGrid>
        {favorites.map((rocket: Rocket, index: number) => (
          <FavCard
            key={rocket.id}
            index={index}
            rocket={rocket}
            variant="wide"
          />
        ))}
      </FavoritesGrid>
    </Container>
  );
};

export default FavoriteFlightList;
