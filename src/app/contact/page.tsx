"use client";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message Sent Successfully', { position: 'top-right', autoClose: 2000 });
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
    <ToastContainer />
    <section className="flex flex-col items-center justify-between px-6 py-20 mt-20 contact lg:flex-row lg:px-20" id="contact">
      <div className="mb-12 left-contact lg:w-1/2 lg:mb-0 animate-on-scroll">
        <h5 className="text-xl font-bold text-black">MY</h5>
        <h2 className="mb-6 text-5xl font-extrabold italic wordTheme">
          <span>C</span><span>O</span><span>N</span><span>T</span><span>A</span><span>C</span><span>T</span>
        </h2>
        <p className="mb-6 text-2xl text-[#2d3250]">
          Have a question or need assistance? Our team is eager to help you with any inquiries or project needs you may have.
          Share your details below, and let’s embark on a journey to achieve your goals together.
        </p>
        <h4 className="text-lg font-semibold wordTheme">Address</h4>
        <small className="block mb-4 text-[#2d3250]">Lorem Ipsum, Dolor 298</small>
        <h4 className="text-lg font-semibold wordTheme">Phone</h4>
        <small className="block mb-4 text-[#2d3250]">+91 9876543210</small>
        <h4 className="text-lg font-semibold wordTheme">E-mail</h4>
        <small className="block text-[#2d3250]">hank@google.com</small>
      </div>

      <div className="p-8 theme rounded-lg shadow-lg right-contact mt-3 lg:w-1/2 animate-on-scroll">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="mb-6 text-3xl font-extrabold italic text-white">
            CONTACT FORM
          </h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-4 border border-[#2d3250] rounded-lg focus:outline-none focus:border-blue-500" />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone"
            className="w-full p-4 border border-[#2d3250] rounded-lg focus:outline-none focus:border-blue-500" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your e-mail"
            className="w-full p-4 border border-[#2d3250] rounded-lg focus:outline-none focus:border-blue-500" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-4 border border-[#2d3250] rounded-lg focus:outline-none focus:border-blue-500"
            rows={4} />
          <button
            type="submit"
            className="contact-button w-full py-4 font-semibold rounded-lg focus:outline-none"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section></>
  );
}
