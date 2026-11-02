'use client';

import React from "react";
import PropTypes from "prop-types";
import facebook from "../../assets/images/SocialMediaIcons/facebook.webp";
import instagram from "../../assets/images/SocialMediaIcons/instagram.webp";
import linkedin from "../../assets/images/SocialMediaIcons/linkedin.webp";
import twitter from "../../assets/images/SocialMediaIcons/twitter.webp";
import link from "../../assets/images/SocialMediaIcons/link.webp";
import more from "../../assets/images/SocialMediaIcons/more.webp";
import { useSocialLinks } from "../../hooks/useSocialLinks";

const Banner = ({
  bgImage,
  bgImageAlt,
  image,
  title,
  mainTitle,
  date,
  time,
  currentUrl,
  showSocialMedia = false,
  showMainTitle = false,
  showDateTime = false,
  backgroundPosition = "center",
  backgroundSize = "cover",
  heightClass = "h-[400px] md:h-[450px]",
}) => {
  const socialLinks = useSocialLinks() || {};

  const socialMedia = [
    { icon: facebook, url: socialLinks.facebook || "#", external: true },
    { icon: instagram, url: socialLinks.instagram || "#", external: true },
    { icon: linkedin, url: socialLinks.linkedin || "#", external: true },
    { icon: twitter, url: socialLinks.twitter || "#", external: true },
    {
      icon: link,
      onClick: (currentUrl) => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard
            .writeText(currentUrl)
            .then(() => alert("URL copied to clipboard!"))
            .catch((err) => console.error("Failed to copy: ", err));
        }
      },
    },
    {
      icon: more,
      onClick: (currentUrl) => {
        if (typeof navigator !== "undefined" && navigator.share) {
          navigator
            .share({ title: typeof document !== "undefined" ? document.title : "ALSI", url: currentUrl })
            .then(() => console.log("Share successful"))
            .catch((err) => console.error("Share failed: ", err));
        } else {
          alert("Sharing is not supported on this browser.");
        }
      },
    },
  ];

  const rawBg = bgImage?.src || bgImage;
  const backgroundImageUrl = image
    ? image.startsWith("http")
      ? image
      : `https://www.alsibackend.com${image}`
    : rawBg;

  const formatHeader = (htmlContent) => {
    if (!htmlContent) return "";
    return htmlContent.replace(/<\/?h[1-6][^>]*>/gi, "");
  };

  const displayTitle = showMainTitle && mainTitle ? mainTitle : title;

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden`}>
      <div
        className="w-full h-full bg-cover bg-center"
        role={bgImageAlt ? "img" : undefined}
        aria-label={bgImageAlt || undefined}
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("${backgroundImageUrl}")`
            : "none",
          backgroundPosition,
          backgroundSize,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center w-full px-4 sm:px-6 md:px-10 z-10 pointer-events-none">
        <h1
          dangerouslySetInnerHTML={{ __html: formatHeader(displayTitle) }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-tight max-w-5xl"
        />
      </div>
      {showDateTime && (
        <div className="hidden md:block absolute bottom-6 sm:bottom-6 md:bottom-3 left-[90px] sm:left-[90px] md:left-20 lg:left-20 xl:left-20 p-4 text-white">
          <div className="flex items-center justify-start">
            <span dangerouslySetInnerHTML={{ __html: date }} />
            <div className="pl-[4px]">
              <span dangerouslySetInnerHTML={{ __html: time }} />
            </div>
          </div>
        </div>
      )}
      {showSocialMedia && (
        <div className="hidden md:flex absolute bottom-0 sm:bottom-0 md:bottom-3 right-[90px] sm:right-[90px] md:right-20 lg:right-20 xl:right-20 p-4 space-x-4">
          {socialMedia.map(({ icon, url, onClick, external }, index) => (
            <a
              key={index}
              href={external ? url : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!external) {
                  e.preventDefault();
                  onClick(currentUrl);
                }
              }}
              className="hover:scale-110 transition duration-300"
              title={icon === link ? "Copy URL" : icon === more ? "Share this page" : ""}
            >
              <img src={icon.src || icon} alt="Social Media Icon" className="h-4 w-4 cursor-pointer" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string,
  bgImage: PropTypes.any,
  bgImageAlt: PropTypes.string,
  title: PropTypes.string,
  mainTitle: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  currentUrl: PropTypes.string,
  showSocialMedia: PropTypes.bool,
  showMainTitle: PropTypes.bool,
  showDateTime: PropTypes.bool,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  heightClass: PropTypes.string,
};

Banner.defaultProps = {
  showSocialMedia: false,
  showMainTitle: false,
  showDateTime: false,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

export default Banner;