import { atom } from "recoil";

export interface Rocket {
  id?: string;
  name: string;
  description: string;
}

export const favoritesState = atom<Rocket[]>({
  key: "favorites",
  default: [],
});
