import { images } from "../../assets/images";
import styled from "styled-components";
import { ArrowDown } from "react-iconly";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 740px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 160px;
  align-items: center;
  overflow: hidden;
  color: white;
  font-size: 72px;
  background-color: rgba(30, 30, 30, 0.48);
`;

const BannerImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  transition: opacity 1s ease-in-out;
`;

const TextWrapper = styled.div`
  height: 349px;
`;

export const BannerText = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Syne";
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  color: #fff;
`;

const BannerTextBig = styled(BannerText)`
  font-size: 310px;
  line-height: 372px;
`;

const ScrollButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 250px;
  gap: 8px;
`;

const ScrollButton = styled.a`
  font-family: "Lato";
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  border: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ArrowDownText = styled(ArrowDown)`
  height: 40px;
  width: 40px;
  align-items: center;
  text-shadow: none;
`;

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BannerWrapper>
      <TextWrapper>
        <BannerText>
          {location.pathname === "/"
            ? "the space is waiting for"
            : "favourites"}
        </BannerText>
        {location.pathname === "/" && <BannerTextBig>you</BannerTextBig>}
      </TextWrapper>
      <ScrollButtonWrapper>
        <ScrollButton href="#grid">
          Explore tours <ArrowDownText />
        </ScrollButton>
      </ScrollButtonWrapper>
      {images.map((image, index) => (
        <BannerImage
          key={index}
          src={image}
          style={{ opacity: currentImageIndex === index ? 1 : 0 }}
        />
      ))}
    </BannerWrapper>
  );
};

export default Banner;
