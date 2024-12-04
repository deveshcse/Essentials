import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const subtotal = useSelector((state) => state.cart.subtotal);
  const cartItems = useSelector((state) => state.cart.cartItems);

  if(cartItems.length > 0){  return (
    <div className="mx-5 mt-10 md:mx-32 flex flex-col md:gap-28 md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 ">
        <h3 className="text-4xl font-heading font-medium">Billing Details</h3>
        <form className="mt-10 flex flex-col items-start text-base font-title text-gray-500">
          <label>
            First Name <sup className="text-red-600">*</sup>
          </label>
          <input
            type="text"
            required
            className="p-2 w-full md:w-2/3 bg-gray-100 focus:outline-none"
          />
          <label className="mt-5">Last Name</label>
          <input
            type="text"
            className="p-2 w-full md:w-2/3 bg-gray-100 focus:outline-none"
          />
          <label className="mt-5">
            Street Address <sup className="text-red-600">*</sup>{" "}
          </label>
          <input
            type="text"
            required
            className="p-2 w-full md:w-2/3 bg-gray-100 focus:outline-none"
          />
          <label className="mt-5">Apartment, floor,etc. (Optional)</label>
          <input
            type="text"
            className="p-2 w-full md:w-2/3 bg-gray-100 focus:outline-none"
          />
          <label className="mt-5">
            Town/City<sup className="text-red-600">*</sup>
          </label>
          <input
            type="text"
            required
            className="p-2 w-full md:w-2/3 bg-gray-100 focus:outline-none"
          />
          <label className="mt-5">
            Phone Number<sup className="text-red-600">*</sup>
          </label>
          <input
            type="tel"
            required
            className="p-2 w-full md:w-2/3 bg-gray-100 focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <label className="mt-5">
            Email Address<sup className="text-red-600">*</sup>
          </label>
          <input
            type="email"
            required
            className="p-2 w-full md:w-2/3 bg-gray-100 focus:outline-none"
          />
          <div className="mt-5 mb-5 flex gap-2 items-center justify-start">
            <input type="checkbox" className="w-6 h-6 " />
            <label className="text-gray-950">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/2 ">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 items-center justify-between gap-4"
          >
            <img
              src={item.thumbnail}
              alt="product-thumbnail"
              className=" max-w-20 max-h-20"
            />
            <h3>{item.title}</h3>
            <h3 className="text-right"> {item.itemSubtotal} </h3>
          </div>
        ))}
        <div>
          <div className="my-2  flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className=" my-2 h-[1px] w-full bg-gray-400"></div>
          <div className="my-2  flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className=" my-2 h-[1px] w-full bg-gray-400"></div>
          <div className="my-2 flex justify-between">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
        <div className="flex items-center gap-5 justify-start">
        <input type="radio" name="bank" id="bank" className="w-6 h-6"/>
        <label htmlFor="bank">Bank</label>
        </div>

        <div className="flex items-center gap-5 justify-start">
            <input type="radio" name="" id="cod" className="w-6 h-6" />
            <label htmlFor="cod">Cash on Delivery</label>
        </div>
        </div>

        <div className="flex justify-center mt-4 ">
            <button className="p-2 px-8 border-2 border-gray-600 rounded-md bg-red-500">Place Order</button>
        </div>

      </div>
    </div>
  );}
};

export default CheckoutPage;
