import Banner from "./components/molecules/Banner";
import Header from "./components/molecules/Header";
import RocketsData from "./components/atoms/FlightCard";
import "reset-css";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <RocketsData />
    </>
  );
};

export default App;
