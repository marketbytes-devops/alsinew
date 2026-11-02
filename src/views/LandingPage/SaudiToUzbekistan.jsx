'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/UiComponents/Banner";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

// Using the new assets folder created for this page
import landingImage from "../../assets/images/Landing/saudiToUzbekistan/banner.webp";
import courierImage from "../../assets/images/Landing/saudiToUzbekistan/courier.webp";
import pickupImg from "../../assets/images/Landing/saudiToUzbekistan/packing.webp";
import deliveryImg from "../../assets/images/Landing/saudiToUzbekistan/delivery.webp";
import expertImg from "../../assets/images/Landing/saudiToUzbekistan/expert.webp";
import handlingImg from "../../assets/images/Landing/saudiToUzbekistan/handling.webp";
import accordianImg from "../../assets/images/Landing/saudiToUzbekistan/accordian.webp";

import SaudiToUzbekistanData from "./SaudiToUzbekistanData.js";

const SaudiToUzbekistan = () => {
    const {
        header,
        services,
        additionalSections,
        freightServices,
        customsClearance,
        shippingUseCases,
        faq,
        meta
    } = SaudiToUzbekistanData;

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

            <section className="mt-4 sm:mt-4 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    <div>
                        <img
                            src={courierImage?.src || courierImage}
                            alt={services.imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        {services.sections.map((section, index) => (
                            <div key={index}>
                                {section.headingLevel === "h3" ? (
                                    <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#125194]">
                                        {section.title}
                                    </h3>
                                ) : (
                                    <h2 className="text-xl  font-semibold mb-2 text-[#125194]">
                                        {section.title}
                                    </h2>
                                )}
                                <p className="text-gray-700 leading-normal mb-4 text-justify" dangerouslySetInnerHTML={{ __html: section.description }} />
                                <button
                                    className="bg-[#125194] text-white font-normal py-2 px-6 rounded-full hover:bg-[#125194]/80 transition duration-300 text-sm"
                                    onClick={openModal}
                                >
                                    Enquire Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#125194] mt-4 sm:mt-4 md:mt-16">
                <div className="p-4 sm:p-4 md:p-28 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    {additionalSections.map((section, index) => (
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
                                <p className="text-[#ffffffcc] leading-relaxed mb-4 text-justify" dangerouslySetInnerHTML={{ __html: section.description }} />
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

            {/* Card Section - Workflow Steps */}
            <section className="mt-8 sm:mt-4 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div>
                    <div className="text-center mb-8 sm:mb-12">
                        <h2
                            className="text-xl md:text-4xl font-bold text-[#125194] mb-6"
                            dangerouslySetInnerHTML={{ __html: freightServices.title }}
                        />
                        <p className="text-gray-700 max-w-5xl mx-auto text-lg text-justify" dangerouslySetInnerHTML={{ __html: freightServices.description }} />
                    </div>
                </div>
            </section>

            {/* Two Grid Industries and Compliance Section - Below Cards */}
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
                                    <h2
                                        className="text-xl sm:text-2xl font-semibold mb-2 text-[#ffffff]"
                                        dangerouslySetInnerHTML={{ __html: section.title }}
                                    />
                                    <p className="text-[#ffffffcc] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: section.description }} />
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

            <section className="bg-white mt-4 sm:mt-4 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-xl sm:text-4xl font-bold text-[#125194] text-center" dangerouslySetInnerHTML={{ __html: SaudiToUzbekistanData.whyChoose.title }} />
                    <div className="text-gray-700 text-lg md:mx-0 mx-auto leading-normal text-justify" dangerouslySetInnerHTML={{ __html: SaudiToUzbekistanData.whyChoose.description }} />
                    <button
                        className="bg-[#125194] text-white font-normal py-3 px-8 rounded-full hover:bg-[#125194]/80 transition duration-300 text-base"
                        onClick={openModal}
                    >
                        Enquire Now
                    </button>
                </div>
            </section>

            {/* Card Section - Shipping Use Cases */}
            <section className="mt-8 sm:mt-4 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div>
                    <div className="text-center mb-8 sm:mb-12">
                        <h2
                            className="text-xl md:text-4xl font-bold text-[#125194] mb-6"
                            dangerouslySetInnerHTML={{ __html: shippingUseCases.title }}
                        />
                        <p className="text-gray-700 max-w-5xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: shippingUseCases.description }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {shippingUseCases.cards.map((card, index) => (
                            <div
                                key={index}
                                className="relative h-auto sm:min-h-[250px] bg-[#125194] text-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center text-center p-6"
                            >
                                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                                <p className="text-blue-100 leading-normal text-left" dangerouslySetInnerHTML={{ __html: card.description }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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

export default SaudiToUzbekistan;
