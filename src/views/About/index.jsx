'use client';

import React, { useEffect, useState } from "react";
import apiClient from "../../api";
import Team from './UiComponents/Team';
import Form from '../../components/UiComponents/Form';
import Story from './UiComponents/Story';
import MissionVision from './UiComponents/MissionVision';
import Certification from './UiComponents/Certification';
import Banner from '../../components/UiComponents/Banner';
import Milestones from './UiComponents/Milestones';

const About = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    apiClient
      .get("about/banner/")
      .then((response) => {
        if (response.data.length > 0) {
          setBannerData(response.data[0]);
        }
      })
      .catch(() => {
        // Silently fail, no error handling
      });
  }, []);

  return (
    <>
      <main role="main" className="overflow-x-hidden">
        <section
          aria-label="About Banner"
          className="overflow-hidden mb-10"
        >
          {bannerData && <Banner image={bannerData.image} title={bannerData.title} />}
        </section>

        <div className="max-w-[1700px] mx-auto w-full">
          <section
            aria-label="Our Story"
            className="mx-4 sm:mx-4 md:mx-20 lg:mx-28 mb-14 mt-4"
          >
            <Story />
          </section>

          <section
            aria-label="Journey Through Milestones"
            className="overflow-hidden mb-14 mt-4"
          >
            <Milestones />
          </section>

          <section
            aria-label="Our Team"
            className="mb-14 mt-4"
          >
            <Team />
          </section>

          <section
            aria-label="Mission, Vision, and Purpose"
            className="mb-14 mt-4 mx-4 sm:mx-4 md:mx-20 lg:mx-28"
          >
            <MissionVision />
          </section>

          <section
            aria-label="Memberships and Certifications"
            className="mb-20 mt-4 mx-4 sm:mx-4 md:mx-20 lg:mx-28"
          >
            <Certification />
          </section>
        </div>

        <section
          aria-label="Contact Form"
          className="mb-10 mt-4"
        >
          <Form />
        </section>
      </main>
    </>
  );
};

export default About;
