import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { favoritesState, Rocket } from "../../utils/state";
import styled from "styled-components";
import image from "../../assets/backgorundImage_1.png";
import Button from "./Button";
import Delete from "../../assets/Delete.svg";
import { images } from "../../assets/images";

const SlideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlideTitle = styled.h3`
  margin-bottom: 10px;
`;

const SlideDescription = styled.p`
  font-size: 14px;
`;

const SlideImage = styled.img`
  max-width: 50%;
  height: auto;
  margin-bottom: 10px;
`;

const SlideWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 100%;
  max-width: 500px;
  margin-right: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const FavoriteFlightCard = () => {
  const [favoriteRockets, setFavoriteRockets] = useRecoilState(favoritesState);

  const handleDeleteClick = (rocket: Rocket, index: number) => {
    const newFavorites = [...favoriteRockets];
    newFavorites.splice(index, 1);
    setFavoriteRockets(newFavorites);
  };

  const favoriteSlides = favoriteRockets.map((rocket: Rocket, index) => (
    <SlideWrapper key={index}>
      <SlideContentWrapper>
        <SlideImage src={images[index % 3]} alt={rocket.name} />
        <SlideTitle>{rocket.name}</SlideTitle>
        <SlideDescription>{rocket.description}</SlideDescription>
        <ButtonWrapper>
          <Button text="BUY"></Button>
          <Button
            onClick={() => handleDeleteClick(rocket, index)}
            text={<img src={Delete} alt="Heart" />}
          ></Button>
        </ButtonWrapper>
      </SlideContentWrapper>
    </SlideWrapper>
  ));

  return <>{favoriteSlides}</>;
};

export default FavoriteFlightCard;
