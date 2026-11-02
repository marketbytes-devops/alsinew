'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const offices = [
  {
    country: "Oman (Headquarters)",
    phone: "96891311118",
    display: "+968 9131 1118",
    flag: "🇴🇲",
  },
  {
    country: "United Arab Emirates",
    phone: "971568587717",
    display: "+971 56 858 7717",
    flag: "🇦🇪",
  },
  {
    country: "Saudi Arabia",
    phone: "966503625981",
    display: "+966 50 362 5981",
    flag: "🇸🇦",
  },
  {
    country: "Qatar",
    phone: "97433625333",
    display: "+974 3362 5333",
    flag: "🇶🇦",
  },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getWhatsAppLink = (phoneNumber) => {
    const text = encodeURIComponent(
      "Hello ALSI Global, I would like to enquire about your logistics and cargo services."
    );
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#182d70] to-[#2044a2] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Chat with ALSI Global</h4>
                  <p className="text-xs text-blue-100">Usually replies within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-gray-50/50 space-y-2">
              <p className="text-xs text-gray-600 mb-2 font-medium">
                Select your nearest regional branch to start a WhatsApp conversation:
              </p>
              {offices.map((office) => (
                <a
                  key={office.phone}
                  href={getWhatsAppLink(office.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl" role="img" aria-label={office.country}>
                      {office.flag}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {office.country}
                      </p>
                      <p className="text-[11px] text-gray-500">{office.display}</p>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-xs text-gray-400 group-hover:text-emerald-500 transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-gray-100/70 text-center border-t border-gray-100">
              <p className="text-[11px] text-gray-500">
                24/7 Global Cargo & Customs Support
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        aria-label="Chat with ALSI on WhatsApp"
        title="Chat with ALSI on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
        <span className="text-sm font-bold pr-1 hidden sm:inline-block">WhatsApp Us</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;

