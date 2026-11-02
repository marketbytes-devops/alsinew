'use client';
import React, { useState } from "react";
import formBgFirst from "../../../assets/images/Home/form-bg.webp";
import formBgSecond from "../../../assets/images/Home/form-bg-2.webp";
import ReCaptcha from "../../ReCaptcha";
import apiClient from "../../../api";

const Form = () => {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!recaptchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await apiClient.post('contact/contact-form/', formData);
      console.log('Form submitted successfully:', response.data);
      resetForm();
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(
        error.response?.data?.message ||
          "Unable to send your message right now. Please try calling or emailing us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setRecaptchaVerified(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-wrap h-auto">
      <div
        className="hidden md:block w-full md:w-1/2 aspect-[4/3]" 
        style={{
          backgroundImage: `url("${formBgFirst?.src || formBgFirst}")`,
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="w-full md:w-1/2 aspect-[4/3] flex items-center justify-center" 
        style={{ 
          backgroundImage: `url("${formBgSecond?.src || formBgSecond}")`, 
          padding: "18px 0",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-transparent w-full max-w-md px-8 md:p-0">
          <div className="mb-4">
            <h2 className="text-white">
              <span className="block font-bold">How can</span>
              <span className="block font-normal">We Help You?</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#e4e4e4] font-medium text-sm mb-2" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter first and last name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-blue-600 text-white bg-transparent placeholder-gray-300 placeholder:text-xs placeholder:font-medium"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#e4e4e4] font-medium text-sm mb-2" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Eg. youremail@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-blue-600 text-white bg-transparent placeholder-gray-300 placeholder:text-xs placeholder:font-medium"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#e4e4e4] font-medium text-sm mb-2" htmlFor="phone">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-blue-600 text-white bg-transparent placeholder-gray-300 placeholder:text-xs placeholder:font-medium"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#e4e4e4] font-medium text-sm mb-2" htmlFor="message">
                Message*
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-white focus:ring-2 focus:ring-blue-600 text-white bg-transparent placeholder-gray-300 placeholder:text-xs placeholder:font-medium"
              />
            </div>
            <ReCaptcha onChange={setRecaptchaVerified} />
            {errorMessage && (
              <p className="mb-3 text-red-300 text-sm font-medium bg-red-900/40 p-2 rounded border border-red-500/30">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-transparent border-white border text-white text-md font-normal transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#193377] hover:border-transparent hover:font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Get a Quote"}
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="mx-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-xl font-extrabold text-center mb-4">
                Thank you for your enquiry!
              </h2>
              <p className="text-center text-sm font-semibold mb-6">
                We will get back to you soon.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleCloseModal}
                  className="bg-[#182d70] text-white px-6 py-2 rounded-md hover:bg-[#0d6efd] transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
