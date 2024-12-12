import Filters from "./Filters";
import Carousal from "./Carousal";
import FlashSaleContainer from "./FlashSaleContainer";
import PaginationComponent from "./PaginationComponent";
const Home = () => {
  return (
    <div className="relative z-10">
      <div className="md:grid grid-cols-4 gap-5 md:mx-32 md:my-10">
        <Filters />
        <Carousal />
      </div>

      <FlashSaleContainer />
      <PaginationComponent />
    </div>
  );
};

export default Home;
