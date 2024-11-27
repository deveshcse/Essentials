import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Filters = () => {
  const [allCategories, setAllCategories] = useState();
  const getCategoriesList = async () => {
    const categoriesList = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    const categoriesListJson = await categoriesList.json();
    setAllCategories(categoriesListJson);
  };

  useEffect(() => {
    getCategoriesList();
  }, []);
  return (
    <div
      className="hidden  h-full md:h-[400px] col-span-1 text-gray-800 font-title text-base md:flex flex-col overflow-scroll "
      style={{
        scrollbarWidth: "none", // Hides scrollbar in Firefox
        msOverflowStyle: "none", // Hides scrollbar in Internet Explorer/Edge
      }}
    >
      {allCategories &&
        allCategories.map((category) => (
          <div key={category} className="pb-4">
            <Link
              to={/allProduct/ + category}
              className="flex items-center justify-between  capitalize"
            >
              <span>{category}</span>
              <span className="mr-10">
                <RiArrowRightSLine size={24} className="" />
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Filters;
