import { useEffect, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const PaginationComponent = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const totalPages = Array.from({ length: Math.round(products.total / 10) });

  const getData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10}`
    );
    const json = await data.json();
    setProducts(json);
  };

  const setCurrentPage = (page) => {
    if (page >= 0 && page <= totalPages.length) {
      setPage(page);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="mx-5 md:mx-32 my-5">
      <div className="my-5 flex flex-col">
        <div className="flex items-center justify-start gap-5">
          <div className="w-5 h-10 bg-red-500"></div> <span className="font-title font-semibold text-lg text-red-500">Our Products</span>{" "}
        </div>
        <span className="mt-2 text-4xl font-title font-bold">
          Explore Our Products
        </span>
      </div>
      <div className="flex gap-5 flex-wrap">
        {products.products &&
          products.products.map((product) => (
            <Link to={/product/ + product.id} key={product.id}>
              <ProductCard props={product} />{" "}
            </Link>
          ))}
      </div>
      <div className="my-4 flex gap-4 flex-wrap justify-center items-center text-xl font-heading">
        <button
          className=" bg-red-600 rounded-full"
          onClick={() => setCurrentPage(page - 1)}
        >
          <FaCircleChevronLeft size={32} />
        </button>
        {products.products &&
          totalPages.map((_, index) => (
            <button
              key={index}
              className={`md:block rounded-full h-8 w-8 
                ${
                  index === page
                    ? "border-2 border-gray-900 bg-blue-400"
                    : "bg-slate-300"
                }
                ${Math.abs(index - page) <= 2 ? "block" : "hidden"}
                `}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}
        <button
          className=" bg-red-600 rounded-full"
          onClick={() => setCurrentPage(page + 1)}
        >
          <FaCircleChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
