import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import AddAddress from "./pages/AddAddress";
import MyOrder from "./pages/MyOrder";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const adminPath = useLocation().pathname.includes("admin");
  return (
    <>
      <Toaster />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-24">
        {!adminPath && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrder />} />
        </Routes>
        {!adminPath && <Footer />}
      </div>
    </>
  );
};
export default App;
