'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Banner from "../../components/UiComponents/Banner";
import GetQuoteForm from "../../components/UiComponents/Form/GetQuoteForm.js";

import bannerImg from "../../assets/images/Landing/AirFreightDubai/Air Freight Services from Dubai.webp";
import professionalAirFreightImg from "../../assets/images/Landing/AirFreightDubai/International Air Freight Solutions from Dubai.webp";
import whenRightChoiceImg from "../../assets/images/Landing/AirFreightDubai/When Dubai Businesses Choose Air Freight.webp";
import specializedCargoImg from "../../assets/images/Landing/AirFreightDubai/Specialized Air Cargo Solutions in Dubai.webp";
import doorToDoorImg from "../../assets/images/Landing/AirFreightDubai/Door-to-Door and Airport Air Freight in Dubai.webp";

import AirFreightDubaiData from "./AirFreightDubaiData.js";

const AirFreightDubai = () => {
    const {
        meta,
        hero,
        professionalAirFreight,
        whenRightChoice,
        internationalServices,
        cargoWeTransport,
        doorToDoor,
        cargoCollection,
        specializedSolutions,
        packingSupport,
        process,
        industries,
        whyChoose,
        requestQuotation,
        faq
    } = AirFreightDubaiData;

    const [activeIndex, useStateIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAccordion = (index) => {
        useStateIndex(activeIndex === index ? null : index);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            

            {/* Banner Section */}
            <Banner 
                bgImage={bannerImg} 
                title={hero.title} 
                bgImageAlt={hero.title} 
                heightClass="h-[500px] md:h-[400px] "
                backgroundPosition="bottom center"
            />

            {/* Hero Section */}
            <section className="relative w-full bg-[#125194] text-white py-12 sm:py-16 border-b border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-justify md:text-left space-y-3">
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

            {/* Professional Air Freight Solutions */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-2 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {professionalAirFreight.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: professionalAirFreight.description }} />
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1">
                                {professionalAirFreight.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: professionalAirFreight.closing }} />
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={professionalAirFreightImg?.src || professionalAirFreightImg}
                                alt={professionalAirFreight.imageAlt}
                                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* When Air Freight Is the Right Choice */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center order-2 lg:order-1">
                            <img
                                src={whenRightChoiceImg?.src || whenRightChoiceImg}
                                alt={whenRightChoice.imageAlt}
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-2 text-justify md:text-left order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {whenRightChoice.title}
                            </h2>
                            {whenRightChoice.subtitle && (
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                    {whenRightChoice.subtitle}
                                </h3>
                            )}
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whenRightChoice.description }} />
                            <div className="space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-700">{whenRightChoice.listTitle}</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1">
                                    {whenRightChoice.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                            <span className="text-[#125194] font-bold">✓</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base pt-2">
                                {whenRightChoice.closing}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* International Services & Cargo We Transport */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* International Services */}
                        <div className="space-y-2 text-justify md:text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                {internationalServices.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: internationalServices.description }} />
                            {internationalServices.items && internationalServices.items.length > 0 && (
                                <ul className="space-y-2">
                                    {internationalServices.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                            <span className="text-[#125194] font-bold">•</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: internationalServices.closing }} />
                        </div>
                        {/* Cargo We Transport */}
                        <div className="space-y-2 text-justify md:text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                {cargoWeTransport.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: cargoWeTransport.description }} />
                            <ul className="space-y-2">
                                {cargoWeTransport.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-[#125194] font-bold">•</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: cargoWeTransport.closing }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Door-to-Door & Specialized Solutions */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {/* Specialized Solutions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={specializedCargoImg?.src || specializedCargoImg}
                                alt={specializedSolutions.imageAlt}
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                        <div className="space-y-2 text-justify md:text-left">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {specializedSolutions.title}
                            </h2>
                            {specializedSolutions.subtitle && (
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                    {specializedSolutions.subtitle}
                                </h3>
                            )}
                            <div className="space-y-2">
                                {specializedSolutions.sections.map((section, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h3 className="text-lg font-bold text-[#125194]">{section.title}</h3>
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: section.description }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Door to Door */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-justify md:text-left order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-4xl font-bold text-[#125194] leading-tight">
                                {doorToDoor.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: doorToDoor.description }} />
                            <div className="space-y-6">
                                {doorToDoor.sections.map((section, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h3 className="text-lg font-bold text-[#125194]">{section.title}</h3>
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center order-1 lg:order-2">
                            <img
                                src={doorToDoorImg?.src || doorToDoorImg}
                                alt={doorToDoor.imageAlt}
                                className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl border border-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cargo Collection & Packing Support */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Cargo Collection */}
                        <div className="space-y-6 text-justify md:text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                {cargoCollection.title}
                            </h2>
                            <div className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: cargoCollection.description }} />
                        </div>
                        {/* Packing & Customs Support */}
                        <div className="space-y-6 text-justify md:text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] leading-tight">
                                    {packingSupport.title}
                                </h2>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: packingSupport.description }} />
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1 mt-4">
                                    {packingSupport.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                            <span className="text-green-500">✓</span>
                                            <span className="text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-gray-700 text-base sm:text-lg leading-relaxed pt-6" dangerouslySetInnerHTML={{ __html: packingSupport.closing }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Freight Process */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#125194]">
                            {process.title}
                        </h2>
                        {process.description && (
                            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: process.description }} />
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.steps.map((step, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-[#125194] text-white flex items-center justify-center font-bold text-lg">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#125194]">{step.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: step.description }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose & Request Quotation Section */}
            <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Why Choose & Industries */}
                        <div className="space-y-8">
                            {/* Industries We Support */}
                            <div className="space-y-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#125194]">
                                    {industries.title}
                                </h2>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: industries.description }} />
                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: industries.closing }} />
                            </div>

                            <hr className="border-slate-200" />

                            {/* Why Choose */}
                            <div className="space-y-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#125194]">
                                    {whyChoose.title}
                                </h2>
                                {whyChoose.subtitle && (
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                                        {whyChoose.subtitle}
                                    </h3>
                                )}
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whyChoose.description }} />
                            </div>
                        </div>
                        {/* Request Quotation */}
                        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-md">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#125194] mb-4">
                                {requestQuotation.title}
                            </h2>
                            <p className="font-semibold text-gray-700 text-base sm:text-lg mb-4">{requestQuotation.description}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {requestQuotation.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                                        <span className="text-[#125194] font-bold">•</span>
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-600 text-sm sm:text-base mb-6">
                                {requestQuotation.closing}
                            </p>
                            <button
                                className="w-full bg-[#125194] text-white py-3 px-6 rounded-full hover:bg-[#125194]/90 transition duration-300 text-base font-semibold shadow-md"
                                onClick={openModal}
                            >
                                Get a Quote
                            </button>
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
                                        <h3 className="text-lg sm:text-xl font-semibold pr-4">{item.question}</h3>
                                        <motion.span
                                            className="text-2xl"
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
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 backdrop-brightness-50" onClick={closeModal}></div>
                        <div className="relative rounded-xl shadow-lg w-full max-w-md mx-auto z-50 bg-transparent">
                            <button
                                className="absolute top-4 right-4 text-gray-100 hover:text-gray-200 transition duration-300 border-[3px] border-gray-100 hover:border-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
                                onClick={closeModal}
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-sm" />
                            </button>
                            <GetQuoteForm formTitle="Enquire Now" closeModal={closeModal} />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AirFreightDubai;
