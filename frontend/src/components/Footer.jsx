import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
const Footer = () => {
  return (
    <div className="py-24 my-12 bg-[#155136]">
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-50 text-center mb-2 ">TarkariBazaar</h1>
          <h3 className="text-white max-w-lg text-center px-4">
            {" "}
            Bringing fresh, locally grown vegetables straight from Nepal’s
            farmers to your doorstep — easy, fair, and sustainable.
          </h3>
        </div>

        <div className="flex flex-col  lg:items-start md:items-start items-center text-gray-300">
          <h1 className="text-2xl font-bold text-gray-50">Useful Links</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/contact"}>Contact Us</Link>
        </div>
        <div className="flex flex-col lg:items-start md:items-start items-center  text-gray-300">
          <h1 className="text-2xl font-bold text-gray-50">Payments & Orders</h1>
          <Link to={""}>Payment Options</Link>
          <Link to={""}>Shipping & Delivery</Link>
          <Link to={""}>Product Returns</Link>
          <Link to={""}>Checkout Guide</Link>
        </div>
        
        <div className="flex flex-col lg:items-start md:items-start items-center  text-white gap-3">
          <h1 className="text-2xl font-bold">Download App</h1>
          <p className="text-sm mb-3 ">Get our mobile app for faster shopping:</p>
      <div className="flex gap-2">
        <img src={assets.play_store} alt="Google Play" className="h-10" />
        <img src={assets.app_store} alt="App Store" className="h-10" />
      </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
