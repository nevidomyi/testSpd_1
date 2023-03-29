import { FC } from "react";
import HomeBanner from "../../organisms/HomeBanner";
import Header from "../../organisms/Header";
import Tours from "../../organisms/Tours";

const Home: FC = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <Tours cardsPerPage={3} />
    </>
  );
};

export default Home;
