'use client';

import React, { useRef, useEffect, useState } from "react";
import Title from "../../Title";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import apiClient from "../../../api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = ({ excludeService, forceTitle, initialTitle }) => {
  const [title, setTitle] = useState(forceTitle || initialTitle || "");
  const [servicesData, setServicesData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sliderRef = useRef(null);

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
    if (!forceTitle && !initialTitle) {
      const fetchTitle = async () => {
        try {
          const response = await apiClient.get("service/services-banner/");
          const data = response.data;
          if (data.length > 0) {
            setTitle(data[0].title);
          } else {
            setTitle("Our Services");
          }
        } catch (err) {
          // Silently fail, no error handling
        }
      };
      fetchTitle();
    } else {
      setTitle(forceTitle || initialTitle);
    }
  }, [forceTitle, initialTitle]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await apiClient.get("service/services/");
        const formattedData = response.data.map(service => ({
          id: service.id,
          link: `/services/${service.link_url}`,
          image: service.image || "",
          banner_image: service.banner_image || "",
          title: service.title || "",
          service_title: service.service_title,
          subtitle: service.subtitle || "",
          content_paragraphs: service.content_paragraphs || "",
          link_url: service.link_url,
        }));
        const filteredData = formattedData.filter(
          (service) => service.link_url !== excludeService
        );
        setServicesData(filteredData);
      } catch (error) {
        // Silently fail, no error handling
      }
    };

    fetchServicesData();
  }, [excludeService]);

  const sliderSettings = {
    accessibility: false,
    slidesToShow: isMobile ? 1 : (isTablet ? 2 : 3),
    slidesToScroll: 1,
    infinite: servicesData.length > 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center mb-4 sm:mb-4 md:mb-8">
        <Title title={title} />
      </div>
      <div className="relative px-4 sm:px-4 md:px-36 lg:px-36">
        {isMounted && (
          <Slider
            key={`services-slider-${isMobile ? "m" : (isTablet ? "t" : "d")}`}
            ref={sliderRef}
            {...sliderSettings}
          >
            {servicesData.length > 0 ? (
              servicesData.map((service, index) => (
                <div key={service.id || index} className="px-2 sm:px-3">
                  <Link
                    href={service.link}
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        sessionStorage.setItem(`service_state_${service.link_url}`, JSON.stringify(service));
                      }
                    }}
                  >
                    <div className="relative p-6 bg-white text-center h-[320px] sm:h-[300px] md:h-[350px] lg:h-[350px] xl:h-[350px] hover:scale-[1.03] transition-transform duration-500 shadow-xl shadow-gray-300 rounded-lg">
                      <div className="text-6xl flex items-center justify-center mb-4 py-6 relative top-0">
                        <img
                          src={service.image}
                          className="w-16 h-16 object-contain"
                          alt={service.title?.replace(/<[^>]*>/g, "") || "Service"}
                          width={64}
                          height={64}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div
                        className="text-xl sm:text-2xl font-bold text-[#193579] relative top-0 leading-tight"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                      <div
                        className="text-[#6a6d78] py-2 relative top-0 text-sm sm:text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: service.subtitle }}
                      />
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </Slider>
        )}
        {servicesData.length > 0 && (
          <div className="flex justify-center pt-8 space-x-4">
            <button
              aria-label="Previous service slide"
              className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              aria-label="Next service slide"
              className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

Services.propTypes = {
  initialTitle: PropTypes.string,
  excludeService: PropTypes.string,
  forceTitle: PropTypes.string,
};

export default Services;