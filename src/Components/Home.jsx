import React from "react";
import SignUpLogin from "./SignUpLogin";
import Footer from "./Footer";
import Filters from "./Filters";
import Carousal from "./Carousal";
const Home = () => {
  return (
    <div className="relative z-10">
      <div className= "md:grid grid-cols-4 gap-5 md:mx-10 md:my-10">

      <Filters />
      <Carousal />
        {/* <div className='col-span-1' ><Filters /></div>
        <div className='col-span-2'><Carousal /></div> */}
      </div>


    </div>
  );
};

export default Home;
