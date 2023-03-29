import { FC } from "react";
import Header from "../../organisms/Header";
import FavBanner from "../../organisms/FavoritesBanner";
import FavoritesTours from "../../organisms/FavoritesTours";

const Favorites: FC = () => {
  return (
    <>
      <Header isChecked={true} />
      <FavBanner />
      <FavoritesTours cardsPerPage={1} />
    </>
  );
};

export default Favorites;
