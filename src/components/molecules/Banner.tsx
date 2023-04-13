import { images } from "../../assets/images";
import styled from "styled-components";

const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 740px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <p>THE SPACE IS WAITING FOR</p>
      <p>YOU</p>
      <BannerImage src={images[0]} />
    </BannerWrapper>
  );
};

export default Banner;
