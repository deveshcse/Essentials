import { useEffect, useState } from "react";
import CarousalItems from "./CarousalItems";
import { Link } from "react-router-dom";

const Carousal = () => {
  const [data, setData] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getdata = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=10&skip=10");
    const json = await data.json();
    const carousalData = json.products;
    setData(carousalData);
  };

  useEffect(() => {
    getdata();
  }, []);

  const getPrevious = () => {
    const lastcurrentIndex = data.length - 1;
    if (currentIndex === 0) {
      setCurrentIndex(lastcurrentIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getNext = () => {
    const lastcurrentIndex = data.length - 1;
    if (currentIndex === lastcurrentIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  if (data) {
    return (
      <div className="h-full col-span-3 px-5 bg-black">
       
          <CarousalItems
            slide={data[currentIndex]}
            next={getNext}
            previous={getPrevious}
            items={data.length}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
          />
       
      </div>
    );
  }
};

export default Carousal;
