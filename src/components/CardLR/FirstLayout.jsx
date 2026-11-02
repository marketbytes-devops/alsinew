import React from "react";
import LRBg from "../../assets/images/Industries/lr-bg.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FirstLayout = ({ imageUrl, title, description, showLink, link_url }) => {
  const bgUrl = LRBg.src || LRBg;
  return (
    <div className="flex flex-col mb-10 md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl?.src || imageUrl}
          alt={typeof title === "string" ? title.replace(/<[^>]*>/g, "") : "ALSI"}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="w-full md:w-1/2 flex items-center justify-center"
        style={{
          background: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "2rem",
        }}
      >
        <div className="text-left mx-2 md:mx-4 my-0 md:my-4">
          <div
            className="font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {showLink && (
            <div className="flex items-center justify-start pt-4">
              <Link href={link_url || "#"} className="flex items-center">
                Read More <FontAwesomeIcon icon={faArrowRight} size="1x" className="text-[#2044a2] bg-white hover:bg-[#2044a2] hover:text-[white] px-[11px] py-[10px] ml-4 rounded-full transition-all duration-300" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
