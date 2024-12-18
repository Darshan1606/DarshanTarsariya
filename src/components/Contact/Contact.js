import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the EmailJS SDK
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k9ir3hk", // EmailJS service ID
        "template_i3pkgg8", // EmailJS template ID
        e.target,
        "rGkD-yeMpc7EVuPQi" // EmailJS user ID
      )
      .then(
        (result) => {
          toast.success("Your message has been sent successfully!");
          setFormData({ fname: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again");
        }
      );
  };

  return (
    <div className="h-auto p-4 md:p-16 " id="contactme">
      <div className="text-center text-white mb-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600">
          Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-xl border"
        >
          <div className="mb-6">
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="fname"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Write Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-violet-500 text-white text-lg rounded-lg hover:bg-violet-600 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;
