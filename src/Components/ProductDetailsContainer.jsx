import RatingComponent from "./RatingComponent";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart } from "../Utils/CartSlice";
import { toggleWishlistItem } from "../Utils/WishlistSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDetailsContainer = ({ productDetails }) => {
  const {
    id,
    title,
    rating,
    reviews,
    availabilityStatus,
    price,
    description,
    minimumOrderQuantity,
    returnPolicy,
    category,
    stock,
  } = productDetails;
  
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  const isInCartList = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const dispatch = useDispatch();
  const handleBuyNow = () => {
    const product = {...productDetails, orderQuantity: quantity}
    dispatch(addToCart(product));
    navigate('/cart');

  };
  const handleWishlist = () => {
    dispatch(toggleWishlistItem(productDetails));
  };

  const availableSize = ["xs", "s", "m", "lg", "xl", "xxl"];
  const [quantity, setQuantity] = useState(minimumOrderQuantity);

  const increaseQuantity = () => {
    setQuantity((oldQuantity) =>
      oldQuantity + 1 > stock ? oldQuantity : oldQuantity + 1
    );
  };
  const decreaseQuantity = () => {
    setQuantity((oldQuantity) =>
      oldQuantity - 1 < minimumOrderQuantity ? oldQuantity : oldQuantity - 1
    );
  };

  return (
    <div className=" flex flex-col gap-2">
      <h2 className="text-2xl font-heading font-semibold">{title}</h2>

      <div className="flex gap-2 items-center justify-start">
        <RatingComponent rating={rating} />

        <span className="text-sm font-title text-gray-500 mt-1">
          ({reviews.length} Reviews)
        </span>
        <span className="text-gray-500 px-4 ">|</span>
        <span className="text-green-400 font-title text-sm mt-1">
          {availabilityStatus}
        </span>
      </div>
      <h2 className="font-heading text-2xl">${price}</h2>
      <span className="font-title text-sm">{description}</span>
      <div className="h-[1px] bg-gray-400 my-2"></div>
      {(category == "womens-dresses" ||
        category == "mens-shirts" ||
        category == "tops") && (
        <div className="flex gap-4 items-center">
          <span className="font-heading text-xl"> Colors: </span>
          <div className="w-4 h-4 bg-blue-300 rounded-full cursor-pointer"></div>
          <div className="w-4 h-4 bg-rose-300 rounded-full cursor-pointer"></div>
        </div>
      )}
      {(category == "womens-dresses" ||
        category == "mens-shirts" ||
        category == "tops") && (
        <div className="flex gap-3 md:gap-4 items-center">
          <h2 className="font-heading text-xl mr-4">Size: </h2>
          {availableSize.map((size) => (
            <div key={size} className="flex">
              <button className="border-2 border-gray-500 text-sm  font-title font-medium rounded-md w-10 h-10 focus:bg-red-600 ">
                {size}
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-4 items-center justify-start mt-2">
        <div className="flex  border-2 w-fit border-gray-400 rounded-md ">
          <button
            className="p-2 border-r-2 border-gray-400  focus:bg-red-600 rounded-l-md "
            onClick={decreaseQuantity}
          >
            <AiOutlineMinus size={24} />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className=" text-xl font-title font-medium focus:outline-none border-none w-16 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
          />
          <button
            className="p-2 border-l-2 border-gray-400 focus:bg-red-600 rounded-r-md transition-all"
            onClick={increaseQuantity}
          >
            <IoAddOutline size={24} />
          </button>
        </div>
        <div
          className={`flex items-center  border-2 border-gray-400 text-base font-title p-2 rounded-md font-medium ${
            isInCartList(id) ? "bg-red-500" : "bg-white"
          } `}
        >
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
        <div className="flex items-center  border-2 border-gray-400 p-2 rounded-md">
          {isInWishlist(id) ? (
            <FaHeart
              size={24}
              onClick={handleWishlist}
              className="text-red-500 cursor-pointer"
            />
          ) : (
            <FaRegHeart
              size={24}
              onClick={handleWishlist}
              className="text-gray-500 hover:text-rose-300 cursor-pointer"
            />
          )}
        </div>
      </div>

      <div className="border-2 border-gray-400 rounded-md w-fit mt-6">
        <div className="flex items-center justify-start gap-2">
          <div className="p-2">
            <TbTruckDelivery className="h-10 w-10 text-gray-800" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <div>
              <span className="text-base font-title font-medium">
                Free Delivery
              </span>
            </div>
            <div>
              <span className="text-xs font-title font-medium pr-2 underline underline-offset-2">
                Enter your postal code for Delivery availablity.
              </span>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-400 w-full my-2"></div>
        <div className="flex items-center justify-start gap-2">
          <div className="p-2">
            <HiOutlineArrowPath className="h-10 w-10 text-gray-800" />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-base font-title font-medium">
                Return Delivery
              </span>
            </div>
            <div>
              <span className="text-xs font-title font-medium pr-2">
                {returnPolicy}.<span className="underline mx-1">Details</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
