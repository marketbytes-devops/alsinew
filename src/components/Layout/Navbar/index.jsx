'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/Home/logo.webp";
import SocialLink from "../../SocialLink";
import Nav from "../Nav";
import GetQuote from "../../Button/GetQuote";
import apiClient from "../../../api";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [services, setServices] = useState([]);
  const pathname = usePathname() || "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stripHtml = (html) => {
    if (typeof document === "undefined") return html.replace(/<[^>]*>?/gm, "");
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  useEffect(() => {
    const fetchServices = async () => {
      if (typeof window !== "undefined") {
        const cachedServices = sessionStorage.getItem("servicesData");
        if (cachedServices) {
          try {
            setServices(JSON.parse(cachedServices));
          } catch (e) {
            console.error("Error parsing cached services:", e);
          }
        }
      }

      try {
        const res = await fetch("/api/service/services/");
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        const formattedServices = data.map((service) => ({
          title: stripHtml(service.title || ""),
          path: `/services/${service.link_url}`,
          image: service.image || "",
          banner_image: service.banner_image || "",
          service_title: service.service_title,
          subtitle: service.subtitle || "",
          content_paragraphs: service.content_paragraphs || "",
        }));
        setServices(formattedServices);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("servicesData", JSON.stringify(formattedServices));
        }
      } catch (error) {
        // Fallback gracefully
      }
    };

    fetchServices();
  }, []);

  const link = {
    items: [
      { title: "Home", path: "/" },
      { title: "About Us", path: "/about-us" },
      {
        title: "Services",
        path: "/services/specialized-services",
        subItems: services,
      },
      { title: "Our Network", path: "/our-network" },
      { title: "Industries", path: "/industries" },
      { title: "Market Updates", path: "/market-updates" },
      { title: "Gallery", path: "/gallery" },
      { title: "Contact Us", path: "/contact-us" },
      { title: "Careers", path: "/careers" },
    ],
  };

  const isMarketActive = () => {
    const marketRoutes = ["/market-updates", "/market-updates/"];
    return marketRoutes.some((route) => pathname.startsWith(route));
  };

  return (
    <>
      <div className="md:hidden">
        <Nav toggleSidebar={toggleSidebar} />
      </div>
      <nav
        className={`hidden md:block sticky top-0 w-full transition-colors duration-300 ease-in-out z-40 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-end pr-4 sm:pr-4 md:pr-16 lg:pr-28 transition-all duration-300 overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-10 opacity-100 py-1"
          }`}
        >
          <SocialLink className="text-gray-500" />
        </div>
        <div className="flex justify-between items-center pl-4 sm:pl-4 md:pl-16 lg:pl-28 py-1">
          <Link href="/">
            <img src={logo.src || logo} alt="Logo" className="h-16 sm:h-16 md:h-20 lg:h-20" />
          </Link>
          <div className="flex items-center">
            <nav className="flex items-center gap-6 pr-4 sm:pr-4 md:pr-16 lg:pr-28">
              {link.items.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {item.subItems ? (
                    <span
                      className={`text-gray-800 text-[15px] whitespace-nowrap ${
                        dropdownOpen === index || pathname.startsWith("/services")
                          ? "font-bold"
                          : "font-medium"
                      } hover:font-bold transition duration-300 flex items-center cursor-pointer`}
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.title}
                      <FontAwesomeIcon
                        icon={faSortDown}
                        className="ml-2 relative bottom-1"
                        size="1x"
                      />
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className={`text-gray-800 text-[15px] whitespace-nowrap ${
                        pathname === item.path ||
                        (item.title === "Market Updates" && isMarketActive())
                          ? "font-bold"
                          : "font-medium"
                      } hover:font-bold transition duration-300 flex items-center`}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.subItems && dropdownOpen === index && (
                    <div className="absolute left-5 w-[300px] h-auto py-1 bg-white border border-gray-200 shadow-lg rounded-lg">
                      {item.subItems.map((subItem) => (
                        <Link
                          href={subItem.path}
                          key={subItem.path}
                          className={`block px-5 my-2 text-gray-800 ${
                            pathname === subItem.path ? "font-bold" : "font-medium"
                          } hover:font-bold transition duration-300`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </nav>
      <div className="hidden md:block">
        <GetQuote />
      </div>
    </>
  );
};

export default Navbar;