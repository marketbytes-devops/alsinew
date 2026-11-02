'use client';
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import Banner from "../../../components/UiComponents/Banner";
import Services from "../../../components/UiComponents/Services";
import Form from "../../../components/UiComponents/Form";
import Industries from "../../../components/UiComponents/Industries";
import apiClient from "../../../api";
import BackgroundRepeat from "../../../components/BackgroundRepeat";
import "./styles.css";

const DedicatedPage = () => {
  const params = useParams();
  const link_url = params?.name || "";
  const cleanLinkUrl = (link_url || "").replace(/^\uFEFF/, "");
  const state = null;
  const [serviceDetails, setServiceDetails] = useState({
    banner_image: '',
    service_title: "No Title Available",
    content_paragraphs: "No Content Available",
  });
  const [subcategories, setSubcategories] = useState([]);

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const canonicalServiceUrl = cleanLinkUrl
    ? `https://www.alsiglobal.com/services/${cleanLinkUrl}`
    : "https://www.alsiglobal.com/services";

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        if (cleanLinkUrl) {
          const response = await apiClient.get(`service/services/${cleanLinkUrl}/`);
          const serviceData = response.data;

          setServiceDetails({
            banner_image: serviceData.banner_image || '',
            service_title: serviceData.service_title || "No Title Available",
            content_paragraphs: serviceData.content_paragraphs || "No Content Available",
          });
        }
      } catch (error) {
        console.error("Failed to fetch service details:", error);
      }
    };

    fetchServiceDetails();
  }, [cleanLinkUrl]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (cleanLinkUrl) {
        try {
          const response = await apiClient.get(`service/services/${cleanLinkUrl}/`);
          const fetchedSubcategories = response.data.subcategories || [];

          const updatedSubcategories = fetchedSubcategories.map((category) => {
            if (isDesktop && category.enable_fill_empty_cards) {
              const cardCount = category.cards?.length || 0;
              const remaining = 8 - (cardCount % 8);
              if (remaining > 0 && remaining < 8) {
                for (let i = 0; i < remaining; i++) {
                  category.cards.push({
                    id: `empty-${category.id}-${i}`,
                    title: "",
                    image: "",
                  });
                }
              }
            }

            category.cards = category.cards.sort((a, b) => {
              if (a.title && b.title) {
                return a.title.length - b.title.length;
              }
              return 0;
            });

            return category;
          });

          setSubcategories(updatedSubcategories);
        } catch (error) {
          console.error("Failed to fetch subcategories:", error);
        }
      }
    };

    fetchSubcategories();
  }, [cleanLinkUrl, isDesktop]);

  const totalCards = subcategories.reduce(
    (sum, category) => sum + (category.cards?.length || 0),
    0
  );

  const backgroundRepeatCount = Math.ceil(totalCards / 8);

  const adjustTextColor = (color) => {
    const whiteColors = ["white", "#fff", "#ffffff"];
    return isMobile && whiteColors.includes(color?.toLowerCase())
      ? "#000"
      : color;
  };

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <>
      <div className="flex flex-grow">
        <Banner
          image={serviceDetails.banner_image}
          mainTitle={serviceDetails.service_title}
          currentUrl={canonicalServiceUrl}
          showMainTitle={true}
        />
      </div>

      <div className="px-4 sm:px-4 md:px-28 lg:px-28 xl:px-28 space-y-4 my-4 sm:my-4 md:my-12 lg:my-12 xl:my-12">
        {serviceDetails.content_paragraphs && (
          <div dangerouslySetInnerHTML={{ __html: serviceDetails.content_paragraphs }} />
        )}
      </div>

      <div className="relative bottom-4">
        <div className="hidden sm:hidden md:block lg:block xl:block -z-10 absolute w-full mx-auto">
          <BackgroundRepeat count={backgroundRepeatCount} />
        </div>
        {subcategories.length > 0 ? (
          subcategories.map((category, catIdx) => (
            <div
              key={category.id || catIdx}
              className="w-full px-4 sm:px-4 md:px-28 lg:px-28"
            >
              <div className="my-8">
                <div
                  className="text-4xl font-extrabold"
                  style={{ color: adjustTextColor(category.text_color || "#212529") }}
                  dangerouslySetInnerHTML={{ __html: category.title }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 sm:gap-y-8 md:gap-y-28 lg:gap-y-28 xl:gap-y-28">
                {category.cards.map((card, cardIdx) => (
                  <div
                    key={card.id || cardIdx}
                    className={`${card.title
                      ? "bg-gray-100 text-[#212529] rounded-md shadow-md hover:shadow-lg overflow-hidden hover:scale-[1.02] duration-300 transition-all p-4"
                      : "invisible"
                      }`}
                  >
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    )}
                    {card.title && (
                      <div className="pt-4">
                        <div
                          className="text-lg font-semibold"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center d-none">
          </div>
        )}
      </div>

      <div className="mt-10">
        <Services forceTitle="Other Services" excludeService={cleanLinkUrl} />
      </div>

      <div className="space-y-4 my-12">
        <Industries />
      </div>

      <div className="my-12">
        <Form />
      </div>
    </>
  );
};

export default DedicatedPage;
