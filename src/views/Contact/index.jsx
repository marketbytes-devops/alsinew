'use client';

import React, { useEffect, useState } from "react";
import ContactUsForm from "../../components/UiComponents/Form/ContactUsForm";
import Banner from "../../components/UiComponents/Banner";
import apiClient from "../../api";

const Contact = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    apiClient
      .get("contact/contact-banner/")
      .then((response) => {
        if (response.data.length > 0) {
          setBannerData(response.data[0]);
        }
      })
      .catch(() => {

      });
  }, []);

  if (!bannerData) {
    return <div></div>;
  }

  return (
    <>
      <div className="overflow-hidden mb-4 sm:mb-4 lg:mb-10 md:mb-10 mt-4 sm:mt-4 md:mt-0 lg:mt-0">
        <Banner image={bannerData.image} title={bannerData.title} />
      </div>
      <div className="mx-4 md:mx-24 sm:mx-4">
        <ContactUsForm />
      </div>
    </>
  );
};

export default Contact;
