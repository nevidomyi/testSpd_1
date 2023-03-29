import { atom } from "recoil";
import { FavouriteTours } from "../hooks/useFavList";

export const favListState = atom({
  key: "favList",
  default: [] as FavouriteTours,
});
