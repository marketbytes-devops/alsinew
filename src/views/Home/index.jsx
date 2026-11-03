'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faAngleRight,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import Title from "../../components/Title";
import "swiper/css";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import networkBg from "../../assets/images/Home/GlobalMap.webp";
import CardBg from "../../assets/images/Home/Achievements-bg.webp";
import apiClient from "../../api";
import UAE from "../../components/UiComponents/Network/Maps/UAE";
import Oman from "../../components/UiComponents/Network/Maps/Oman";
import KSA from "../../components/UiComponents/Network/Maps/KSA";
import Qatar from "../../components/UiComponents/Network/Maps/Qatar";
import Form from "../../components/UiComponents/Form";


const DEFAULT_BANNER = {
  id: 3,
  image: "/images/home_banner.webp",
  title: "<h1><strong>Complete Logistics</strong></h1><h1><strong>Solutions</strong></h1>",
  subtitle: "<h6>Reliable. Efficient. Seamless.</h6>",
  description: "<p>ALSI: Your dedicated partner for comprehensive logistics services and solutions. With expertise in customs clearance, transportation, freight forwarding, project cargo services and warehousing, we optimize your supply chain. Partner with ALSI and experience hassle-free logistics that help achieve your business goals.</p>",
  link_name: "<p>Read More</p>",
  link_url: "about-us"
};

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const removeHtmlTags = (str) => {
    return str ? str.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ") : "";
  };

  const stripHeadingTags = (str) => {
    if (!str) return "";
    return str.replace(/<\/?h[1-6][^>]*>/gi, "");
  };

  const formatHeroTitle = (html) => {
    if (!html) return "";
    return html
      .replace(/<\/?h[1-6][^>]*>/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const truncateText = (text, limit) => {
    if (typeof text !== "string") return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  const [bannerData, setBannerData] = useState(DEFAULT_BANNER);
  useEffect(() => {
    apiClient.get("/home/banner/")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const item = response.data[0];
          if (item.image && item.image.includes("home_banner.webp")) {
            item.image = "/images/home_banner.webp";
          }
          setBannerData(item);
        }
      })
      .catch();
  }, []);

  const [servicesTitle, setServicesTitle] = useState("");
  const [servicesData, setServicesData] = useState([]);
  const servicesSliderRef = useRef(null);

  useEffect(() => {
    apiClient.get("service/services-banner/")
      .then((response) => {
        if (response.data.length > 0) setServicesTitle(response.data[0].title);
        else setServicesTitle("Our Services");
      })
      .catch();
  }, []);

  useEffect(() => {
    apiClient.get("service/services/")
      .then((response) => {
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
        setServicesData(formattedData);
      })
      .catch();
  }, []);

  const servicesSliderSettings = {
    accessibility: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const [networkTitle, setNetworkTitle] = useState("");
  const [networkData, setNetworkData] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: "0%", left: "0%" });
  const [isMouseInsideTooltip, setIsMouseInsideTooltip] = useState(false);

  useEffect(() => {
    Promise.all([
      apiClient.get("network/our-network-banner/"),
      apiClient.get("network/our-network/")
    ]).then(([titleResponse, networkResponse]) => {
      if (titleResponse.data.length > 0) setNetworkTitle(titleResponse.data[0].title_highlight);
      if (networkResponse.data.length > 0) setNetworkData(networkResponse.data);
    }).catch();
  }, []);

  const handleMouseEnter = (country) => {
    setHoveredCountry(country);
    setTooltipVisible(true);
    const selectedCountry = networkData.find(data => removeHtmlTags(data.name) === country);
    if (selectedCountry) {
      setTooltipPosition({
        top: `${parseFloat(selectedCountry.position_top)}%`,
        left: `${parseFloat(selectedCountry.position_left)}%`
      });
    }
  };

  const handleMouseLeave = (event) => {
    const tooltip = document.querySelector('.tooltip');
    const isTooltipHovered = tooltip && tooltip.contains(event.relatedTarget);
    if (!isTooltipHovered && !isMouseInsideTooltip) {
      setTooltipVisible(false);
      setHoveredCountry(null);
    }
  };

  const [chooseUsData, setChooseUsData] = useState(null);
  useEffect(() => {
    apiClient.get("home/chooses/")
      .then((response) => {
        if (response.data.length > 0) setChooseUsData(response.data[0]);
      })
      .catch();
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [diffTitle, setDiffTitle] = useState("");
  const [diffSubtitle, setDiffSubtitle] = useState("");
  const [differentiators, setDifferentiators] = useState([]);
  const [isLoadingDiff, setIsLoadingDiff] = useState({ title: true, entries: true });

  useEffect(() => {
    apiClient.get("home/differentiator/")
      .then((response) => {
        const data = response.data;
        if (data.length > 0) {
          setDiffTitle(data[0].title);
          setDiffSubtitle(data[0].subtitle);
        }
      })
      .catch()
      .finally(() => setIsLoadingDiff(prev => ({ ...prev, title: false })));
  }, []);

  useEffect(() => {
    apiClient.get("home/differentiator-entries/")
      .then((response) => setDifferentiators(response.data || []))
      .catch()
      .finally(() => setIsLoadingDiff(prev => ({ ...prev, entries: false })));
  }, []);

  const [achievementsTitle, setAchievementsTitle] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [isLoadingAchievements, setIsLoadingAchievements] = useState({ title: true, entries: true });

  useEffect(() => {
    apiClient.get("home/achievement/")
      .then((response) => {
        const data = response.data;
        if (data.length > 0) setAchievementsTitle(data[0].title);
      })
      .catch()
      .finally(() => setIsLoadingAchievements(prev => ({ ...prev, title: false })));
  }, []);

  useEffect(() => {
    apiClient.get("home/achievement-entries/")
      .then((response) => setAchievements(response.data || []))
      .catch()
      .finally(() => setIsLoadingAchievements(prev => ({ ...prev, entries: false })));
  }, []);

  const [highlightsTitle, setHighlightsTitle] = useState("");
  const [highlights, setHighlights] = useState([]);
  const [isLoadingHighlights, setIsLoadingHighlights] = useState(true);
  const highlightsSliderRef = useRef(null);

  useEffect(() => {
    Promise.all([
      apiClient.get("home/highlight/"),
      apiClient.get("home/highlight-entries/")
    ]).then(([titleResponse, highlightsResponse]) => {
      if (titleResponse.data.length > 0) setHighlightsTitle(titleResponse.data[0].title);
      if (highlightsResponse.data.length > 0) setHighlights(highlightsResponse.data);
    })
      .catch()
      .finally(() => setIsLoadingHighlights(false));
  }, []);

  const highlightsSlickSettings = {
    accessibility: false,
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
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
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const [industriesTitle, setIndustriesTitle] = useState("");
  const [industries, setIndustries] = useState([]);
  const [isLoadingIndustries, setIsLoadingIndustries] = useState(true);
  const industriesSliderRef = useRef(null);

  useEffect(() => {
    Promise.all([
      apiClient.get("home/industry/"),
      apiClient.get("home/industry-entries/")
    ]).then(([titleResponse, industriesResponse]) => {
      if (titleResponse.data.length > 0) setIndustriesTitle(titleResponse.data[0].title);
      if (industriesResponse.data.length > 0) setIndustries(industriesResponse.data);
    })
      .catch()
      .finally(() => setIsLoadingIndustries(false));
  }, []);

  const industriesSlickSettings = {
    accessibility: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [blogTitle, setBlogTitle] = useState("Market Updates");
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogUrl, setBlogUrl] = useState("/market-updates");
  const [loadingBlog, setLoadingBlog] = useState({ title: true, posts: true });
  const blogPrevRef = useRef(null);
  const blogNextRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const cachedBanner = sessionStorage.getItem("blogBanner");
    const cachedPosts = sessionStorage.getItem("blogPosts");

    const fetchBanner = apiClient.get("market/blog-banner/")
      .then(response => {
        if (response.data.length > 0) {
          const banner = response.data[0];
          setBlogTitle(banner.title_highlights);
          setBlogUrl(banner.blog_url || "/market-updates");
          sessionStorage.setItem("blogBanner", JSON.stringify(banner));
        }
      });

    const fetchPosts = apiClient.get("market/blog-entries/?limit=4")
      .then(response => {
        setBlogPosts(response.data || []);
        sessionStorage.setItem("blogPosts", JSON.stringify(response.data || []));
      });

    if (cachedBanner && cachedPosts) {
      const banner = JSON.parse(cachedBanner);
      setBlogTitle(banner.title_highlights);
      setBlogUrl(banner.blog_url || "/market-updates");
      setBlogPosts(JSON.parse(cachedPosts));
      setLoadingBlog({ title: false, posts: false });

      // Optionally still fetch in background to refresh cache
      Promise.all([fetchBanner, fetchPosts]).catch();
    } else {
      Promise.all([fetchBanner, fetchPosts])
        .catch()
        .finally(() => setLoadingBlog({ title: false, posts: false }));
    }
  }, []);

  const handleReadMore = (post) => {
    if (!post.blog_slug) return;
    const selectedIndex = blogPosts.findIndex((entry) => entry.blog_slug === post.blog_slug);
    const recentPosts = [];
    for (let i = selectedIndex - 2; i <= selectedIndex + 1; i++) {
      if (i >= 0 && i < blogPosts.length && i !== selectedIndex) {
        recentPosts.push(blogPosts[i]);
      }
    }
    if (recentPosts.length < 3) {
      const additionalPosts = blogPosts.filter(
        (entry, index) => !recentPosts.includes(entry) && index !== selectedIndex
      );
      for (let i = 0; recentPosts.length < 3 && i < additionalPosts.length; i++) {
        recentPosts.push(additionalPosts[i]);
      }
    }

    router.push(`/market-updates/${post.blog_slug}/`, {
      state: {
        image: post.image,
        description: post.description || "No Description Available",
        blogTitle: post.main_title || "No Title Available",
        currentDate: post.date || "No Date Available",
        currentTime: post.time || "No Time Available",
        highlightBlog: post.intro || "No Highlights Available",
        blogContent: post.additional_content || "No Content Available",
        recentPosts: recentPosts.slice(0, 3),
      },
    });
  };




  const achievementsRef = useRef(null);

  useEffect(() => {
    const targetUrl = "https://www.alsiglobal.com/#achievements";
    const currentUrl = window.location.href.replace(/\/$/, "");
    const isTargetUrl = currentUrl === targetUrl || currentUrl === targetUrl.replace(/\/$/, "");

    if (isTargetUrl && achievementsRef.current) {
      const scrollTimeout = setTimeout(() => {
        achievementsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(scrollTimeout);
    }
  }, []);

  return (
    <>
      

      <main role="main">
        <section aria-label="Hero Banner" className="relative overflow-hidden">
          {bannerData ? (
            <div className="max-w-[1700px] mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start pt-28 sm:pt-36 lg:pt-44 min-h-auto sm:min-h-screen relative">
              {/* Content Section */}
              <div className="z-30 text-[#212529] w-full lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 md:px-16 lg:px-20 mt-6 lg:mt-0">
                <h1
                  className="mb-4 text-3xl sm:text-5xl lg:text-[75px] xl:text-[85px] font-bold leading-tight lg:leading-[85px] xl:leading-[95px] space-y-4 xl:space-y-0"
                  dangerouslySetInnerHTML={{ __html: formatHeroTitle(bannerData.title) }}
                />
                <p
                  className="mb-6 mt-2 sm:mt-0 text-lg sm:text-xl lg:text-2xl font-semibold text-[#193579]"
                >
                  {removeHtmlTags(bannerData.subtitle)}
                </p>
                <div
                  className="mb-8 text-sm sm:text-base lg:text-lg w-full lg:w-[80%] mx-auto lg:mx-0"
                  dangerouslySetInnerHTML={{ __html: bannerData.description }}
                />
                <div className="flex items-center justify-center lg:justify-start">
                  <Link href={removeHtmlTags(bannerData?.link_url)?.startsWith("/") ? removeHtmlTags(bannerData?.link_url) : `/${removeHtmlTags(bannerData?.link_url) || "about-us"}`} aria-label="Read more about ALSI Global" className="text-[#212529] text-sm font-medium mr-3 flex items-center group">
                    {removeHtmlTags(bannerData.link_name)}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 rounded-full px-3 py-3 text-white bg-[#2044a2] group-hover:text-[#2044a2] group-hover:bg-white border border-transparent group-hover:border-[#2044a2] transform transition-all" />
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-[55%] mt-0 -mb-20 sm:-mb-0 sm:mt-20 xl:-mt-10 px-6 lg:px-0 flex justify-center lg:justify-end lg:absolute lg:right-4 lg:top-24 z-20 pointer-events-none">
                <Image
                  src={bannerData.image}
                  alt={removeHtmlTags(bannerData.title) || "ALSI Logistics Solutions"}
                  width={680}
                  height={620}
                  priority
                  className="w-full h-[300px] sm:h-[440px] lg:h-[620px] object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 55vw"
                />
              </div>
            </div>
          ) : (
            <div className="h-screen flex items-center justify-center">
              <div className="animate-pulse bg-gray-200 w-full h-full"></div>
            </div>
          )}
        </section>

        <section aria-label="Our Services" className="mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0">
          <div className="text-center mt-4 mb-4 sm:mb-4 md:mb-8">
            <Title title={servicesTitle} />
          </div>
          <div className="relative lg:px-36 md:px-36 sm:px-4 -mt-4 sm:-mt-0">
            {isMounted && <Slider ref={servicesSliderRef} {...servicesSliderSettings}>
              {servicesData.map((service, index) => (
                <div key={index}>
                  <Link href={service.link}>
                    <div className="relative p-6 bg-white text-center h-auto sm:h-[300px] md:h-[350px] lg:h-[350px] xl:h-[350px] hover:scale-[1.05] transition-transform duration-500 shadow-xl shadow-gray-300">
                      <div className="text-6xl flex items-center justify-center mb-4 py-8 relative top-0">
                        <img src={service.image} className="w-16 h-16 object-contain" alt={service.title} width={64} height={64} loading="lazy" decoding="async" />
                      </div>
                      <div className="text-2xl font-bold text-[#193579] relative top-0" dangerouslySetInnerHTML={{ __html: service.title }} />
                      <div className="text-[#6a6d78] py-1 relative top-0" dangerouslySetInnerHTML={{ __html: service.subtitle }} />
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>}
            {servicesData.length > 0 && (
              <div className="flex justify-center pt-8 space-x-4">
                <button aria-label="Previous service slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                  onClick={() => servicesSliderRef.current.slickPrev()}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button aria-label="Next service slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                  onClick={() => servicesSliderRef.current.slickNext()}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            )}
          </div>
        </section>

        <section aria-label="Our Network">
          {networkData.length > 0 && (
            <div className="relative py-6 text-center" style={{
              width: "100%", height: "auto", background: `url("${networkBg.src || networkBg}")`,
              backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover",
              aspectRatio: "16/6", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
            }}>
              <Title title={networkTitle} color="white" />
              <div className="flex items-center justify-center">
                <div className="map-svg-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1166.776 870.253"
                    className="w-[320px] h-auto sm:w-[320px] md:w-[400px] lg:w-[650px] aspect-[1166/870]">
                    <g transform="translate(-6088.6 421.048)">
                      <g transform="translate(6859.722 -104.237)" clipPath="url(#a)" className="uae"
                        fill={hoveredCountry === "UAE" ? "#1890F9" : "#125194"}
                        onMouseEnter={() => handleMouseEnter("UAE")} onMouseLeave={handleMouseLeave}
                        style={{ transition: "fill 0.3s ease-in-out, filter 0.3s ease-in-out", filter: hoveredCountry === "UAE" ? "drop-shadow(10px 10px 10px #080808)" : "none" }}>
                        <UAE />
                      </g>
                      <g fill={hoveredCountry === "Oman" ? "#1890F9" : "#125194"}
                        onMouseEnter={() => handleMouseEnter("Oman")} onMouseLeave={handleMouseLeave}
                        style={{ transition: "fill 0.3s ease-in-out, filter 0.3s ease-in-out", filter: hoveredCountry === "Oman" ? "drop-shadow(10px 5px 10px #000000)" : "none" }}>
                        <Oman />
                      </g>
                      <g transform="translate(6088.6 -421.048)" clipPath="url(#b)"
                        fill={hoveredCountry === "KSA" ? "#1890F9" : "#125194"}
                        onMouseEnter={() => handleMouseEnter("KSA")} onMouseLeave={handleMouseLeave}
                        style={{ transition: "fill 0.3s ease-in-out, filter 0.3s ease-in-out", filter: hoveredCountry === "KSA" ? "drop-shadow(10px 5px 10px #000000)" : "none" }}>
                        <KSA />
                      </g>
                      <g transform="translate(6818.349 -106.485)" clipPath="url(#g)" className="focus-outline-none"
                        fill={hoveredCountry === "Qatar" ? "#1890F9" : "#125194"}
                        onMouseEnter={() => handleMouseEnter("Qatar")} onMouseLeave={handleMouseLeave}
                        style={{ transition: "fill 0.3s ease-in-out, filter 0.3s ease-in-out", filter: hoveredCountry === "Qatar" ? "drop-shadow(0px 0px 20px #080808)" : "none" }}>
                        <Qatar />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

              {tooltipVisible && hoveredCountry ? (
                <motion.div className="z-30 tooltip bg-white text-[#212529] space-y-2 w-[180px] h-auto sm:w-[180px] md:w-[200px] lg:w-[200px] xl:w-[200px]"
                  style={{ position: "absolute", borderRadius: "5px", padding: "10px", top: tooltipPosition.top, left: tooltipPosition.left }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
                  onMouseEnter={() => setIsMouseInsideTooltip(true)}
                  onMouseLeave={() => { setIsMouseInsideTooltip(false); handleMouseLeave(); }}>
                  <div className="text-left text-[24px] font-extrabold">{removeHtmlTags(hoveredCountry)}</div>
                  <p className="text-left text-[12px] font-[600]">
                    {networkData.find(data => removeHtmlTags(data.name) === hoveredCountry)?.address ?
                      removeHtmlTags(networkData.find(data => removeHtmlTags(data.name) === hoveredCountry)?.address) : null}
                  </p>
                  <div className="flex justify-left items-center">
                    <Link href={networkData.find(data => removeHtmlTags(data.name) === hoveredCountry)?.url}>
                      <div className="flex items-center justify-start">
                        <span className="text-xs font-bold">Learn More</span>
                        <span className="ml-2 flex justify-center items-center w-8 h-8 text-white bg-[#2044a2] hover:bg-white hover:text-[#2044a2] hover:border-[#2044a2] hover:border rounded-full transform transition-all">
                          <FontAwesomeIcon icon={faArrowRight} size="xs" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <div className="z-30 tooltip w-[180px] h-[100px] sm:w-[180px] md:w-[200px] lg:w-[200px] xl:w-[200px]"
                  style={{ position: "absolute", top: tooltipPosition.top, left: tooltipPosition.left, visibility: "hidden" }} />
              )}
            </div>
          )}
        </section>

        <section aria-label="Why Choose Us" className="mt-0 sm:mt-0 lg:mt-0">
          {chooseUsData && (
            <div
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-between xl:h-screen sm:h-fit"
              style={{
                background: `url("${chooseUsData.image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "fill",
              }}
            >
              <div className="w-full sm:w-[100%] lg:w-[60%] flex justify-center lg:justify-start">
                <div className="flex flex-wrap justify-center sm:justify-center lg:justify-start sm:px-0 lg:px-28 my-6 sm:my-6 lg:my-0">
                  <div
                    className="
                      text-center sm:text-center 
                      lg:text-right xl:text-right
                    "
                  >
                    <div
                      className="mb-4 text-[#212529] whitespace-nowrap"
                      dangerouslySetInnerHTML={{ __html: chooseUsData.title }}
                    />

                    <div
                      className="
                        pl-6 pr-6
                        sm:pl-10 sm:pr-10
                        lg:pl-36 lg:pr-0 xl:pl-36 xl:pr-0
                      "
                      dangerouslySetInnerHTML={{ __html: chooseUsData.description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section aria-label="Key Differentiators" className="mt-4 sm:mt-4 md:mt-0 lg:mt-0">
          <div className='text-center px-8 xl:px-44 sm:px-8'>
            {!isLoadingDiff.title && <Title title={diffTitle} subtitle={diffSubtitle} />}
          </div>
          {!isLoadingDiff.entries && differentiators.length > 0 && (
            <>
              <div className='block sm:hidden'>
                <Swiper modules={[Navigation, A11y, Autoplay]} spaceBetween={0} slidesPerView={1}
                  navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} pagination={false}
                  autoplay={{ delay: 3000 }} onSwiper={(swiper) => {
                    setTimeout(() => {
                      if (swiper?.params?.navigation && typeof swiper.params.navigation === 'object') {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                      }
                      if (swiper?.navigation) {
                        try {
                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        } catch (e) {}
                      }
                    });
                  }} className='my-6'>
                  {differentiators.map((entry) => (
                    <SwiperSlide key={entry.id} className='flex flex-col items-center justify-center'>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='rounded-full w-40 h-40 p-16 mt-4' style={{ background: "radial-gradient(at left, #1d346e, #027eb4)" }}>
                          <img src={entry.image} alt={removeHtmlTags(entry.differentiator_title)}
                            className='w-10 h-10 object-contain scale-100 hover:scale-110 transition-all duration-300' width={40} height={40} loading='lazy' decoding='async' />
                        </div>
                        <div className='mt-4 text-[16px] uppercase font-bold px-20 text-center' dangerouslySetInnerHTML={{ __html: entry.differentiator_title }} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="flex justify-center mt-4 space-x-4 pt-8">
                  <button aria-label="Previous differentiator slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full" ref={prevRef}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button aria-label="Next differentiator slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full" ref={nextRef}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>

              <div className='hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-start justify-center mx-20'>
                {differentiators.map((entry) => (
                  <div key={entry.id} className='relative w-full h-[280px] flex flex-col items-center justify-start group'>
                    <div className='flex items-center justify-center h-[180px] w-full'>
                      <div className='rounded-full p-8 transition-all duration-300' style={{ background: "radial-gradient(at left, #1d346e, #027eb4)" }}>
                        <img src={entry.image} alt={removeHtmlTags(entry.differentiator_title)}
                          className='w-10 h-10 object-contain scale-100 group-hover:scale-110 transition-all duration-300' width={40} height={40} loading='lazy' decoding='async' />
                      </div>
                    </div>
                    <div className='w-full px-4 h-[80px] flex items-start justify-center'>
                      <div className='text-[16px] text-[#212529] uppercase font-bold text-center leading-tight'
                        dangerouslySetInnerHTML={{ __html: entry.differentiator_title }} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        <section aria-label="Achievements" className="mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0" ref={achievementsRef}>
          <div className="text-center pb-2 sm:pb-2 md:pb-2 lg:pb-4">
            <Title title={achievementsTitle} />
          </div>
          {!isLoadingAchievements.entries && achievements.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
              {achievements.map((achievement) => (
                <div key={achievement.id}>
                  <div className="hover:scale-[1.02] transform-scale duration-300" style={{
                    background: `url("${CardBg.src || CardBg}")`, backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    backgroundSize: "cover", padding: "20px", aspectRatio: "1/0.5", width: "100%", height: "auto",
                  }}>
                    {achievement.image ? (
                      <img src={achievement.image} alt={removeHtmlTags(achievement.description || "Achievement image")}
                        className="w-full h-auto object-cover" width={350} height={175} loading="lazy" decoding="async" />
                    ) : <div className="text-center text-gray-500">No image available</div>}
                  </div>
                  <div className="text-center mt-4">
                    {achievement.description ? (
                      <div className="text-xl text-[#212529] font-extrabold" dangerouslySetInnerHTML={{ __html: achievement.description }} />
                    ) : <p className="text-gray-500">No description available</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section aria-label="Highlights" className="mb-6 sm:-mb-2 md:mb-10 lg:mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0">
          {!isLoadingHighlights && highlights.length > 0 && (
            <div style={{ background: "rgb(18, 81, 148)", width: "100%", height: "auto" }}>
              <div className="hidden xs:hidden sm:hidden md:hidden lg:flex xl:flex">
                <div className="relative left-36 top-40 px-3 py-4">
                  <h2 dangerouslySetInnerHTML={{ __html: stripHeadingTags(highlightsTitle) }} className="text-white text-4xl font-bold" />
                </div>
                <div className="flex justify-end flex-wrap py-20 pr-20">
                  <div className="card w-[350px] h-[350px]"></div>
                  {highlights.map((highlight) => (
                    <div key={highlight.id} className="card w-[350px] h-[350px] bg-[linear-gradient(0deg,#193377,#009adb)] border border-gray-300 flex items-center justify-center hover:scale-[1.02] transition duration-300">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="flex items-center justify-center" style={{
                          width: "50px", height: "50px", border: "3px solid white", borderRadius: "50%", background: "transparent",
                        }}>
                          <FontAwesomeIcon icon={faCheck} size="lg" className="text-white" />
                        </div>
                        <div className="text-white text-lg font-extrabold mt-4" dangerouslySetInnerHTML={{ __html: highlight.highlight_title }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="block xs:block sm:block md:block lg:hidden xl:hidden py-6">
                <div className="text-center pb-6">
                  <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: stripHeadingTags(highlightsTitle) }} className="text-white text-4xl font-bold" />
                </div>
                {isMounted && <Slider {...highlightsSlickSettings} ref={highlightsSliderRef}>
                  {highlights.map((highlight) => (
                    <div key={highlight.id}>
                      <div className="mx-8 card w-auto h-[300px] bg-[linear-gradient(0deg,#193377,#009adb)] border border-gray-300 flex flex-col items-center justify-center hover:scale-[1.02] transition duration-300">
                        <div className="flex flex-col items-center justify-center" style={{
                          width: "50px", height: "50px", border: "3px solid white", borderRadius: "50%", background: "transparent",
                        }}>
                          <FontAwesomeIcon icon={faCheck} size="lg" className="text-white" />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: highlight.highlight_title }} className="text-center text-white text-lg font-bold mt-4" />
                      </div>
                    </div>
                  ))}
                </Slider>}
                <div className="flex justify-center space-x-4 pt-10">
                  <button aria-label="Previous highlight slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                    onClick={() => highlightsSliderRef.current.slickPrev()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button aria-label="Next highlight slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                    onClick={() => highlightsSliderRef.current.slickNext()}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <section aria-label="Industries We Serve" className="mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
          <div className="text-center pb-2 sm:pb-4 md:pb-0 lg:pb-0">
            <Title title={industriesTitle} />
          </div>
          {!isLoadingIndustries && industries.length > 0 && (
            <div className="relative">
              {isMounted && <Slider ref={industriesSliderRef} {...industriesSlickSettings}>
                {industries.map((entry, index) => (
                  <div key={`${entry.id}-${index}`} className="px-2 sm:px-4">
                    <Link href={entry.path_name}>
                      <div className="flex flex-col bg-white h-[650px] sm:h-[700px] md:h-[680px] lg:h-[720px] xl:h-[720px]">
                        <div className="flex-grow">
                          <div className="flex items-center mb-4">
                            <div dangerouslySetInnerHTML={{ __html: entry.title }}
                              className="text-left text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#212529] mr-3" />
                            <div className="flex-1 h-[4px] bg-[#00008E] rounded"></div>
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: entry.description }}
                            className="text-left text-[#212529] text-sm md:text-base lg:text-lg leading-relaxed" />
                        </div>
                        <div className="relative mt-auto">
                          <div className="relative h-[300px] sm:h-[350px] md:h-[280px] lg:h-[320px] w-full mt-4">
                            <img src={entry.image}
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-md"
                              alt={entry.title} width={400} height={320} loading="lazy" decoding="async" />
                            <div className="absolute -top-2 -right-2 bg-gray-50 shadow-sm shadow-gray-700 w-14 h-12 flex justify-center items-center">
                              <p className="lg:text-lg md:text-lg sm:text-sm">{entry.entry_number}.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>}
              <div className="flex justify-center space-x-4 pt-2 md:pt-8">
                <button aria-label="Previous industry slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                  onClick={() => industriesSliderRef.current.slickPrev()}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button aria-label="Next industry slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white hover:border-none transform transition-transform border-2 border-gray-300 text-gray-800 w-10 h-10 rounded-full"
                  onClick={() => industriesSliderRef.current.slickNext()}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          )}
        </section>

        <section aria-label="Latest Blog Posts" className="mb-10 mt-12 sm:mt-12 md:mt-0 lg:mt-0">
          {!(loadingBlog.title || loadingBlog.posts) && blogPosts.length > 0 && (
            <div className="py-8" style={{ background: "linear-gradient(90deg, #193377, #0086bf)" }}>
              <div className="text-center mb-4">
                <Title title={blogTitle} color="white" />
              </div>
              <div className="px-4 py-6 mx-4 md:mx-32">
                <div className="block md:hidden">
                  <Swiper modules={[Navigation, A11y, Autoplay]} spaceBetween={10} slidesPerView={1}
                    navigation={{ prevEl: blogPrevRef.current, nextEl: blogNextRef.current }}
                    autoplay={{ delay: 3000 }} onSwiper={(swiper) => {
                      setTimeout(() => {
                        if (swiper?.params?.navigation && typeof swiper.params.navigation === 'object') {
                          swiper.params.navigation.prevEl = blogPrevRef.current;
                          swiper.params.navigation.nextEl = blogNextRef.current;
                        }
                        if (swiper?.navigation) {
                          try {
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                          } catch (e) {}
                        }
                      });
                    }} className="mySwiper">
                    {blogPosts.slice(0, 4).map((post) => (
                      <SwiperSlide key={post.blog_slug}>
                        <div className="bg-white p-2 rounded-md overflow-hidden">
                          {post.image ? (
                            <img src={post.image} alt={post.blog_title} className="w-full h-56 object-cover" style={{ borderRadius: "8px" }} width={380} height={224} loading="lazy" decoding="async" />
                          ) : <div className="text-center text-gray-500">No image available</div>}
                          <p className="text-lg text-[#212529] font-bold p-2" dangerouslySetInnerHTML={{ __html: truncateText(post.blog_title, 79) }} />
                          <p className="text-[#212529] font-medium text-sm mb-4 px-2" dangerouslySetInnerHTML={{ __html: truncateText(post.description, 95) }} />
                          <button className="text-[#212529] read-more-btn px-2" onClick={() => handleReadMore(post)}>
                            Read More
                          </button>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="flex justify-center mt-4 space-x-4 pt-8">
                    <button aria-label="Previous blog slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white w-10 h-10 rounded-full" ref={blogPrevRef}>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button aria-label="Next blog slide" className="bg-gray-100 hover:bg-[#2044a2] hover:text-white w-10 h-10 rounded-full" ref={blogNextRef}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>

                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="bg-white rounded-md hover:scale-[1.02] transition-scale duration-300 overflow-hidden">
                      {post.image ? (
                        <img src={post.image} alt={post.blog_title} className="w-full h-56 object-cover p-2" style={{ borderRadius: "8px" }} width={380} height={224} loading="lazy" decoding="async" />
                      ) : <div className="text-center text-gray-500">No image available</div>}
                      <div className="p-3">
                        <p className="text-[#212529] text-lg font-bold mb-2" dangerouslySetInnerHTML={{ __html: truncateText(post.blog_title, 58) }} />
                        <p className="text-[#212529] font-medium text-sm sm:mb-4 md:mb-8 lg:mb-8 xl:mb-8" dangerouslySetInnerHTML={{ __html: truncateText(post.description, 65) }} />
                        <button onClick={() => handleReadMore(post)} className="read-more-btn">Read More</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:grid justify-center items-center mt-12 hidden">
                  <Link href={blogUrl} aria-label="Read more market updates" className="text-white text-sm font-medium mr-3 flex items-center">
                    Read More
                    <FontAwesomeIcon icon={faAngleRight} className="ml-2 rounded-full px-[12px] py-[10px] text-[#2044a2] bg-white hover:bg-[#2044a2] hover:text-white transform transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        <section aria-label="Contact Form" className="mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0">
          <Form />
        </section>
      </main>
    </>
  );
};

export default Home;