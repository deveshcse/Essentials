import { useState } from "react";

const ProductImageContainer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Left Column */}
      <div className="flex flex-col gap-4 " style={{ height: "100%" }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="hidden bg-gray-100 md:flex w-44 rounded-md cursor-pointer"
            style={{ height: "calc(33.33% - 8px)" }} // Dividing evenly into thirds with spacing
            onMouseOver={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`img-${index}`}
              className="w-full h-full object-cover p-2"
            />
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div
        className="flex items-center justify-center bg-gray-100 rounded-md"
        style={{ flex: 1 }}
      >
        <img
          src={images[currentIndex]}
          alt="main"
          className="w-[1020px] p-2 h-full object-contain"
        />
      </div>

      <div className="flex gap-4 md:hidden ">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className=" bg-gray-100 flex w-52 rounded-md"
            // style={{ height: "calc(33.33% - 8px)" }} // Dividing evenly into thirds with spacing
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`img-${index}`}
              className="w-full h-full object-cover p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageContainer;
