'use client';

import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/Home/logo.webp";
import apiClient from "../../../api";
import Copyright from "../../Copyright";

const DEFAULT_REGIONS = [
  {
    id: "oman",
    location: "Sultanate of Oman",
    company: "ALSI Global LLC",
    address: "P.O. Box 608. P.C: 322.\nW. Sohar, Sultanate of Oman",
    contact: "+968 2675 5598\n+968 9131 1118",
    email: "info@alsiglobal.com",
  },
  {
    id: "uae",
    location: "United Arab Emirates",
    company: "ALSI Global LLC",
    address: "Dubai National Insurance Building\n5th Floor, Office 502, Deira, Dubai, UAE",
    contact: "+971 4 585 0934\n+971 56 858 7717",
    email: "jv@alsiglobal.com",
  },
  {
    id: "ksa",
    location: "Kingdom of Saudi Arabia",
    company: "ALSI Global LLC",
    address: "Building No. 3475, Dhahrat Laban Dist,\nPC 12564 Riyadh, Saudi Arabia",
    contact: "+966 50 362 5981",
    email: "khalid@alsiglobal.com",
  },
  {
    id: "qatar",
    location: "State of Qatar",
    company: "ALSI Global LLC",
    address: "Office 01, Icono View Building,\nC Ring Road, Doha, Qatar",
    contact: "+974 4047 8563\n+974 3362 5333",
    email: "adityan@alsiglobal.com",
  },
];

const Footer = () => {
  const [footerData, setFooterData] = useState({ regions: DEFAULT_REGIONS });

  const fetchRegions = async () => {
    try {
      const response = await apiClient.get("layout/footer/");
      if (Array.isArray(response.data) && response.data.length > 0) {
        setFooterData({ regions: response.data });
      }
    } catch (error) {
      // Use DEFAULT_REGIONS fallback
    }
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  const regionsToDisplay = footerData.regions.length ? footerData.regions : DEFAULT_REGIONS;

  const removeHtmlTags = (str) => {
    return str ? str.replace(/<[^>]*>/g, "") : "";
  };

  return (
    <footer className="bg-white text-zinc-800">
      <div className="container mx-auto py-4 text-center">
        <img src={Logo.src || Logo} className="mx-auto mb-6 mt-2 w-24 md:w-28 lg:w-32 h-auto" width={128} height={179} loading="lazy" decoding="async" alt="ALSI Logo" />
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-8 py-6 px-4 sm:px-8 md:px-16">
        {regionsToDisplay.map((region) => (
          <div key={region.id} className="flex-1 min-w-[200px] text-center font-normal">
            <div dangerouslySetInnerHTML={{ __html: region.location }} className="text-lg font-bold mb-2"/>
            {region.company && <div dangerouslySetInnerHTML={{ __html: region.company }} className="mb-1.5"/>}
            {region.address?.split("\n").map((line, idx) => (
              <div key={idx} className="mb-1.5 w-60 mx-auto leading-8" dangerouslySetInnerHTML={{ __html: line}}/>
            ))}
            {region.contact?.split("\n").map((phone, idx) => (
              <p key={idx} className="mb-1.5">
                <a href={`tel:${removeHtmlTags(phone.replace(/\s+/g, ''))}`} dangerouslySetInnerHTML={{__html: phone}}/>
              </p>
            ))}
            {region.email && (
              <p className="mb-1.5 mt-3 sm:mt-3 md:mt-2 lg:mt-2 xl:mt-2">
                <a href={`mailto:${removeHtmlTags(region.email)}`} dangerouslySetInnerHTML={{__html: region.email}}/>
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center py-5" style={{ backgroundColor: "#182d70" }}>
        <Copyright
          fontSize="15px"
          fontWeight="medium"
          textColor="text-gray-400"
        />
      </div>
    </footer>
  );
};

export default Footer;