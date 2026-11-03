'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import apiClient from "../../../api";
import Title from "../../Title";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industries = () => {
  const [title, setTitle] = useState("");
  const [industries, setIndustries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    const fetchTitleAndIndustries = async () => {
      try {
        const titleResponse = await apiClient.get("home/industry/");
        const titleData = titleResponse.data;

        if (titleData && titleData.length > 0) {
          setTitle(titleData[0].title);
        } else {
          setTitle("<p>No Industries Available</p>");
        }

        const industriesResponse = await apiClient.get("home/industry-entries/");
        const industriesData = industriesResponse.data;

        if (industriesData.length > 0) {
          setIndustries(industriesData);
        } else {
          setIndustries([]);
        }
      } catch (err) {
        // Silently fail, no error handling
      } finally {
        setIsLoading(false);
      }
    };

    fetchTitleAndIndustries();
  }, []);

  if (!industries.length && !isLoading) {
    return <div></div>;
  }

  const slickSettings = {
    accessibility: false,
    arrows: true, 
    infinite: industries.length > 1,
    speed: 300,
    slidesToShow: isMobile ? 1 : (isTablet ? 2 : 4),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  return (
    <>
      <div className="text-center pb-2 sm:pb-4 md:pb-0 lg:pb-0">
        <Title title={title} />
      </div>

      {isLoading ? (
        <div></div>
      ) : (
        <div className="relative px-4 sm:px-4 md:px-[130px] lg:px-[130px]">
          {isMounted && (
            <Slider
              key={`industries-slider-${isMobile ? "m" : (isTablet ? "t" : "d")}`}
              ref={sliderRef}
              {...slickSettings}
            >
              {industries.map((entry, index) => (
                <div key={`${entry.id}-${index}`} className="px-2 sm:px-4">
                  <Link href={entry.path_name || "#"}>
                    <div className="flex flex-col bg-white h-[650px] sm:h-[700px] md:h-[680px] lg:h-[720px] xl:h-[720px] rounded-lg overflow-hidden">
                      <div className="flex-grow px-2 sm:px-4 pt-4">
                        <div className="flex items-center mb-4">
                          <div
                            dangerouslySetInnerHTML={{ __html: entry.title }}
                            className="text-left text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#212529] mr-3"
                          />
                          <div className="flex-1 h-[4px] bg-[#00008E] rounded"></div>
                        </div>

                        <div
                          dangerouslySetInnerHTML={{ __html: entry.description }}
                          className="text-left text-[#212529] text-sm md:text-base lg:text-lg leading-relaxed"
                        />
                      </div>

                      <div className="relative mt-auto">
                        <div className="relative h-[300px] sm:h-[350px] md:h-[280px] lg:h-[320px] w-full mt-4">
                          <img
                            src={entry.image}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-md"
                            alt={entry.title?.replace(/<[^>]*>/g, "") || "Industry"}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute top-4 right-4 bg-gray-50/95 backdrop-blur-sm shadow-md w-12 h-10 flex justify-center items-center rounded">
                            <p className="text-base font-bold text-[#193579]">
                              {entry.entry_number}.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          )}

          <div className="flex justify-center space-x-4 pt-10">
            <button
              aria-label="Previous industry slide"
              className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => sliderRef.current?.slickPrev()}  
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              aria-label="Next industry slide"
              className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => sliderRef.current?.slickNext()}  
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Industries;