import { atom } from "recoil";

export const favoriteFlightsState = atom({
  key: "favoriteFlightsState",
  default: [],
});

export const addToFavorites = (flight: any, favorites: any) => {
  const newFavorites = [...favorites, flight];
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
  return newFavorites;
};

export const removeFromFavorites = (flightId: string, favorites: any) => {
  const newFavorites = favorites.filter(
    (flight: any) => flight.flight_number !== flightId
  );
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
  return newFavorites;
};
