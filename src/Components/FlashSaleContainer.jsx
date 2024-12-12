import React from "react";
import Timer from "./Timer";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ProductCard from "./ProductCard";
import { getTomorrowDate } from "../Utils/getTomorrowDate";


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FlashSaleContainer = () => {

  const [salesData, setSalesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerEndDate = getTomorrowDate()

  const getSalesData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setSalesData(json.products);
  };

  useEffect(() => {
    getSalesData();
  }, []);

  const totalProducts = salesData.length;
  const getPreviousCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProducts - 1 : prevIndex - 1
    );
  };
  const getNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalProducts - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-4 mx-5 md:mx-32 flex flex-col gap-5">
      <div className="flex gap-4 justify-start items-center">
        <div className="h-10 w-5 bg-red-500 "></div>

        <div className="flex gap-8">
          <span className="font-title font-semibold text-lg text-red-500">{`Today's`}</span>
          <span className="md:hidden font-heading text-xl md:text-4xl font-semibold md:mt-4">
            Flash Sales
          </span>
        </div>
      </div>
      <div className="flex gap-10 items-center justify-between">
        <div className="flex gap-2 md:gap-10">
          <span className="hidden md:block font-heading text-xl md:text-4xl font-semibold md:mt-4">
            Flash Sales
          </span>
          <Timer timerEndDate={timerEndDate} />
        </div>

        <div className="flex md:gap-4 items-center mt-4 ">
          <button onClick={getPreviousCard}>
            <BsFillArrowLeftCircleFill size={24} color="gray" />
          </button>
          <button onClick={getNextCard}>
            <BsFillArrowRightCircleFill size={24} color="gray" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 justify-start items-center overflow-hidden">
        {salesData.slice(currentIndex, currentIndex + 5).map((item) => (
          <Link to={/product/ + item.id} key={item.id}>
            <ProductCard props={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlashSaleContainer;
