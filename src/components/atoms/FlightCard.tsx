import styled from "styled-components";
import Button from "./Button";
import { Heart2, Delete } from "react-iconly";
import { useRecoilState } from "recoil";
import { favoritesState, Rocket } from "../../utils/state";
import { images } from "../../assets/images";

const SlideWrapper = styled.div<{
  variant: "wide" | "thin";
}>`
  box-sizing: border-box;
  border: 1px solid #d3eaff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: ${(props) => (props.variant === "wide" ? "unset" : "411px")};
  height: 700px;
  ${(props) => props.variant === "wide" && "flex-basis: calc(33% - 12px);"};
`;

const SlideTitle = styled.h3`
  font-family: "Syne";
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #1e1e1e;
  padding: 0px 32px;
`;

const SlideDescription = styled.p`
  font-family: "Lato";
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #556b84;
  padding: 0px 32px;
`;

const SlideImage = styled.img`
  height: 210px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  gap: 16px;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px 24px 32px;
  gap: 16px;
`;

const BuyButton = styled(Button)`
  max-width: 280px;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Syne";
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;

const FlightCard = (props: {
  rocket: Rocket;
  index: number;
  variant: "wide" | "thin";
}) => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const handleFavoriteClick = (rocket: Rocket) => {
    if (!favorites.some((fav) => fav.id === rocket.id)) {
      setFavorites([...favorites, rocket]);
    } else {
      handleDeleteClick(rocket);
    }
  };

  const handleDeleteClick = (rocket: Rocket) => {
    const newFavorites = favorites.filter((fav) => fav.id !== rocket.id);
    setFavorites(newFavorites);
  };

  return (
    <SlideWrapper variant={props.variant}>
      <SlideImage src={images[props.index % 3]} alt={props.rocket.name} />
      <TextWrapper>
        <SlideTitle>{props.rocket.name}</SlideTitle>
        <SlideDescription>{props.rocket.description}</SlideDescription>
      </TextWrapper>
      <ButtonWrapper>
        <BuyButton variant="primary">BUY</BuyButton>
        <Button onClick={() => handleFavoriteClick(props.rocket)}>
          {!favorites.some((fav) => fav.id === props.rocket.id) ? (
            <Heart2 />
          ) : (
            <Delete />
          )}
        </Button>
      </ButtonWrapper>
    </SlideWrapper>
  );
};

export default FlightCard;
