"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    emailAddress: "",
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: ""
  });

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = storedProducts.reduce((sum: number, item: { price: number; quantity: number; }) => {
      return sum + (item.price || 0) * (item.quantity || 1); 
    }, 0);

    setTotalAmount(total);
  }, []);

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const { fullName, address, city, zipCode, phoneNumber, emailAddress } = formData;

    if (!fullName || !address || !city || !zipCode || !phoneNumber || !emailAddress) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (paymentMethod === "debitCard") {
      const { cardNumber, cardHolderName, expiryDate, cvv } = formData;
      if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
        toast.error("Please fill in all debit card details.");
        return;
      }
    }

    toast.success("Your order has been placed successfully!");
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="flex flex-col items-center px-6 py-20 checkout lg:flex-row lg:px-20 mt-12">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="p-8 max-w-2xl mx-auto theme rounded-lg shadow-lg animate-on-scroll">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Checkout</h1>

        {/* User Details Form */}
        <div className="mb-8 animate-on-scroll">
          <h2 className="text-xl font-semibold text-white text-center italic mb-4">User Details</h2>
          <form className="space-y-4">
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
            />
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
            />
            <input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
            />
            <input
              name="zipCode"
              type="text"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
            />
            <input
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
            />
            <input
              name="emailAddress"
              type="email"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
            />
          </form>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-8 animate-on-scroll">
          <h2 className="text-xl font-semibold italic text-white text-center mb-4">Payment Method</h2>
          <div className="space-y-4 text-white">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="debitCard"
                checked={paymentMethod === "debitCard"}
                onChange={handlePaymentMethodChange}
              />
              <span>Debit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="onlinePayment"
                checked={paymentMethod === "onlinePayment"}
                onChange={handlePaymentMethodChange}
              />
              <span>Online Payment</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="cashOnDelivery"
                checked={paymentMethod === "cashOnDelivery"}
                onChange={handlePaymentMethodChange}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Conditional Form Sections */}
        {paymentMethod === "debitCard" && (
          <div className="mb-8 animate-on-scroll">
            <h3 className="text-lg font-semibold text-white italic text-center mb-4">Debit Card Details</h3>
            <form className="space-y-4">
              <input
                name="cardNumber"
                type="text"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number"
                className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
              />
              <input
                name="cardHolderName"
                type="text"
                value={formData.cardHolderName}
                onChange={handleInputChange}
                placeholder="Card Holder Name"
                className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
              />
              <div className="flex space-x-4">
                <input
                  name="expiryDate"
                  type="text"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
                />
                <input
                  name="cvv"
                  type="text"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="CVV"
                  className="w-full p-3 border border-[#2d3250] rounded-lg focus:outline-none"
                />
              </div>
            </form>
          </div>
        )}
        {paymentMethod === "onlinePayment" && (
          <div className="mb-8 animate-on-scroll">
            <h3 className="text-lg font-semibold text-white text-center italic mb-4">Online Payment Details</h3>
            <p className="text-white">
              Please make the payment to the following account:
            </p>
            <p className="mt-2 text-white">
              <strong>Account Name:</strong> Example Account<br />
              <strong>Account Number:</strong> 1234567890<br />
              <strong>Bank:</strong> XYZ Bank<br />
              <strong>IFSC Code:</strong> XYZB0001234
            </p>
          </div>
        )}

        {paymentMethod === "cashOnDelivery" && (
          <div className="mb-8 animate-on-scroll">
            <h3 className="text-lg font-semibold text-white text-center italic mb-4">Cash on Delivery</h3>
            <p className="text-white">
            Cash on Delivery is selected. Please be prepared to pay when your order arrives.
            </p>
          </div>
        )}

        {/* Total Amount Display */}
        <div className="mb-8 animate-on-scroll text-center">
          <h2 className="text-xl font-semibold text-white italic">
            <span className="font-extrabold italic">Total Amount:</span> ${totalAmount.toFixed(2)}</h2>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="contact-button w-full py-4 mt-4 font-semibold rounded-lg transition-colors duration-300 animate-on-scroll"
        >
          Place Order
        </button>
      </div>
    </section>
  );
}
