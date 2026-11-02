'use client';

import React, { useEffect, useState } from 'react';
import apiClient from "../../../../api";
import Title from '../../../../components/Title';

const Certification = () => {
  const [title, setTitle] = useState("Membership and Certifications");
  const [certifications, setCertifications] = useState([]);
  const [isLoadingTitle, setIsLoadingTitle] = useState(true);
  const [isLoadingCertifications, setIsLoadingCertifications] = useState(true);

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await apiClient.get("about/member/");
        const data = response.data;
        
        if (data && data[0] && data[0].title) {
          setTitle(data[0].title);
        }
      } catch (err) {
        // Silently fail, no error handling
      } finally {
        setIsLoadingTitle(false);
      }
    };

    const fetchCertifications = async () => {
      try {
        const response = await apiClient.get("about/member-entries/");
        const data = response.data;

        if (data && data.length > 0) {
          setCertifications(data);
        }
      } catch (err) {
        // Silently fail, no error handling
      } finally {
        setIsLoadingCertifications(false);
      }
    };

    fetchTitle();
    fetchCertifications();
  }, []);

  if (isLoadingTitle || isLoadingCertifications) {
    return <div className="min-h-[100px]"></div>;
  }

  if (!certifications.length) {
    return <div></div>;
  }

  return (
    <>
      <Title title={title} />
      <div className="mt-0 sm:mt-0 md:mt-8 lg:mt-8 xl:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            className='card bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center p-8'
          >
            <img
              src={certification.image}
              className='w-auto h-14 object-contain'
              alt="Certification"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Certification;
