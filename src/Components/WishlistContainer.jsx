import { useSelector } from "react-redux";
import WishlistCard from "./WishlistCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../Utils/CartSlice";
import { removeFromWishlist } from "../Utils/WishlistSlice";
const WishlistContainer = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const dispatch = useDispatch();
  const handleDeleteButton = (id) => {
    dispatch(removeFromWishlist(id));
  };
  const handleAddToCart = (data) => {
    const product = { ...data, orderQuantity: data.minimumOrderQuantity };
    dispatch(addToCart(product));
  };

  return (
    <div className="mt-10 mx-5 md:mx-32">
      <div className="text-xl font-title my-2">
        <span>Wishlist ({wishlistItems.length})</span>
      </div>
      {!wishlistItems.length && <span className="text-base">Looks like the Wishlist is empty.</span> }
      <div className="flex flex-start gap-5 flex-wrap">
        {wishlistItems &&
          wishlistItems.map((item) => (
            <WishlistCard
              key={item.id}
              data={item}
              deleteButton={handleDeleteButton}
              addToCart={handleAddToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default WishlistContainer;
