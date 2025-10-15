import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";
import Esewa from "../components/Esewa.jsx";

const Checkout = () => {
  const { cart, navigate, currency, getCartTotal, axios } = useContext(AppContext);

  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(null); // store order info for eSewa

  const fetchAddress = async () => {
    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        setAddress(data.addresses);
        if (data.addresses.length > 0) setSelectedAddress(data.addresses[0]._id);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const placeOrder = async () => {
    try {
      const { data } = await axios.post("/api/order/place", {
        items: cart,
        address: selectedAddress,
        totalAmount: getCartTotal(),
        paymentMethod,
      });

      if (data.success) {
        toast.success(data.message);

        if (paymentMethod === "cod") {
          navigate("/my-orders");
        } else {
          // store order info to pass to eSewa
          setOrderPlaced({
            totalAmount: getCartTotal(),
            orderId: data.orderId || null, // you can return orderId from backend
          });
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  if (orderPlaced && paymentMethod === "online") {
    // show eSewa form dynamically
    return <Esewa totalAmount={orderPlaced.totalAmount} orderId={orderPlaced.orderId} />;
  }

  return (
    <div
      className="py-12 bg-[#0B482F]"
      style={{ backgroundImage: `url(${assets.footer_img})` }}
    >
      <h1 className="text-3xl font-bold text-white text-center">Checkout</h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-6">
        {/* Cart Summary */}
        <div>
          <h1 className="text-3xl font-bold text-white text-center">Cart Summary</h1>
          <div className="my-5 max-w-4xl w-full p-4 rounded-md border bg-white border-primary">
            {cart.map((item) => (
              <div key={item._id} className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={`http://localhost:3000/uploads/${item.images[0]}`}
                    alt=""
                    className="w-20 h-20"
                  />
                  <p>{item.name}</p>
                </div>
                <p>
                  {currency}
                  {item.offerPrice}
                </p>
              </div>
            ))}
            <p>
              Total: {currency}
              {getCartTotal()}
            </p>
          </div>
        </div>

        {/* Payment & Address */}
        <div className="text-white flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Order Summary</h1>

          {/* Address */}
          <div className="flex flex-col gap-6">
            <label htmlFor="address">Select Address</label>
            <select
              className="w-full outline-none border border-primary p-2"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              {address.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name} - {item.email} - {item.city} - {item.country} - {item.state} - {item.zipCode}
                </option>
              ))}
            </select>

            <button
              onClick={() => navigate("/add-address")}
              className="bg-primary text-white cursor-pointer px-6 py-2"
            >
              Add New Address
            </button>
          </div>

          {/* Payment Method */}
          <div className="flex flex-col gap-6">
            <label htmlFor="address">Select Payment Method</label>
            <select
              className="w-full outline-none border border-primary p-2"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="cod">COD</option>
              <option value="online">ONLINE</option>
            </select>
          </div>

          {/* Place Order / Pay Now */}
          <button
            type="submit"
            onClick={placeOrder}
            className="bg-primary text-white cursor-pointer px-6 py-2"
          >
            {paymentMethod === "cod" ? "Place Order" : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
