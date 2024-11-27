import { FaHeart, FaRegHeart } from "react-icons/fa";
import RatingComponent from "./RatingComponent";
import { useDispatch } from "react-redux";
import { toggleWishlistItem } from "../Utils/WishlistSlice";
import { useSelector } from "react-redux";

const ProductCard = ({ props }) => {

  const { id, title, thumbnail, price, rating, discountPercentage, reviews } =
    props;
  
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.wishlistItems);
  
  const isInWishlist =(id) =>{
    return wishlistItems.some(item => item.id === id);
  };

  const handleClickOnWishlistButton = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the Link
    e.preventDefault();  // Prevent navigation if needed
    dispatch(toggleWishlistItem(props));
    
  };

  return (
    <div className="min-w-64">
      <div className="relative">
        <div className=" bg-gray-200 rounded-md">
          <img
            src={thumbnail}
            alt="product-image"
            className="w-60 h-60 m-auto"
          />
        </div>
        <div className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-md text-white text-sm font-title">
          {Math.round(discountPercentage)}%
        </div>
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full pointer-events-none">
          {isInWishlist(id) ? (
            <FaHeart
              size={20}
              className="m-1 pointer-events-auto text-red-500"
              onClick={handleClickOnWishlistButton}
            />
          ) : (
            <FaRegHeart
              size={20}
              className="m-1 pointer-events-auto hover:text-gray-600"
              onClick={handleClickOnWishlistButton}
            />
          )}
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

export default ProductCard;
