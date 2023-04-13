import Header from "../molecules/Header";
import Banner from "../molecules/Banner";
import FavoriteFlightList from "../molecules/FavoriteFlightList";

const Favorites = () => {
  return (
    <>
      <Header />
      <Banner />
      <FavoriteFlightList title="FAVORITE FLIGHTS" />
    </>
  );
};

export default Favorites;
