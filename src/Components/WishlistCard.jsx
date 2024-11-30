import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import RatingComponent from "./RatingComponent";

const WishlistCard = ({ data, deleteButton, addToCart }) => {
  const { id, thumbnail, discountPercentage, title, price, rating, reviews } = data;
  return (
    <div className="min-w-64 max-w-64">
      <div className="relative">
        <div className=" bg-gray-200 rounded-md">
          <img
            src={thumbnail}
            alt="product-image"
            className="w-60 h-60 m-auto"
          />
        </div>
        <div className="bg-gray-950 text-white flex gap-5 justify-center items-center font-title text-base p-2">
          <button onClick={() => addToCart(data)}>
            <AiOutlineShoppingCart size={24} />
          </button>
          <button onClick={() => addToCart(data)}>Add To Cart</button>
        </div>
        <div className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-md text-white text-sm font-title">
          {Math.round(discountPercentage)}%
        </div>
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full pointer-events-none">
          <RiDeleteBin6Line
            size={20}
            className="m-1 pointer-events-auto hover:text-gray-600"
            onClick={() => deleteButton(id)}
          />
        </div>
      </div>

      <div className=" font-title text-base font-medium truncate">
        <div>
          <span className="text-black">{title}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-red-600">${price}</span>
          <span className="text-gray-500 line-through">
            ${Math.round(price / (1 - discountPercentage / 100))}
          </span>
        </div>
        <div className="flex gap-4">
          <div>
            <RatingComponent rating={rating} />
          </div>
          <span className="text-gray-500 font-semibold">{reviews.length}</span>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
