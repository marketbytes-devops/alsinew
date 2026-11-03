'use client';

import React, { useState, useEffect, useRef } from "react";
import NetworkBg from "../../../../assets/images/Network/our-network-bg.webp";
import UAE from "../../../../components/UiComponents/Network/Maps/UAE";
import Oman from "../../../../components/UiComponents/Network/Maps/Oman";
import KSA from "../../../../components/UiComponents/Network/Maps/KSA";
import Qatar from "../../../../components/UiComponents/Network/Maps/Qatar";
import { Tooltip } from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft, 
  faArrowRight, 
  faPhone, 
  faEnvelope, 
  faFax, 
  faLocationDot, 
  faBuilding 
} from "@fortawesome/free-solid-svg-icons";

const bgUrl = NetworkBg?.src || NetworkBg;

const OurNetwork = () => {
  const [activeCountry, setActiveCountry] = useState("Sultanate of Oman");
  const [activeTooltip, setActiveTooltip] = useState("ksa-tooltip");
  const [countryData, setCountryData] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sliderRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        setIsMobile(width < 768);
        setIsTablet(width >= 768 && width < 1024);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const data = {
      "United Arab Emirates": {
        location: "United Arab Emirates",
        company_name: "ALSI Global LLC",
        address:
          "Dubai National Insurance Building 5th Floor, Office 502, Deira, Dubai, UAE.",
        fax: "",
        contact_name: "Justin Varghese",
        position: "Country Manager - UAE",
        phone: "+971 4 585 0934, +971 56 858 7717",
        email: "jv@alsiglobal.com",
        offices: [
          { id: 1, office_name: "Deira, Dubai" },
          { id: 2, office_name: "Hatta Border" },
        ],
      },
      "Sultanate of Oman": {
        location: "Sultanate of Oman",
        company_name: "ALSI Global LLC",
        address: "P.O. Box 608. P.C: 322. W. Sohar, Sultanate Of OMAN.",
        fax: "+968 2675 5550",
        contact_name: "Mohammed Al Badi",
        position: "General Manager",
        phone: "+968 2675 5598, +968 9131 1118",
        email: "info@alsiglobal.com",
        offices: [
          { id: 1, office_name: "Sohar Freezone" },
          { id: 2, office_name: "Falaj Al Qabil" },
          { id: 3, office_name: "Hatta Border" },
          { id: 4, office_name: "Khatmat Shikala Border" },
          { id: 5, office_name: "Al Madina Logistics Hub" },
          { id: 6, office_name: "Muscat" },
          { id: 7, office_name: "Salalah" },
          { id: 8, office_name: "Duqm" },
        ],
      },
      "Kingdom of Saudi Arabia": {
        location: "Kingdom of Saudi Arabia",
        address:
          "Building No. 3475, Al Tail Street 9080, Dhahrat Laban Dist, PC 12564 Riyadh, Kingdom of Saudi Arabia",
        fax: "",
        contact_name: "Mr. Khalid Al Badi",
        position: "Operations Manager - KSA",
        phone: "+966 050 362 5981",
        email: "khalid@alsiglobal.com",
        offices: [
          { id: 1, office_name: "Riyadh" },
          { id: 2, office_name: "Rub Al Khali Border" },
        ],
      },
      "State of Qatar": {
        location: "State of Qatar",
        address:
          "Office No: 01-1st Floor, East Wing, Icono View Building - Next To Holiday Villa Hotel, C Ring Road - Doha, Qatar. Building No. 117 - Street No. 330 - Zone 25",
        fax: "",
        contact_name: "Adityan K J",
        position: "Branch Manager",
        phone: "+974 4047 8563, +974 3362 5333",
        email: "adityan@alsiglobal.com",
        offices: [{ id: 1, office_name: "Doha" }],
      },
    };

    setCountryData(data);
    setActiveTooltip("ksa-tooltip");
  }, []);

  const handleCountryClick = (country, tooltipId) => {
    setActiveCountry(country);
    setActiveTooltip(tooltipId);
  };

  const activeCountryData = countryData[activeCountry] || {};
  const {
    location = "No location provided",
    company_name = "",
    address = "No address provided",
    fax = "No fax provided",
    contact_name = "No contact provided",
    position = "No position provided",
    phone = "No phone provided",
    email = "No email provided",
    offices = [],
  } = activeCountryData;

  const phoneNumbers = Array.isArray(phone)
    ? phone
    : phone
      ? phone.split(",")
      : [];

  // Slick Slider settings
  const sliderSettings = {
    accessibility: false,
    dots: true,
    infinite: offices.length > 4,
    speed: 500,
    slidesToShow: isMobile ? 1 : (isTablet ? 2 : 4),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="min-h-screen py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(25, 51, 119, 0.7)",
          color: "white",
        }}
      >
        <div className="w-full lg:w-1/2 text-center lg:pr-6">
          <div className="map-svg-container w-full max-w-[450px] mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1166.776 870.253"
              className="w-full h-auto"
            >
              <g transform="translate(-6088.6 421.048)">
                <g
                  transform="translate(6859.722 -104.237)"
                  fill={
                    activeCountry === "United Arab Emirates"
                      ? "#1890F9"
                      : "#125194"
                  }
                  data-tooltip-id="uae-tooltip"
                  data-tooltip-content="Click Here"
                  style={{
                    filter:
                      activeCountry === "United Arab Emirates"
                        ? "drop-shadow(10px 10px 15px #080808)"
                        : "none",
                    transition: "filter 0.3s ease, fill 0.3s ease",
                  }}
                  onClick={() => handleCountryClick("United Arab Emirates", "uae-tooltip")}
                >
                  <UAE />
                </g>
                <g
                  fill={
                    activeCountry === "Sultanate of Oman"
                      ? "#1890F9"
                      : "#125194"
                  }
                  data-tooltip-id="oman-tooltip"
                  data-tooltip-content="Click Here"
                  style={{
                    filter:
                      activeCountry === "Sultanate of Oman"
                        ? "drop-shadow(4px 4px 4px #080808)"
                        : "none",
                    transition: "filter 0.3s ease, fill 0.3s ease",
                  }}
                  onClick={() => handleCountryClick("Sultanate of Oman", "oman-tooltip")}
                >
                  <Oman />
                </g>
                <g
                  transform="translate(6088.6 -421.048)"
                  fill={
                    activeCountry === "Kingdom of Saudi Arabia"
                      ? "#1890F9"
                      : "#125194"
                  }
                  data-tooltip-id="ksa-tooltip"
                  data-tooltip-content="Click Here"
                  style={{
                    filter:
                      activeCountry === "Kingdom of Saudi Arabia"
                        ? "drop-shadow(10px 10px 15px #080808)"
                        : "none",
                    transition: "filter 0.3s ease, fill 0.3s ease",
                  }}
                  onClick={() => handleCountryClick("Kingdom of Saudi Arabia", "ksa-tooltip")}
                >
                  <KSA />
                </g>
                <g
                  transform="translate(6818.349 -106.485)"
                  fill={
                    activeCountry === "State of Qatar" ? "#1890F9" : "#125194"
                  }
                  data-tooltip-id="qatar-tooltip"
                  data-tooltip-content="Click Here"
                  style={{
                    filter:
                      activeCountry === "State of Qatar"
                        ? "drop-shadow(10px 10px 15px #080808)"
                        : "none",
                    transition: "filter 0.3s ease, fill 0.3s ease",
                  }}
                  onClick={() => handleCountryClick("State of Qatar", "qatar-tooltip")}
                >
                  <Qatar />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-left mt-8 lg:mt-0 px-4 sm:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6">
            <div className="space-y-2 border-b border-white/15 pb-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-200 bg-white/10 uppercase mb-2">
                Regional Hub
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-white tracking-tight pb-1">
                {location || "Select a Country"}
              </h2>
              {company_name && (
                <p className="text-lg font-semibold text-white/95 flex items-center gap-2">
                  <FontAwesomeIcon icon={faBuilding} className="text-blue-300 text-sm" />
                  <span>{company_name}</span>
                </p>
              )}
              <div className="max-w-lg leading-relaxed mt-2">
                <p className="text-base text-blue-100 flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faLocationDot} className="text-blue-300 text-base mt-1 flex-shrink-0" />
                  <span>{address}</span>
                </p>
              </div>
              {fax && (
                <p className="text-sm text-blue-200/90 flex items-center gap-2 pt-1">
                  <FontAwesomeIcon icon={faFax} className="text-blue-300 text-xs" />
                  <span>Fax: {fax}</span>
                </p>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Contact:
              </h3>
              <div>
                <p className="text-lg font-bold text-white">{contact_name}</p>
                <p className="text-sm font-medium text-blue-200">{position}</p>
              </div>
              <div className="space-y-2 pt-1">
                {phoneNumbers.map((number, index) => {
                  const cleanPhone = number.trim().replace(/[^\d+]/g, "");
                  return (
                    <p key={index} className="text-base">
                      <a
                        href={`tel:${cleanPhone}`}
                        className="text-white hover:text-blue-300 font-medium hover:underline inline-flex items-center gap-2.5 transition-colors"
                      >
                        <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-xs text-blue-200">
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <span>{number.trim()}</span>
                      </a>
                    </p>
                  );
                })}
              </div>
              {email && (
                <p className="text-base pt-1">
                  <a
                    href={`mailto:${email.trim()}`}
                    className="text-white hover:text-blue-300 font-medium hover:underline inline-flex items-center gap-2.5 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-xs text-blue-200">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span>{email.trim()}</span>
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-[#212529] px-8 pt-14">
        <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold mb-8">
          Offices in {location || "Select a Country"}
        </h2>
        <div className="max-w-4xl mx-auto">
          {isMounted && <Slider key={`offices-slider-${isMobile ? "m" : (isTablet ? "t" : "d")}`} ref={sliderRef} {...sliderSettings}>
            {offices &&
              offices.map((office) => (
                <div
                  key={office.id}
                  className="px-4 py-4 text-center text-[16px] font-normal hover:font-bold transition-all duration-300"
                >
                  <div className="min-w-64 border-gray-400 border-r last:border-none">
                    {office.office_name || "No office name provided"}
                  </div>
                </div>
              ))}
          </Slider>}
          {offices.length > 0 && (
            <div
              className={`flex justify-center pt-8 space-x-4 ${offices.length <= 4 ? "block sm:hidden" : "block"
                }`}
            >
              <button
                className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                onClick={() => sliderRef.current.slickPrev()}
                aria-label="Previous slide"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                onClick={() => sliderRef.current.slickNext()}
                aria-label="Next slide"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}
        </div>
      </div>

      <Tooltip
        id="uae-tooltip"
        delayShow={300}
        place="bottom"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "7px",
          maxWidth: "200px",
          zIndex: "20",
        }}
      />
      <Tooltip
        id="oman-tooltip"
        delayShow={300}
        place="right"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "7px",
          maxWidth: "200px",
          zIndex: "20",
        }}
      />
      <Tooltip
        id="ksa-tooltip"
        delayShow={300}
        place="left"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "7px",
          maxWidth: "200px",
          zIndex: "20",
        }}
      />
      <Tooltip
        id="qatar-tooltip"
        delayShow={300}
        place="top"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "7px",
          maxWidth: "200px",
          zIndex: "20",
        }}
      />
    </>
  );
};

export default OurNetwork;