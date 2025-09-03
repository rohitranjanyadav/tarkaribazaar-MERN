import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products, blogs } from "../assets/assets";
import toast from "react-hot-toast";
export const AppContext = createContext();
const currency = import.meta.env.VITE_CURRENCY;
const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);

  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const fetchCategories = async () => {
    setCategoriesData(categories);
  };
  const fetchProducts = async () => {
    setProductsData(products);
  };
  const fetchBlogs = async () => {
    setBlogsData(blogs);
  };

  // add to cart

  const addToCart = (product) => {
    setCart((prev) => {
      const newCart = structuredClone(prev);
      const existingProduct = newCart.find((item) => item._id === product._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        newCart.push({ ...product, quantity: 1 });
      }
      toast.success("Product added to cart");
      return newCart;
    });
  };

  // remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = structuredClone(prev);
      const existingProduct = newCart.find((item) => item._id === id);
      if (existingProduct.quantity === 1) {
        return newCart.filter((item) => item._id !== id);
      } else {
        existingProduct.quantity -= 1;
      }
      return newCart;
    });
  };

  //  Add to Favourites
  const addToFavorite = (product) => {
    setFavorite((prev) => {
      const newFavs = structuredClone(prev);
      if (!newFavs.find((item) => item._id === product._id)) {
        newFavs.push(product);
        toast.success("Product added to favorite");
      } else {
        toast.error("Product already added to favorite");
      }
      return newFavs;
    });
  };
  //  Remove from Favourites
  const removeFromFavorite = (id) => {
    setFavorite((prev) => {
      const newFavs = structuredClone(prev);
      const removed = newFavs.filter((item) => item._id !== id);
      toast.success("Product removed from favorite");
      return removed;
    });
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.offerPrice * item.quantity,
      0
    );
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    fetchBlogs();
  }, []);
  const value = {
    navigate,
    user,
    setUser,
    categoriesData,
    productsData,
    currency,
    blogsData,
    addToCart,
    removeFromCart,
    cart,
    favorite,
    addToFavorite,
    removeFromFavorite,
    getCartTotal,
    admin,
    setAdmin,
    loading,
    setLoading,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
