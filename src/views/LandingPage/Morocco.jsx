'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/UiComponents/Banner";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

// Main images
import landingImage from "../../assets/images/Landing/Morocco/banner-oman-to-morocco.webp";
import courierImage from "../../assets/images/Landing/Morocco/comprehensive-cargo-shipping-oman-to-morocco.webp";
import deliveryImg from "../../assets/images/Landing/Morocco/air-freight-services-oman-to-morocco.webp";
import expertImg from "../../assets/images/Landing/Morocco/freight-forwarding-oman-to-morocco.webp";
import handlingImg from "../../assets/images/Landing/Morocco/commercial-cargo-oman-to-morocco.webp";
import projectImg from "../../assets/images/Landing/Morocco/project-cargo-oman-to-morocco.webp";
import serveImg from "../../assets/images/Landing/Morocco/sea-freight-services-oman-to-morocco.webp";

import moroccoData from "./moroccoData.js";

const Morocco = () => {
    const {
        meta,
        hero,
        reliableCargo,
        airFreight,
        seaFreight,
        commercialCargo,
        projectCargo,
        freightForwarding,
        process,
        industries,
        whyChoose,
        faq
    } = moroccoData;

    const [activeIndex, setActiveIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            

            {/* Banner Section */}
            <Banner bgImage={landingImage} title={hero.title} bgImageAlt="World cargo map showing global shipping routes for cargo shipping Oman to Morocco" />

            {/* Hero Section: Sub-header Block (Dark Blue Background) */}
            <section className="relative w-full bg-[#125194] text-white py-12 sm:py-16 border-b border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-justify md:text-left space-y-6">
                    {hero.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-blue-50 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                    <div className="pt-4 flex justify-center md:justify-start">
                        <button
                            className="bg-white text-[#125194] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-sm sm:text-base shadow-md"
                            onClick={openModal}
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Reliable Cargo Solutions Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {reliableCargo.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: reliableCargo.description }} />
                            <div className="space-y-4">
                                <h3 className="text-lg sm:text-xl font-bold text-[#125194]">
                                    {reliableCargo.listTitle}
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1">
                                    {reliableCargo.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-700">
                                            <span className="text-green-500 font-semibold text-lg">✓</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed border-t border-gray-100 pt-4">
                                {reliableCargo.closing}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={courierImage?.src || courierImage}
                                alt="Comprehensive Cargo Shipping from Oman to Morocco"
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Freight Services Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {airFreight.title}
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                {airFreight.subtitle}
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: airFreight.description }} />
                            <div className="space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-700">{airFreight.listTitle}</h3>
                                <ul className="space-y-2">
                                    {airFreight.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                            <span className="text-[#125194] font-bold">•</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                                {airFreight.closing}
                            </p>
                            <button
                                className="bg-[#125194] text-white py-2 px-6 rounded-full hover:bg-[#125194]/80 transition duration-300 text-sm"
                                onClick={openModal}
                            >
                                Enquire Now
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={deliveryImg?.src || deliveryImg}
                                alt="Air Freight Services from Oman to Morocco"
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sea Freight Services Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center order-2 lg:order-1">
                            <img
                                src={serveImg?.src || serveImg}
                                alt="Sea Freight Services from Oman to Morocco"
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {seaFreight.title}
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                {seaFreight.subtitle}
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: seaFreight.description }} />
                            <div className="space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-700">{seaFreight.listTitle}</h3>
                                <ul className="space-y-2">
                                    {seaFreight.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                            <span className="text-[#125194] font-bold">•</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                                {seaFreight.closing}
                            </p>
                            <button
                                className="bg-[#125194] text-white py-2 px-6 rounded-full hover:bg-[#125194]/80 transition duration-300 text-sm"
                                onClick={openModal}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commercial Cargo Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {commercialCargo.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: commercialCargo.description }} />
                            <div className="space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-[#125194]">{commercialCargo.listTitle}</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1">
                                    {commercialCargo.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                            <span className="text-green-500">✓</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                                {commercialCargo.closing}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={handlingImg?.src || handlingImg}
                                alt="Commercial Cargo Transportation from Oman to Morocco"
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Cargo Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center order-2 lg:order-1">
                            <img
                                src={projectImg?.src || projectImg}
                                alt="Project Cargo from Oman to Morocco"
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-6 text-justify md:text-left order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {projectCargo.title}
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                {projectCargo.subtitle}
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: projectCargo.description }} />
                            <div className="space-y-6">
                                {projectCargo.sections.map((section, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h3 className="text-lg font-bold text-[#125194]">{section.title}</h3>
                                        <ul className="space-y-1.5 pl-1">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start space-x-3 text-gray-600">
                                                    <span className="text-[#125194] font-bold">•</span>
                                                    <span className="text-sm sm:text-base">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                                {projectCargo.closing}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Freight Forwarding & Customs Support Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {freightForwarding.title}
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                {freightForwarding.subtitle}
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {freightForwarding.description}
                            </p>
                            <div className="space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-[#125194]">{freightForwarding.listTitle}</h3>
                                <ul className="space-y-2">
                                    {freightForwarding.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                            <span className="text-green-500">✓</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                                {freightForwarding.closing}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={expertImg?.src || expertImg}
                                alt="Freight Forwarding from Oman to Morocco"
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cargo Transportation Process Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">
                            {process.title}
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mt-4" dangerouslySetInnerHTML={{ __html: process.description }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.steps.map((step, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-[#125194] text-white flex items-center justify-center font-bold text-lg">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#125194]">{step.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-left">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Support Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">
                            {industries.title}
                        </h2>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mt-2">
                            {industries.subtitle}
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto mt-4 leading-relaxed">
                            {industries.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {industries.items.map((item, idx) => (
                            <div key={idx} className="bg-[#125194] p-6 rounded-xl border border-slate-100 shadow-sm text-center font-semibold text-white hover:bg-white hover:text-[#125194] transition duration-300 flex items-center justify-center">
                                <h3 className="text-sm sm:text-base font-semibold">{item}</h3>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 text-sm sm:text-base mt-8 italic">
                        {industries.closing}
                    </p>
                </div>
            </section>

            {/* Why Choose ALSI Global Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">
                                {whyChoose.title}
                            </h2>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                {whyChoose.subtitle}
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {whyChoose.description}
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                                {whyChoose.closing}
                            </p>
                            <button
                                className="bg-[#125194] text-white py-3 px-8 rounded-full hover:bg-[#125194]/80 transition duration-300 text-base shadow-md"
                                onClick={openModal}
                            >
                                Enquire Now
                            </button>
                        </div>
                        <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <ul className="space-y-4">
                                {whyChoose.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-700">
                                        <span className="text-green-500 font-bold">✓</span>
                                        <span className="text-base sm:text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="py-12 sm:py-20 bg-[#125194] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 text-center">
                            {faq.title}
                        </h2>
                        <div className="space-y-4">
                            {faq.items.map((item, index) => (
                                <div key={index} className="border-b border-blue-400/50 pb-4">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="flex justify-between items-center w-full text-left focus:outline-none"
                                    >
                                        <h3 className="text-lg sm:text-xl font-semibold">{item.question}</h3>
                                        <motion.span
                                            className="text-2xl pl-4"
                                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            {activeIndex === index ? "−" : "+"}
                                        </motion.span>
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
                                                <p className="text-sm sm:text-base leading-relaxed">{item.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enquire Now Modal */}
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

export default Morocco;