import { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    // Fetch products
    axios
      .get("http://localhost:3000/api/product/all")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));

    // Fetch orders
    axios
      .get("http://localhost:3000/api/order/all")
      .then((res) => setOrders(res.data.orders))
      .catch((err) => console.error(err));

    // Fetch users
    axios
      .get("http://localhost:3000/api/user/total-buyers")
      .then((res) => setUsers(res.data.totalBuyers))
      .catch((err) => console.error(err));

      // Fetch revenue
    axios
      .get("http://localhost:3000/api/order/total-revenue", {
        withCredentials: true,
      })
      .then((res) => setRevenue(res.data.totalRevenue))
      .catch((err) => console.error(err));
  }, []);

  
  const data = [
    {
      title: "Total Products",
      value: products.length,
      icon: Package,
    },
    {
      title: "Total Customers",
      value: users,
      icon: Users,
    },
    {
      title: "Total Orders",
      value: orders.length,
      icon: ShoppingCart,
    },
    {
      title: "Total Revenue",
      value: `Rs. ${revenue.toLocaleString()}`,
      icon: DollarSign,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.map(({ title, value, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-100 rounded-full">
                <Icon size={26} className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{title}</p>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
