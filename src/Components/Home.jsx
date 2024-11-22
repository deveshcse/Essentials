import React from "react";
import SignUpLogin from "./SignUpLogin";
import Footer from "./Footer";
import Filters from "./Filters";
import Carousal from "./Carousal";
import Timer from "./Timer";
import FlashSaleContainer from "./FlashSaleContainer";
const Home = () => {
  return (
    <div className="relative z-10">
      <div className="md:grid grid-cols-4 gap-5 md:mx-32 md:my-10">
        <Filters />
        <Carousal />
      </div>

      <FlashSaleContainer />
    </div>
  );
};

export default Home;
