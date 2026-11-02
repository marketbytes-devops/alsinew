'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/UiComponents/Banner";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

// Using the new assets folder created for this page
import landingImage from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-banner.webp";
import courierImage from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-courier.webp";
import pickupImg from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-packing.webp";
import deliveryImg from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-delivery.webp";
import expertImg from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-expert.webp";
import handlingImg from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-handling.webp";
import accordianImg from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-accordian.webp";
import serveImage from "../../assets/images/Landing/dubaiToIceland/dubai-iceland-serve.webp";

import DubaiToIcelandData from "./DubaiToIcelandData.js";

const DubaiToIceland = () => {
    const {
        header,
        services,
        freightConnectivity,
        freightConnectivity2,
        additionalSections,
        freightServices,
        customsClearance,
        faq,
        meta
    } = DubaiToIcelandData;

    const [activeIndex, useStateIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAccordion = (index) => {
        useStateIndex(activeIndex === index ? null : index);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            

            {/* Banner Section with Heading Only */}
            <Banner bgImage={landingImage} title={header.title} />

            {/* First Section: Sub-header Block (Dark Blue Background, Full-Width / One Column) */}
            <section className="relative w-full bg-[#125194] text-white py-12 sm:py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-2xl sm:text-4xl font-bold text-center md:text-left mb-6 text-white"
                        dangerouslySetInnerHTML={{ __html: services.sections[0].title }}
                    />
                    <div className="space-y-6 text-blue-50 text-base sm:text-lg leading-relaxed text-justify md:text-left">
                        <p dangerouslySetInnerHTML={{ __html: services.sections[0].description }} />
                        <div className="pt-4 flex justify-center md:justify-start">
                            <button
                                className="bg-white text-[#125194] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-sm sm:text-base shadow-md"
                                onClick={openModal}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section: 2-Column Layout (Image Left, Content Right) */}
            <section className="mt-8 sm:mt-8 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    {/* Left Column: Image */}
                    <div className="flex items-stretch">
                        <img
                            src={courierImage?.src || courierImage}
                            alt={freightConnectivity.title || "Air Freight Services from Dubai to Iceland"}
                            className="w-full h-full object-cover rounded-2xl shadow-lg min-h-[400px]"
                        />
                    </div>

                    {/* Right Column: Detailed Text Block */}
                    <div className="space-y-6 flex flex-col justify-center text-justify">
                        {freightConnectivity.title && (
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194]">
                                {freightConnectivity.title}
                            </h2>
                        )}
                        {freightConnectivity.description1 && (
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: freightConnectivity.description1 }} />
                        )}
                        {freightConnectivity.description2 && (
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: freightConnectivity.description2 }} />
                        )}

                        <div className="space-y-6 pt-4 border-t border-gray-100">
                            {freightConnectivity.solutions.map((sol, index) => (
                                <div key={index} className="space-y-3">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#125194]">
                                        {sol.title}
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: sol.description }} />

                                    {/* Suitability list */}
                                    <div className="pl-4 space-y-1">
                                        <p className="font-semibold text-gray-700 text-sm">{sol.suitableTitle}</p>
                                        <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                            {sol.suitableItems.map((item, idx) => (
                                                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                        {sol.suitableClosing && (
                                            <p className="text-gray-700 text-sm sm:text-base pt-1" dangerouslySetInnerHTML={{ __html: sol.suitableClosing }} />
                                        )}
                                    </div>

                                    {/* Provides list */}
                                    {sol.providesItems && sol.providesItems.length > 0 && (
                                        <div className="pl-4 space-y-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-[#125194] mt-3">{sol.providesTitle}</h3>
                                            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                                {sol.providesItems.map((item, idx) => (
                                                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="text-gray-500 text-xs sm:text-sm pt-1" dangerouslySetInnerHTML={{ __html: sol.closing }} />
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button
                                className="bg-[#125194] text-white font-normal py-2 px-6 rounded-full hover:bg-[#125194]/80 transition duration-300 text-sm"
                                onClick={openModal}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Section: Sea Freight and Customs */}
            <section className="mt-8 sm:mt-8 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    {/* Left Column: Detailed Text Block */}
                    <div className="space-y-6 flex flex-col justify-center text-justify order-2 md:order-1">
                        <div className="space-y-6">
                            {freightConnectivity2.solutions.map((sol, index) => (
                                <div key={index} className="space-y-3">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#125194]">
                                        {sol.title}
                                    </h2>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: sol.description }} />

                                    <div className="pl-4 space-y-1">
                                        <p className="font-semibold text-gray-700 text-sm">{sol.suitableTitle}</p>
                                        <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                            {sol.suitableItems.map((item, idx) => (
                                                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                        {sol.suitableClosing && (
                                            <p className="text-gray-700 text-sm sm:text-base pt-1" dangerouslySetInnerHTML={{ __html: sol.suitableClosing }} />
                                        )}
                                    </div>

                                    {sol.providesItems && sol.providesItems.length > 0 && (
                                        <div className="pl-4 space-y-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-[#125194] mt-3">{sol.providesTitle}</h3>
                                            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                                {sol.providesItems.map((item, idx) => (
                                                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="text-gray-500 text-xs sm:text-sm pt-1" dangerouslySetInnerHTML={{ __html: sol.closing }} />
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <button
                                className="bg-[#125194] text-white font-normal py-2 px-6 rounded-full hover:bg-[#125194]/80 transition duration-300 text-sm"
                                onClick={openModal}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex items-stretch order-1 md:order-2">
                        <img
                            src={serveImage?.src || serveImage}
                            alt="Sea Freight and Customs Clearance"
                            className="w-full h-full object-cover rounded-2xl shadow-lg min-h-[400px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#125194] mt-4 sm:mt-4 md:mt-16">
                <div className="p-4 sm:p-4 md:p-28 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    {additionalSections && additionalSections.map((section, index) => (
                        <div key={index} className="overflow-hidden py-10">
                            {section.mainHeading && (
                                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 text-left">
                                    {section.mainHeading}
                                </h2>
                            )}
                            <img
                                src={index === 0 ? (pickupImg?.src || pickupImg) : (deliveryImg?.src || deliveryImg)}
                                alt={section.imageAlt}
                                className="w-full h-auto object-cover mb-4"
                            />
                            <div>
                                <h2
                                    className="text-xl sm:text-2xl font-semibold mb-2 text-[#ffffff]"
                                    dangerouslySetInnerHTML={{ __html: section.title }}
                                />
                                <div className="text-[#ffffffcc] leading-relaxed mb-4 text-justify" dangerouslySetInnerHTML={{ __html: section.description }} />
                                <button
                                    className="bg-white text-[#125194] font-normal py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 text-sm mb-4"
                                    onClick={openModal}
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Card Section - Freight Services */}
            <section className="mt-8 sm:mt-4 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div>
                    <div className="text-center mb-8 sm:mb-12">
                        <h2
                            className="text-xl md:text-4xl font-bold text-[#125194] mb-6 text-center"
                            dangerouslySetInnerHTML={{ __html: freightServices.title }}
                        />
                        <div className="text-gray-700 max-w-5xl mx-auto text-lg text-justify" dangerouslySetInnerHTML={{ __html: freightServices.description }} />
                    </div>
                </div>
            </section>

            {/* Customs Clearance Section */}
            {customsClearance.sections && customsClearance.sections.length > 0 && (
                <section className="bg-[#125194] mt-4 sm:mt-4 md:mt-20 lg:mt-20">
                    <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28 py-4 sm:py-20 text-justify">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-14">
                            {customsClearance.sections.map((section, index) => (
                                <div key={index} className="overflow-hidden">
                                    {section.mainHeading && (
                                        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 text-left ">
                                            {section.mainHeading}
                                        </h2>
                                    )}
                                    <img
                                        src={index === 0 ? (expertImg?.src || expertImg) : (handlingImg?.src || handlingImg)}
                                        alt={section.imageAlt}
                                        className="w-full h-auto object-cover mb-4 lg:h-[350px]"
                                    />
                                    <div className="mt-4">
                                        {section.title && <h2
                                            className="text-xl sm:text-2xl font-semibold mb-2 text-[#ffffff]"
                                            dangerouslySetInnerHTML={{ __html: section.title }}
                                        />}
                                        <div className="text-[#ffffffcc] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: section.description }} />
                                        <button
                                            className="bg-white text-[#125194] font-normal py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 text-sm mb-4"
                                            onClick={openModal}
                                        >
                                            Enquire Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="min-h-auto bg-[#125194] text-white mt-4 sm:mt-4 md:mt-20 lg:mt-20 mb-2 sm:mb-2 md:mb-14 lg:mb-14">
                <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                    <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
                        <div className="lg:w-1/2 py-4 sm:py-20 flex flex-col justify-center text-justify">
                            <div className="space-y-4 h-full">
                                <h2
                                    className="text-xl text-left sm:text-2xl font-semibold text-white mb-8"
                                    dangerouslySetInnerHTML={{ __html: faq.title }}
                                />
                                {faq.items.map((item, index) => (
                                    <div key={index} className="border-b border-gray-400 pb-4">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="flex justify-start items-center w-full text-left focus:outline-none"
                                        >
                                            <motion.span
                                                className="text-2xl"
                                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                {activeIndex === index ? "−" : "+"}
                                            </motion.span>
                                            <h3 className="text-xl font-semibold pl-4">{item.question}</h3>
                                        </button>
                                        <AnimatePresence>
                                            {activeIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="mt-2 text-blue-100 overflow-hidden"
                                                >
                                                    <p className="pl-8">{item.answer}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                                <div className="pt-8">
                                    <button
                                        className="bg-white text-[#125194] font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 text-base shadow-lg"
                                        onClick={openModal}
                                    >
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex items-stretch pb-4 sm:pb-0">
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={accordianImg?.src || accordianImg}
                                    className="w-full h-full object-cover"
                                    alt={faq.imageAlt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 backdrop-brightness-50" onClick={closeModal}></div>
                    <div className="relative rounded-xl shadow-lg w-full max-w-md mx-auto z-50 bg-transparent">
                        <button
                            className="absolute top-4 right-4 text-gray-100 hover:text-gray-200 transition duration-300 border-[3px] border-gray-100 hover:border-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
                            onClick={closeModal}
                        >
                            <FontAwesomeIcon icon={faTimes} size="sm" />
                        </button>
                        <GetQuoteForm />
                    </div>
                </div>
            )}
        </>
    );
};

export default DubaiToIceland;
