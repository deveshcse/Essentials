import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { calculateSubtotal, removeFromCart, updateQuantity } from "../Utils/CartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [updateCartItem, setUpdateCartItem] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const subtotal = useSelector((state) => state.cart.subtotal);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(calculateSubtotal());
  }, [cartItems, dispatch]);

 const updateOrderQuantity =(value, id) => {
  dispatch(updateQuantity({value:value, id:id}));
 }

if (cartItems.length == 0) {
  return (
    <div className="md:mx-32 mt-10 flex gap-2 items-center">
      <span className="text-lg font-title text-gray-700">Opps...., Looks like the cart is empty.</span>
      <button className="border-2 border-gray-400 px-1 rounded-md font-title" onClick={()=> navigate(-1)}> 
        Return To Shop
      </button>
    </div>
  );
}  
if(cartItems.length > 0){  return (
  < div className="mt-10 md:mx-32 ">
    <div className="font-title text-base grid grid-cols-4 justify-between mb-5 bg-black text-white py-2 px-1">
      <span className="">Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Subtotal</span>
    </div>

    {cartItems &&
      cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 items-center justify-between font-title text-base my-2 "
        >
          <div className="flex gap-5 items-center justify-start ">
            <div className="bg-gray-600 rounded-md">
              <img
                src={item.thumbnail}
                alt=""
                className="max-h-20  max-w-20 aspect-square object-cover"
              />
            </div>
            <span>{item.title}</span>
          </div>
          <div>
            <span>{item.price}</span>
          </div>
          <div className="border-2 border-gray-300 w-16 px-4 py-2 flex items-center rounded-md">

            { (!updateCartItem) && <span className="text-left"> {item.orderQuantity} </span>}
            {updateCartItem && <input value={item.orderQuantity} min={item.minimumOrderQuantity} max={item.stock} onChange={(e) => updateOrderQuantity(parseInt(e.target.value), item.id)} type="number" className="font-title font-medium focus:outline-none border-none w-10 text-left"/> }

          </div>
          <div className="flex justify-between items-center">
            <span>{item.itemSubtotal} </span>
            {updateCartItem && (
              <button className="px-5" onClick={()=> dispatch(removeFromCart(item.id))}>
                <RiDeleteBin6Line size={24} />
              </button>
            )}
          </div>
        </div>
      ))}

    <div className="flex justify-between my-5 font-title font-medium">
      <button className="border-2 border-gray-400 px-1 py-2 rounded-md" onClick={()=> navigate(-1)}> 
        Return To Shop
      </button>
      <button
        className="border-2 border-gray-400 px-1 py-2 rounded-md"
        onClick={() => setUpdateCartItem(!updateCartItem)}
      >
        Update Cart
      </button>
    </div>

    <div className="flex justify-end mb-10">
      <div className="font-title border-2 border-gray-800 w-[640px] px-4 rounded-md">
        <div className="my-2">
          <span className=" text-xl font-medium">Cart Total</span>
        </div>
        <div className="my-2  flex justify-between">
          <span>Subtotal:</span>
          <span>${Math.ceil(subtotal)}</span>
        </div>
        <div className=" my-2 h-[1px] w-full bg-gray-400"></div>
        <div className="my-2  flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className=" my-2 h-[2px] w-full bg-gray-400"></div>
        <div className="my-2 flex justify-between">
          <span>Total:</span>
          <span>${subtotal}</span>
        </div>

        <div className="my-2 flex justify-center items-center">
          <div>
            <button className="bg-red-500 p-2 rounded-md text-white ">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);}
};

export default CartPage;
