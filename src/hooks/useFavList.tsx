import { useRecoilState } from "recoil";
import { favListState } from "../states/favList";

export type FavouriteTour = string;
export type FavouriteTours = FavouriteTour[];

export const useFavList = () => {
  const [favList, setFavList] = useRecoilState(favListState);

  const handleAdd = (id: FavouriteTour) => {
    setFavList((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleRemove = (id: FavouriteTour) => {
    setFavList((prev) => prev.filter((item: string) => item !== id));
  };

  const handleRemoveAll = () => {
    setFavList([]);
  };

  return {
    handleAdd,
    favList,
    handleRemove,
    handleRemoveAll,
  };
};
