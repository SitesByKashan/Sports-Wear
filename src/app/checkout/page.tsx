"use client"
import React, { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#2d3250] mb-8">Checkout</h1>

      {/* User Details Form */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#2d3250]">User Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none"
          />
        </form>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#2d3250]">Payment Method</h2>
        <div className="space-y-4">
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
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#2d3250]">Debit Card Details</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
            </div>
          </form>
        </div>
      )}

      {paymentMethod === "onlinePayment" && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#2d3250]">Online Payment Details</h3>
          <p className="text-[#2d3250]">
            Please make the payment to the following account:
          </p>
          <p className="mt-2 text-[#d4833d]">
            <strong>Account Name:</strong> Example Account<br />
            <strong>Account Number:</strong> 1234567890<br />
            <strong>Bank:</strong> XYZ Bank<br />
            <strong>IFSC Code:</strong> XYZB0001234
          </p>
        </div>
      )}

      {paymentMethod === "cashOnDelivery" && (
        <p className="mb-8 text-lg text-[#2d3250]">
          Cash on Delivery is selected. Please be prepared to pay when your order arrives.
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 mt-4 font-semibold text-white bg-[#d4833d] rounded-lg hover:bg-[#2d3250] transition-colors duration-300"
      >
        Place Order
      </button>
    </div>
  );
}

