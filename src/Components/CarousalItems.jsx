import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CarousalItems = ({
  slide,
  next,
  previous,
  items,
  setCurrentIndex,
  currentIndex,
}) => {
  console.log(slide, slide.id);

  const indicator = [...Array(items).keys()];

  return (
    <div className="m-auto relative flex  md:gap-10 justify-center items-center h-full md:h-[400px] bg-black text-white">
        <Link to={'/product/'+ slide.id}><div className="flex gap-5 justify-center items-center h-full px-20 cursor-pointer">
          <div className="flex  flex-col gap-2 md:gap-5 ">
            <h2 className="font-title text-base ">{slide.title}</h2>
            <h2 className="font-heading md:text-5xl font-semibold">
              Up to {Math.ceil(slide?.discountPercentage)}% off Voucher
            </h2>
            <div className="flex gap-4 font-title">
              <button
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "8px",
                }}
              >
                Shop Now
              </button>
              <button className="pt-1 ">
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <img
            src={slide?.thumbnail}
            alt="img"
            className="w-60 md:w-80"
          />
        </div>
        </Link>


      <div className="absolute top-0 h-full w-full flex justify-between items-center pointer-events-none">
        <button onClick={previous} className="pointer-events-auto">
          <BsFillArrowLeftCircleFill size={24} />
        </button>
        <button onClick={next} className="pointer-events-auto">
          <BsFillArrowRightCircleFill size={24} />
        </button>
      </div>
      <div className="text-white absolute bottom-2 flex gap-2  justify-center items-center">
        {indicator.map((item) => (
          <div
            key={item}
            className={`rounded-full cursor-pointer ${
              item == currentIndex
                ? " bg-white h-2 w-2 md:h-3 md:w-3"
                : " bg-gray-400 h-1 w-1 md:h-2 md:w-2"
            }`}
            onClick={() => setCurrentIndex(item)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarousalItems;
