import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SecondLayout = ({ imageUrl, title, description, showLink, link_url }) => {
  return (
    <div className="flex flex-col mb-10 md:flex-row-reverse">
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl?.src || imageUrl}
          alt={typeof title === "string" ? title.replace(/<[^>]*>/g, "") : "ALSI"}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div
          className="text-left mx-2 md:mx-4 my-4 md:my-4"
          style={{ color: "#212529" }}
        >
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
                Read More{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="1x"
                  className="text-white bg-[#2044a2] hover:bg-white hover:text-[#2044a2] px-[11px] py-[10px] ml-4 rounded-full transition-all duration-300"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondLayout;
