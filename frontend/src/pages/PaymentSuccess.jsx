import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <CheckCircle2 className="text-green-600 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment via eSewa has been
          successfully processed.
        </p>

        <div className="border-t border-b py-4 mb-6 text-left text-gray-700">
          <p className="flex justify-between mb-1">
            <span>Transaction ID:</span>
            <span className="font-medium">#TXN{Math.floor(Math.random() * 100000)}</span>
          </p>
          <p className="flex justify-between mb-1">
            <span>Amount Paid:</span>
            <span className="font-medium">Rs. 110</span>
          </p>
          <p className="flex justify-between">
            <span>Payment Method:</span>
            <span className="font-medium">eSewa</span>
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            View Orders
          </button>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        You’ll also receive an email confirmation shortly.
      </p>
    </div>
  );
};

export default PaymentSuccess;
