import Header from "../molecules/Header";
import Banner from "../molecules/Banner";
import MainSlider from "../molecules/MainSlider";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <MainSlider title="POPULAR TOURS" />
    </>
  );
};

export default Home;
