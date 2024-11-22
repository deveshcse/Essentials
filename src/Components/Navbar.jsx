// import React from "react";
// import { Link } from "react-router-dom";
// import { IoSearchSharp } from "react-icons/io5";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaRegHeart } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-50 w-full bg-white mt-10">
//       <div className="z-10 flex my-2 mb-2 justify-between">
//         <div className="flex gap-10 items-center ">
//           <Link className="ml-0 md:ml-32 md:mr-36  font-heading text-3xl font-bold">
//             Essentials
//           </Link>
//           <Link to="/" className="hidden md:block font-title text-base">Home</Link>
//           <Link to="/contact" className="hidden md:block font-title text-base">Contact</Link>
//           <Link to="/about" className="hidden md:block font-title text-base">About</Link>
//           <Link to="/signUpLogin" className="hidden md:block font-title text-base">SignUp</Link>
//         </div>
//         <div className="md:mr-10 flex gap-5 items-center justify-between">
//           <div className="flex md:gap-5  border rounded-md">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="w-full md:w-60 p-2 focus:outline-none overflow-visible "
//             />
//             <button>
//               <IoSearchSharp size={24} />
//             </button>
//           </div>
//           <div className="flex gap-5">
//             <button>
//               <FaRegHeart size={24} />
//             </button>
//             <button className="">
//               <AiOutlineShoppingCart size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray-500 h-[1px]"></div>
//     </div>
//   );
// };

// export default Navbar;















import  { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex justify-between items-center p-4 md:px-32">
        {/* Logo and Links */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl md:text-3xl font-heading font-bold"
          >
            Essentials
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="font-title text-base hover:text-gray-600">Home</Link>
          <Link to="/contact" className="font-title text-base hover:text-gray-600">Contact</Link>
          <Link to="/about" className="font-title text-base hover:text-gray-600">About</Link>
          <Link to="/signUpLogin" className="font-title text-base hover:text-gray-600">SignUp</Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-32 md:w-60 p-2 focus:outline-none"
            />
            <button className="p-2 bg-gray-100">
              <IoSearchSharp size={20} />
            </button>
          </div>
          <button>
            <FaRegHeart size={20} className="hover:text-gray-600" />
          </button>
          <button>
            <AiOutlineShoppingCart size={20} className="hover:text-gray-600" />
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoClose size={24} />
            ) : (
              <HiOutlineMenuAlt3 size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 p-4">
            <Link to="/" className="text-base hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/contact" className="text-base hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/about" className="text-base hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/signUpLogin" className="text-base hover:text-gray-600" onClick={() => setIsMenuOpen(false)}>SignUp</Link>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full p-2 focus:outline-none"
              />
              <button className="p-2 bg-gray-100">
                <IoSearchSharp size={20} />
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Divider */}
      <div className="bg-gray-300 h-[1px] w-full"></div>
    </div>
  );
};

export default Navbar;
