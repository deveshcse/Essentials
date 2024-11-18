
import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-white p-6">
            <div className="container mx-auto grid grid-cols-5 gap-8">
                <div className="col-span-1">
                    <h2 className="text-xl font-bold mb-4">Exclusive</h2>
                    <p>Subscribe:</p>
                    <div className="flex">
                        <input type="email" placeholder="Enter your email" className="border border-gray-300 p-2 rounded" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                            ▶
                        </button>
                    </div>
                    <p className="mt-4">Get 10% off your first order</p>
                </div>

                <div className="col-span-1">
                    <h2 className="text-xl font-bold mb-4">Support</h2>
                    <p>A-101 Sector 62 Noida, UP,</p>
                    <p>Uttar Pradesh 201301, India.</p>
                    <p>d.mishra56603@gmail.com</p>
                    <p>+91-73804-06929</p>
                </div>

                <div className="col-span-1">
                    <h2 className="text-xl font-bold mb-4">Account</h2>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>   

                    </ul>
                </div>

                <div className="col-span-1">   

                    <h2 className="text-xl font-bold mb-4">Quick Link</h2>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="col-span-1">   

                    <h2 className="text-xl font-bold mb-4">Download App</h2>
                    <p>Save $3 with App, New User Only</p>
                    <div className="flex">
                        <img src="google-play.svg" alt="Google Play" className="w-12 mr-4" />
                        <img src="app-store.svg" alt="App Store" className="w-12" />
                    </div>
                    <div className="flex mt-4">
                        <a href="#" className="text-white mr-2"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="text-white mr-2"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="text-white mr-2"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="text-white"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6">
                <p>&copy; Copyright EssentialsStore 2024. All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;