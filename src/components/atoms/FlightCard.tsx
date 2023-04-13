import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Button from "./Button";
import Heart from "../../assets/Heart.svg";
import { useRecoilState } from "recoil";
import { favoritesState, Rocket } from "../../utils/state";
import { images } from "../../assets/images";

const GET_ROCKETS = gql(`
query GetRockets {
  rockets {
    id
    description
    name
  }
 }
`);

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

const FlightCard = () => {
  const { data, loading, error } = useQuery(GET_ROCKETS);
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  if (loading) return <div>"Loading...."</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  const handleFavoriteClick = (rocket: Rocket) => {
    if (!favorites.some((fav) => fav.id === rocket.id)) {
      setFavorites([...favorites, rocket]);
    }
  };

  const slides = data.rockets.map((rocket: Rocket, index: number) => (
    <SlideWrapper key={index}>
      <SlideContentWrapper>
        <SlideImage src={images[index % 3]} alt={rocket.name} />
        <SlideTitle>{rocket.name}</SlideTitle>
        <SlideDescription>{rocket.description}</SlideDescription>
        <ButtonWrapper>
          <button>BUY</button>
          <Button onClick={() => handleFavoriteClick(rocket)}>L</Button>
        </ButtonWrapper>
      </SlideContentWrapper>
    </SlideWrapper>
  ));

  return <>{slides}</>;
};

export default FlightCard;
