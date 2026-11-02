'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/UiComponents/Banner";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

// Using the new assets folder created for this page
import landingImage from "../../assets/images/Landing/qatarToBulgaria/banner.webp";
import courierImage from "../../assets/images/Landing/qatarToBulgaria/courier.webp";
import pickupImg from "../../assets/images/Landing/qatarToBulgaria/packing.webp";
import deliveryImg from "../../assets/images/Landing/qatarToBulgaria/delivery.webp";
import expertImg from "../../assets/images/Landing/qatarToBulgaria/expert.webp";
import handlingImg from "../../assets/images/Landing/qatarToBulgaria/handling.webp";
import accordianImg from "../../assets/images/Landing/qatarToBulgaria/accordian.webp";
import airFreightImg from "../../assets/images/Landing/qatarToBulgaria/air_freight.png";
import seaFreightImg from "../../assets/images/Landing/qatarToBulgaria/sea_freight.png";
import industrialEquipmentImg from "../../assets/images/Landing/qatarToBulgaria/industrial_equipment.png";

import QatarToBulgariaData from "./QatarToBulgariaData.js";

const QatarToBulgaria = () => {
    const {
        header,
        services,
        freightConnectivity,
        additionalSections,
        freightServices,
        customsClearance,
        customsDocumentation,
        whyChoose,
        faq,
        meta
    } = QatarToBulgariaData;

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
            <section className="relative w-full bg-[#125194] text-white py-12 sm:py-16 border-b border-white/10">
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
                            alt={freightConnectivity.title}
                            className="w-full h-full object-cover rounded-2xl shadow-lg min-h-[400px]"
                        />
                    </div>

                    {/* Right Column: Detailed Text Block */}
                    <div className="space-y-6 flex flex-col justify-center text-justify">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#125194]">
                            {freightConnectivity.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: freightConnectivity.description1 }} />
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: freightConnectivity.description2 }} />

                        {freightConnectivity.listItems && freightConnectivity.listItems.length > 0 && (
                            <ul className="list-disc pl-5 text-gray-700 text-base sm:text-lg space-y-1">
                                {freightConnectivity.listItems.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {freightConnectivity.closing && (
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: freightConnectivity.closing }} />
                        )}

                        <div className="space-y-6 pt-4 border-t border-gray-100">
                            {freightConnectivity.solutions.slice(0, 1).map((sol, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#125194]">
                                        {sol.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: sol.description }} />

                                    {/* Suitability list */}
                                    {sol.suitableItems.length > 0 && (
                                        <div className="pl-4 space-y-1">
                                            <p className="font-semibold text-gray-700 text-sm">{sol.suitableTitle}</p>
                                            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                                {sol.suitableItems.map((item, idx) => (
                                                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Provides list */}
                                    {sol.providesItems.length > 0 && (
                                        <div className="pl-4 space-y-1">
                                            <p className="font-semibold text-gray-700 text-sm">{sol.providesTitle}</p>
                                            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                                {sol.providesItems.map((item, idx) => (
                                                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <p className="text-gray-500 text-xs sm:text-sm pt-1" dangerouslySetInnerHTML={{ __html: sol.closing }} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* New Section for Air and Sea Freight */}
            <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-16 mx-4 sm:mx-4 md:mx-28 lg:mx-28 space-y-8 sm:space-y-12">
                {freightConnectivity.solutions.slice(1).map((sol, index) => {
                    const isFirst = index === 0;

                    return (
                        <div key={index} className="bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                                {/* Text Block */}
                                <div className={`space-y-4 flex flex-col justify-center ${isFirst ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#125194]">
                                        {sol.title}
                                    </h3>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: sol.description }} />

                                    {/* Suitability list */}
                                    {sol.suitableItems.length > 0 && (
                                        <div className="space-y-2">
                                            <p className="font-semibold text-gray-700 text-sm sm:text-base">{sol.suitableTitle}</p>
                                            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                                {sol.suitableItems.map((item, idx) => (
                                                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Provides list */}
                                    {sol.providesItems.length > 0 && (
                                        <div className="space-y-2">
                                            <p className="font-semibold text-gray-700 text-sm sm:text-base">{sol.providesTitle}</p>
                                            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
                                                {sol.providesItems.map((item, idx) => (
                                                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {sol.closing && <p className="text-gray-500 text-sm pt-2" dangerouslySetInnerHTML={{ __html: sol.closing }} />}
                                </div>

                                {/* Image Block */}
                                <div className={`flex items-stretch ${isFirst ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
                                    <img
                                        src={index === 0 ? (airFreightImg?.src || airFreightImg) : (seaFreightImg?.src || seaFreightImg)}
                                        alt={sol.title}
                                        className="w-full h-full object-cover rounded-xl shadow-md min-h-[300px]"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="pt-4 flex justify-center">
                    <button
                        className="bg-[#125194] text-white font-normal py-3 px-10 rounded-full hover:bg-[#125194]/80 transition duration-300 text-base shadow-md"
                        onClick={openModal}
                    >
                        Enquire Now
                    </button>
                </div>
            </section>

            <section className="bg-[#125194] mt-4 sm:mt-4 md:mt-16">
                <div className="p-4 sm:p-4 md:p-28 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    {additionalSections.slice(0, 2).map((section, index) => (
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

            {/* Third Additional Section: Industrial Equipment */}
            {additionalSections.length > 2 && (
                <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-16 mx-4 sm:mx-4 md:mx-28 lg:mx-28 bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                        {/* Image Block - Left Side */}
                        <div className="flex items-stretch order-1 md:order-1">
                            <img
                                src={industrialEquipmentImg?.src || industrialEquipmentImg}
                                alt={additionalSections[2].imageAlt}
                                className="w-full h-full object-cover rounded-xl shadow-md min-h-[300px]"
                            />
                        </div>

                        {/* Text Block - Right Side */}
                        <div className="space-y-4 flex flex-col justify-center order-2 md:order-2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194]">
                                {additionalSections[2].title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: additionalSections[2].description }} />

                            <div className="pt-4">
                                <button
                                    className="bg-[#125194] text-white font-normal py-3 px-8 rounded-full hover:bg-[#125194]/80 transition duration-300 text-base shadow-md"
                                    onClick={openModal}
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

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

            {/* Customs Compliance and Documentation Management Section */}
            <section className="bg-slate-50 mt-4 sm:mt-4 md:mt-20 lg:mt-20 py-12 sm:py-16 md:py-20">
                <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column: Title & Descriptions */}
                        <div className="lg:col-span-7 space-y-6 text-justify">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] text-left">
                                {customsDocumentation.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {customsDocumentation.description1}
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {customsDocumentation.description2}
                            </p>
                            {customsDocumentation.closing && (
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                                    {customsDocumentation.closing}
                                </p>
                            )}
                            <button
                                className="bg-[#125194] text-white font-normal py-3 px-8 rounded-full hover:bg-[#125194]/80 transition duration-300 text-base"
                                onClick={openModal}
                            >
                                Enquire Now
                            </button>
                        </div>

                        {/* Right Column: Key Requirements Card */}
                        <div className="lg:col-span-5">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-50/50 space-y-6">
                                {customsDocumentation.subtitle && (
                                    <h3 className="text-lg sm:text-xl font-bold text-[#125194] border-b border-blue-50 pb-4">
                                        {customsDocumentation.subtitle}
                                    </h3>
                                )}
                                <ul className="space-y-4">
                                    {customsDocumentation.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-700 text-sm sm:text-base">
                                            <span className="flex-shrink-0 text-green-500 font-semibold text-lg leading-none">✓</span>
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white mt-4 sm:mt-4 md:mt-20 lg:mt-20 mx-4 sm:mx-4 md:mx-28 lg:mx-28">
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-xl sm:text-4xl font-bold text-[#125194] text-center" dangerouslySetInnerHTML={{ __html: whyChoose.title }} />
                    <div className="text-gray-700 text-lg md:mx-0 mx-auto leading-normal text-justify" dangerouslySetInnerHTML={{ __html: whyChoose.description }} />
                    <button
                        className="bg-[#125194] text-white font-normal py-3 px-8 rounded-full hover:bg-[#125194]/80 transition duration-300 text-base"
                        onClick={openModal}
                    >
                        Enquire Now
                    </button>
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

export default QatarToBulgaria;
